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

Writes from MCP are proposals. They require approval in Collabute and do not mutate Linear, Slack, or Vercel directly.

## Support

- Docs: https://collabute.com
- Issues: https://github.com/collabute/cursor-plugin/issues
- Email: team@collabute.com
