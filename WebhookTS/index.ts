/*make sure to change the emojies and name from StumblePriz, this was used for my personal project
also, make sure to change this (index.js) with whatever webhook you want to push, from the "otherwebhooks" folder */

const WEBHOOK_URI = "YOUR_WEBHOOK_HERE";

const ACCENT_COLOR = parseInt("3FFF36", 16);

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


  const webhookUrl =
    WEBHOOK_URI.replace(
      "https://discord.com/api/webhooks/",
      "https://discord.com/api/v10/webhooks/"
    ) + "?wait=true&with_components=true";

  const res = await postJson(webhookUrl, payload);

  if (!res.ok) throw new Error("Message failed to send.");
}

main().catch((e) => console.error(e?.message ?? e));
