const fs = require("fs-extra");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: __dirname + "/config.env" });

//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94702481115"; // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb =
  process.env.MONGODB_URI ||
  "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority";
global.port = process.env.PORT || 5000;
global.email = "Sithumkalhara271@gmail.com";
global.github = "https://github.com/vishwamihiranga";
global.location = "Sri Lanka";
global.gurl = "https://instagram.com"; // add your username
global.sudo = process.env.SUDO || "94702481115";
global.devs = "94702481115";
global.website = "https://github.com/vishwamihiranga"; //wa.me/+94000000000000
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  "https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg";
module.exports = {
  sessionName:
    process.env.SESSION_ID ||
    "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid001enhGMUFYVm1EdW9MczhBRkpLbHdDWFNRQkRSaHo0VXYvZnFNUWhtRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFRWd0VIUFFVWXdzalpFRUpxd1FSenArV3BTaURjM29TSm94UTBaeE1SRT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRkpxcFp2L3dPWGFtcHRnYVhqbEVYUGhETDh4WmNjbkpieU5NQ1kveTNFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3VUE4NmRLekxCUEJPUEV1blJBTzlMVTZ4Y1FVMDg0Tnd5NEc2Y29wUm1rPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdFemNUNGw0TmVCYWozd1o3RGZkRHZOUSszQW9VcWU1dlhobTM0L2VJVUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxPb0Y2ZFBMQWNudk9KaUlaVUlSYm8rRWs4M0lGRmFFMnRKd2YyY1pWQVk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyS0JrMnVSSmRENmNxeE5TWnJwSlkxZWd3N3hOYzNpS0dhczROcnAyMERGVE5Fend4KzM2STR6ZUhCT0Q5NXZ3eFJPNE8xcWhseGt2ODJWUjZtRkZnQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEzNSwiYWR2U2VjcmV0S2V5IjoiVm1tbU5hRjhlSzVYVXd1WnVxL3Zlc0VaVFBuSEhDQ3VMVWxDby9taTJMbz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoib2FFdHdTd3hRMnlMU0JVMmdqQjR1USIsInBob25lSWQiOiJkYjI3YjE2YS02MTM5LTRiZmUtYTA3OC1jMjgxNDcxM2M4ZmIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3R6d01oVTIyRjlNYlBFYmV2TUdWUGUrU3lZPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKR3UxQXVtM2dVRFoyODUvV3hLUWxEUnA4YVU9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOZnVyS2NCRVB2TG9xMEdHQXdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzZ0JlV1V6d0lWK0Z2YVpkaStNWWE1SVg3NGswVVVWcXRGdEpkV1VORWowPSIsImFjY291bnRTaWduYXR1cmUiOiJ2V2h6R2RDbHFKMU4yMnc1ZDZtbk1lTnFINkoxOUtlTXg3Rmx4cEg5THdmNitzelQ1bDNEOU1ralFBVWx4WTNLZ3ZKMkpxaVBrUXpDYmVwQlRveEZCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicVhlc2xKaGh5Nk1tQzJydlc2Nmd5ejR2OHBMOXN0QjlwbDNxR1lJQVpLTWltUmVKZTM2cWRyREtKWkUxSHEzV3BwZWZ3cW9GUDRJcTYyWTlRYkExZ1E9PSJ9LCJtZSI6eyJpZCI6Ijk0NzAyNDgxMTE1OjEyQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzAyNDgxMTE1OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJJQVhsbE04Q0ZmaGIybVhZdmpHR3VTRisrSk5GRkZhclJiU1hWbERSSTkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDU1NTEzNTl9", //Put Your Session Id Here
  author: process.env.PACK_AUTHER || "VISHWA BOT",
  packname: process.env.PACK_NAME || "MADE BY VISHWA MIHIRANGA",

  botname:
    process.env.BOT_NAME === undefined ? "VISHWA-MD" : process.env.BOT_NAME,
  ownername:
    process.env.OWNER_NAME === undefined ? "vishwa22" : process.env.OWNER_NAME,
  auto_read_status:
    process.env.AUTO_READ_STATUS === undefined
      ? false
      : process.env.AUTO_READ_STATUS,
  autoreaction:
    process.env.AUTO_REACTION === undefined ? false : process.env.AUTO_REACTION,
  antibadword:
    process.env.ANTI_BAD_WORD === undefined
      ? "nbwoed"
      : process.env.ANTI_BAD_WORD,
  alwaysonline:
    process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake:
    process.env.FAKE_COUNTRY_CODE === undefined
      ? "234"
      : process.env.FAKE_COUNTRY_CODE,
  readmessage:
    process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver:
    process.env.AUTO_STATUS_SAVER === undefined
      ? false
      : process.env.AUTO_STATUS_SAVER,
  HANDLERS: process.env.PREFIX === undefined ? "." : process.env.PREFIX,
  warncount: process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:
    process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:
    process.env.LEVEL_UP_MESSAGE === undefined
      ? false
      : process.env.LEVEL_UP_MESSAGE,
  antilink:
    process.env.ANTILINK_VALUES === undefined
      ? "chat.whatsapp.com"
      : process.env.ANTILINK_VALUES,
  antilinkaction:
    process.env.ANTILINK_ACTION === undefined
      ? "remove"
      : process.env.ANTILINK_ACTION,
  BRANCH: "main",
  ALIVE_MESSAGE:
    process.env.ALIVE_MESSAGE === undefined ? "" : process.env.ALIVE_MESSAGE,
  autobio: process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption: process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠɪꜱʜᴡᴀ22•* ", //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),
  OPENAI_API_KEY:
    process.env.OPENAI_API_KEY === undefined
      ? false
      : process.env.OPENAI_API_KEY,
  heroku: process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU || false,
    API_KEY:
      process.env.HEROKU_API_KEY === undefined
        ? ""
        : process.env.HEROKU_API_KEY,
    APP_NAME:
      process.env.HEROKU_APP_NAME === undefined
        ? ""
        : process.env.HEROKU_APP_NAME,
  },
  VERSION: process.env.VERSION === undefined ? "v.0.0.3" : process.env.VERSION,
  LANG: process.env.THEME || "sithuwa-md",
  WORKTYPE:
    process.env.WORKTYPE === undefined ? "public" : process.env.WORKTYPE,
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
