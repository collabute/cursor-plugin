# Legal and data disclosures

This plugin is published by **Collabute LLC**. Installing it from the Cursor Marketplace is free. Using Collabute MCP requires a Collabute account as an Authorized User of a Customer organization. Collabute Services may be offered as a free trial and then a paid subscription, as described in the Terms of Service. That product subscription is separate from this plugin listing.

These summaries follow Collabute’s published legal documents. If anything here conflicts with those documents, the website versions control.

## Governing documents

| Document | URL |
| --- | --- |
| Terms of Service | https://collabute.com/terms-and-conditions |
| Privacy Policy | https://collabute.com/privacy-policy |
| End User License Agreement | https://collabute.com/eula |
| Data Processing Addendum and sub-processors | Available on request at legal@collabute.com |

Publisher contact:

- Support: team@collabute.com
- Privacy: privacy@collabute.com
- Legal: legal@collabute.com

Collabute LLC  
8th Green, STE R  
Dover, DE 19901  
United States

## What this plugin accesses

After you install the plugin and complete OAuth, Cursor talks to Collabute MCP at `https://api.collabute.ai/api/mcp`. The access token is bound to one Collabute user and one organization.

The agent can then request workspace data that your organization has already stored in Collabute or authorized through Third Party Integrations, including:

- Meeting metadata, summaries, transcripts, and related memory
- Slack messages, channels, and user profiles, when Slack is connected
- Linear tasks, projects, and related activity, when Linear is connected
- Vercel project and deployment status, when Vercel is connected
- Other scopes granted at OAuth time, such as calendar, Gmail, Jira, GitHub, PostHog, or Notion

The plugin does not ship API keys or personal access tokens. Cursor starts OAuth on first MCP use. You can revoke access from your Collabute account.

## How Collabute uses that data

From the [Terms of Service](https://collabute.com/terms-and-conditions) and [Privacy Policy](https://collabute.com/privacy-policy):

- **Customer Data stays yours.** Content submitted through the Services, including data pulled from connected integrations, remains Customer Data. Collabute does not claim ownership of it.
- **License is limited to providing the Services.** Customer grants Collabute a license to process Customer Data only as needed to provide the Services during the subscription.
- **No model training.** Collabute does not use Customer Data to train, fine-tune, or improve its own or third-party AI or machine learning models. Model providers receive data for inference only.
- **Writes are suggest-and-approve.** MCP write tools create proposals that require approval. They do not mutate Linear, Slack, Vercel, or other third-party systems directly.
- **No sale of personal data.** Collabute does not sell or share personal data as defined under the CCPA.
- **No Sensitive Data.** The Services are not designed to store special-category, health, payment-card, or government-ID data.
- **User-generated content stays with the user.** Collabute does not claim ownership of User Content created in Cursor through this plugin.

## Security and incidents

See [SECURITY.md](./SECURITY.md). Report a vulnerability or data incident to legal@collabute.com and privacy@collabute.com. Marketplace-related incidents are also reported to legal@cursor.com.
