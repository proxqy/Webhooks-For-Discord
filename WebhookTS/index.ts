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

async function main() {
  const payload = {
    type: 0,
    flags: 32768,
    components: [
      {
        type: 17,
        accent_color: ACCENT_COLOR,
        components: [

          {
            type: 10,
            content:
              `## <:StumblePriz:1476250538252308622> StumblePriz Releases\n` +
              `<:BF:1476248719966867609> Any other server sharing our content is not legitimate. The only source you can trust is us. <:Yes:1476277222020223117>`
          },

          { type: 14, divider: true },

          {
            type: 10,
            content:
              `<:dot:1476248608369279129> **MelonLoader version:** \`0.6.4\` <:MelonLoader:1476276595068244042>\n` +
              `<:BF:1476248719966867609> MelonLoader is a safe open-source modding framework used to mod Unity games.`
          },

          {
            type: 10,
            content:
              `<:dot:1476248608369279129> **Stumble Guys version:** \`0.56\` <:StumbleGuy:1476277108924743793>\n` +
              `<:BF:1476248719966867609> This is the build used to host Classic Tournaments. Released 13 September 2023.`
          },

          {
            type: 10,
            content:
              `<:dot:1476248608369279129> **StumblePriz version:** \`1.3\` <:StumblePriz:1476250538252308622>\n` +
              `<:BF:1476248719966867609> Current release version with new features added regularly.`
          },

          {
            type: 10,
            content:
              `<:dot:1476248608369279129> **StumblePriz Mobile:** \`1.3-mob-port\` <:StumblePriz:1476250538252308622>\n` +
              `<:BF:1476248719966867609> Current released version of the APK client.`
          },

          { type: 14, divider: true },

          {
            type: 10,
            content:
              `<:dot:1476248608369279129> **How to play?**\n` +
              `<:BF:1476248719966867609> Download the game folder and install the DLL. After downloading, place \`ClientLoader.dll\` inside the \`Mods\` folder in your StumblePriz directory.`
          },

          { type: 14, divider: true },

          {
            type: 10,
            content: `## <:StumblePriz:1476250538252308622> StumblePriz Downloads`
          },

          { type: 14, divider: true },

          {
            type: 9,
            components: [
              {
                type: 10,
                content:
                  `<:StumblePriz:1476250538252308622> **MOB Download**\n` +
                  `<:BF:1476248719966867609> **Android**`
              }
            ],
            accessory: {
              type: 2,
              style: 5,
              label: "Download here (APK)",
              url: "https://mega.nz/file/7jxmnLoS#-oXh1LND633En-VN2HtxJjkTNwFHJW4LcHsRrBewang"
            }
          },

          { type: 14, divider: true },

          {
            type: 9,
            components: [
              {
                type: 10,
                content:
                  `<:StumblePriz:1476250538252308622> **PC Download**\n` +
                  `<:BF:1476248719966867609> **Game Folder**`
              }
            ],
            accessory: {
              type: 2,
              style: 5,
              label: "Download here (Game Folder)",
              url: "https://mega.nz/file/O8QyACTK#x7gnGBWCD1mgtZLpO9eXmXZ8m82_FzG5QqY9fl1hdsY"
            }
          },

          { type: 14, divider: true },

          {
            type: 9,
            components: [
              {
                type: 10,
                content:
                  `<:StumblePriz:1476250538252308622> **PC Download**\n` +
                  `<:BF:1476248719966867609> **Loader DLL**`
              }
            ],
            accessory: {
              type: 2,
              style: 5,
              label: "Download here (DLL)",
              url: "https://mega.nz/file/iogWWBbD#JZ_-2ez4jy4uSfakVTiZe2r2Zg4OoCG7zYLBCLh3DQs"
            }
          },

          { type: 14, divider: true },

          {
            type: 10,
            content:
              `<:StumblePriz:1476250538252308622> **Required Dependencies**\n`
          },

          {
            type: 9,
            components: [
              {
                type: 10,
                content: `<:BF:1476248719966867609> **Visual C++ Redistributable**`
              }
            ],
            accessory: {
              type: 2,
              style: 5,
              label: "Visual C++ Redistributable",
              url: "https://aka.ms/vs/17/release/vc_redist.x64.exe"
            }
          },

          {
            type: 9,
            components: [
              {
                type: 10,
                content: `<:BF:1476248719966867609>**.NET Runtime 6.0**`
              }
            ],
            accessory: {
              type: 2,
              style: 5,
              label: ".NET Runtime 6.0",
              url: "https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-6.0.35-windows-x64-installer"
            }
          }

        ]
      }
    ]
  };

  const webhookUrl =
    WEBHOOK_URI.replace(
      "https://discord.com/api/webhooks/",
      "https://discord.com/api/v10/webhooks/"
    ) + "?wait=true&with_components=true";

  const res = await postJson(webhookUrl, payload);

  if (!res.ok) throw new Error("Message failed to send.");
}

main().catch((e) => console.error(e?.message ?? e));
