const fs = require("fs");

const USERNAME = "Hesam_GamerX";
const LIVE_URL = "https://www.aparat.com/Hesam_GamerX/live";

async function checkAparat() {
  const result = {
    status: "unknown",
    username: USERNAME,
    url: LIVE_URL,
    checkedAt: new Date().toISOString()
  };

  try {
    const { Aparat } = require("aparat.js");
    const aparat = new Aparat();

    const isLive = await aparat.user.isStream(USERNAME);

    result.status = isLive ? "live" : "offline";
  } catch (error) {
    result.error = String(error.message || error);
    console.error(error);
  }

  fs.writeFileSync(
    "aparat-status.json",
    JSON.stringify(result, null, 2)
  );

  console.log("Aparat status:", result.status);
}

checkAparat();
