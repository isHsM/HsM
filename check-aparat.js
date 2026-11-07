const { Aparat } = require("aparat.js");
const fs = require("fs");

const USERNAME = "Hesam_GamerX";

async function checkAparat() {
  let result;

  try {
    const aparat = new Aparat();

    // بررسی مستقیم وضعیت پخش زنده
    const isLive = await aparat.user.isStream(USERNAME);

    result = {
      status: isLive ? "live" : "offline",
      username: USERNAME,
      url: https://www.aparat.com/${USERNAME}/live,
      checkedAt: new Date().toISOString()
    };

  } catch (error) {
    result = {
      status: "unknown",
      username: USERNAME,
      url: https://www.aparat.com/${USERNAME}/live,
      checkedAt: new Date().toISOString(),
      error: String(error.message || error)
    };
  }

  fs.writeFileSync(
    "aparat-status.json",
    JSON.stringify(result, null, 2) + "\n"
  );

  console.log("Aparat status:", result.status);
}

checkAparat();
