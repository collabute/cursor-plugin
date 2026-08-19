# Collabute Cursor plugin

Official Cursor plugin for [Collabute](https://collabute.com). It packages the remote Collabute MCP server and the `collabute-mcp` skill so Cursor can use meetings, memory, Linear, Slack, and Vercel context from your workspace.

Built from the [Cursor plugin template](https://github.com/cursor/plugin-template).

## Plugin

| Plugin | Contents |
| --- | --- |
| [`plugins/collabute`](./plugins/collabute) | MCP (`https://api.collabute.ai/api/mcp`) + `collabute-mcp` skill |

Auth is OAuth. The plugin does not ship API keys or PATs. Installing the plugin from Cursor is free. Using MCP requires a Collabute account.

## Legal

Marketplace users can review Collabute’s terms and privacy policy here:

- [Terms of Service](https://collabute.com/terms-and-conditions)
- [Privacy Policy](https://collabute.com/privacy-policy)
- [EULA](https://collabute.com/eula)
- DPA and sub-processors: legal@collabute.com
- Plugin-specific data disclosures: [LEGAL.md](./LEGAL.md)
- Security reporting: [SECURITY.md](./SECURITY.md)

## Local development

```bash
node scripts/validate-template.mjs
node scripts/check-mcp.mjs
mkdir -p ~/.cursor/plugins/local
ln -sf "$(pwd)/plugins/collabute" ~/.cursor/plugins/local/collabute
```

Reload the Cursor window, then complete OAuth when the `collabute` MCP server first needs it.

## Validate

```bash
node scripts/validate-template.mjs
node scripts/check-mcp.mjs
```

- `validate-template.mjs` checks marketplace/plugin manifests and skill frontmatter.
- `check-mcp.mjs` checks production MCP OAuth discovery and that unauthenticated calls return `401`.

## Publish

This repository is the public source for the Collabute Cursor plugin.

1. Push to `collabute/cursor-plugin`.
2. Submit the repo at [cursor.com/marketplace/publish](https://cursor.com/marketplace/publish).

## License

The plugin source in this repository is MIT. Use of Collabute MCP and Customer Data is governed by the [Terms of Service](https://collabute.com/terms-and-conditions) and [Privacy Policy](https://collabute.com/privacy-policy).
