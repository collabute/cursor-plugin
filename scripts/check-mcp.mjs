#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const pluginDir = path.join(process.cwd(), "plugins", "collabute");

function fail(message) {
  console.error(`MCP check failed: ${message}`);
  process.exit(1);
}

function asObject(value, label) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    fail(`${label} must be a JSON object`);
  }
  return value;
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: { accept: "application/json" },
  });
  const text = await response.text();
  let body = null;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    fail(`${url} returned non-JSON body (HTTP ${response.status})`);
  }
  return { response, body };
}

const mcpConfig = JSON.parse(await readFile(path.join(pluginDir, "mcp.json"), "utf8"));
const servers = asObject(mcpConfig.mcpServers, "mcp.json mcpServers");
const collabute = asObject(servers.collabute, "mcpServers.collabute");

if (collabute.transport !== "http") {
  fail(`expected transport "http", got ${JSON.stringify(collabute.transport)}`);
}

const mcpUrl = collabute.url;
if (typeof mcpUrl !== "string" || !mcpUrl.startsWith("https://")) {
  fail("mcpServers.collabute.url must be an https URL");
}

const resourceUrl = new URL(".well-known/oauth-protected-resource", `${mcpUrl.replace(/\/?$/, "/")}`);
const authorizationUrl = new URL(".well-known/oauth-authorization-server", `${mcpUrl.replace(/\/?$/, "/")}`);

const resource = await fetchJson(resourceUrl);
if (resource.response.status !== 200) {
  fail(`protected resource metadata HTTP ${resource.response.status} at ${resourceUrl}`);
}
if (resource.body.resource !== mcpUrl) {
  fail(`protected resource metadata resource mismatch: ${resource.body.resource}`);
}

const authorization = await fetchJson(authorizationUrl);
if (authorization.response.status !== 200) {
  fail(`authorization server metadata HTTP ${authorization.response.status} at ${authorizationUrl}`);
}

const requiredAuthorizationFields = [
  "authorization_endpoint",
  "token_endpoint",
  "registration_endpoint",
];
for (const field of requiredAuthorizationFields) {
  if (typeof authorization.body[field] !== "string" || authorization.body[field].length === 0) {
    fail(`authorization server metadata missing ${field}`);
  }
}

const mcpResponse = await fetch(mcpUrl, {
  method: "POST",
  headers: {
    "content-type": "application/json",
    accept: "application/json, text/event-stream",
  },
  body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "ping" }),
});

if (mcpResponse.status !== 401) {
  fail(`unauthenticated MCP POST should return 401, got ${mcpResponse.status}`);
}

const wwwAuthenticate = mcpResponse.headers.get("www-authenticate") ?? "";
if (!wwwAuthenticate.toLowerCase().includes("resource_metadata")) {
  fail("unauthenticated MCP POST missing WWW-Authenticate resource_metadata challenge");
}

console.log("MCP check passed.");
console.log(`- url: ${mcpUrl}`);
console.log(`- oauth resource: ${resource.body.resource}`);
console.log(`- authorization endpoint: ${authorization.body.authorization_endpoint}`);
console.log(`- unauthenticated POST: ${mcpResponse.status}`);
