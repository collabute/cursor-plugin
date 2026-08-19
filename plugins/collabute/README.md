# Collabute

Cursor plugin that connects the agent to [Collabute MCP](https://api.collabute.ai/api/mcp).

Use it when you need organization context from meetings, memory, Linear, Slack, or Vercel.

## Install

1. Open **Customize** in Cursor.
2. Search for **Collabute**.
3. Install the plugin.
4. Complete OAuth when Cursor prompts on first MCP use.

Local development:

```bash
ln -s "$(pwd)/plugins/collabute" ~/.cursor/plugins/local/collabute
```

Then reload the Cursor window.

## What this plugin includes

- Remote MCP server at `https://api.collabute.ai/api/mcp` (Streamable HTTP + OAuth)
- `collabute-mcp` skill with retrieval and proposal-safe write playbooks

Writes from MCP are proposals. They require approval in Collabute and do not mutate Linear, Slack, or Vercel directly. This matches Collabute’s suggest-and-approve model in the Terms of Service.

Installing this plugin from Cursor is free. Using MCP requires a Collabute account as an Authorized User. Collabute Services may require a paid subscription after any free trial.

## Data this plugin can access

After OAuth, Cursor sends requests to `https://api.collabute.ai/api/mcp` with a token bound to one Collabute user and organization. The agent may retrieve workspace data your organization already stored in Collabute or authorized through connected integrations, including meetings and transcripts, memory, Slack, Linear, and Vercel.

Collabute does not use Customer Data to train AI models. Customer Data remains the Customer’s. Full details are in the Privacy Policy and [LEGAL.md](../../LEGAL.md).

## Legal

- [Terms of Service](https://collabute.com/terms-and-conditions)
- [Privacy Policy](https://collabute.com/privacy-policy)
- [EULA](https://collabute.com/eula)
- DPA and sub-processors: legal@collabute.com
- [LEGAL.md](../../LEGAL.md)
- [SECURITY.md](../../SECURITY.md)

## Support

- Docs: https://collabute.com
- Issues: https://github.com/collabute/cursor-plugin/issues
- Support: team@collabute.com
- Privacy: privacy@collabute.com
- Legal: legal@collabute.com
