/* proxqy00: make sure to replace webhook with ur own link or api and hex color edit from [accent_color: parseInt("000000", 16)], 
make so to not add # */

const WEBHOOK_URI = "https://discord.com/api/webhooks/1481751516854485047/HA7BnUqeM2X8PJjgqvMagdEEamDndUJkFiYFQvVJ8mdr-wKBHd6g5hPbqO8oJjgoIPG-";

async function postJson(url: string, body: any) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  console.log("STATUS:", res.status);
  console.log(text);
  return { ok: res.ok, status: res.status, text };
}

async function main() {
  console.log("=== Plain message test ===");
  const plain = await postJson(WEBHOOK_URI + "?wait=true", {
    content: "****",
  });
  if (!plain.ok) throw new Error("Plain message failed — webhook or payload issue.");

  console.log("=== Components rules message ===");

  const payload = {
    type: 0,
    flags: 32768,
    components: [
      {
        type: 17,
        accent_color: parseInt("000000", 16),
        components: [
          {
            type: 9,
            components: [
              {
                type: 10,
                content:
                  `## **-FKX- Touch Football Rules**\n` +
                  `  <:BF:1476248719966867609> **Breaking any rules may result in a permanent ban from our Discord server, and ingame as well.**`,
              },
            ],
            accessory: {
              type: 11,
              media: {
                url: "https://i.imgur.com/90VHNVX.png",
              },
            },
          },

          { type: 14, divider: true },

          {
            type: 10,
            content:
              `<:dot:1476248608369279129> **Chat Spam**\n` +
              `  <:BF:1476248719966867609> **Spamming or generally flooding the chat will not be tolerated, if repeated multiple times, you can get muted for up to 28 days**.`,
          },

          { type: 14, divider: true },

          {
            type: 10,
            content:
              `<:dot:1476248608369279129> **Respect**\n` +
              `  <:BF:1476248719966867609> **Leaking other members private informations, doxxing, and bullying is strictly prohibited, anyone seen doing this kind of stuff will be immediately permanently banned from both ingame and Discord server.**`,
          },

          { type: 14, divider: true },

          {
            type: 10,
            content:
              `<:dot:1476248608369279129> **Media**\n` +
              `  <:BF:1476248719966867609> **If anyone is seen sending any kind of racist or NSFW image, he will be immediately banned from both ingame and Discord server.**`,
          },

          { type: 14, divider: true },

          {
            type: 10,
            content:
              `<:dot:1476248608369279129> **Discord TOS**\n` +
              `  <:BF:1476248719966867609> **Not following Discord's Terms of Service will result in a ban, from either the server, or from Discord completely.**`,
          },
        ],
      },
    ],
  };

  const webhookUrl =
    WEBHOOK_URI.replace("https://discord.com/api/webhooks/", "https://discord.com/api/v10/webhooks/") +
    "?wait=true&with_components=true";

  const comp = await postJson(webhookUrl, payload);
  if (!comp.ok) throw new Error("Components message failed — see status + JSON above.");
}

main().catch((e) => console.error("❌", e?.message ?? e));