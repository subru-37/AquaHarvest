const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto("https://www.freshtohome.com/fish");
  await page.type("#autoComplete", "Cochin");
  // await page.click('button:contains("Continue")');
  await page.keyboard.press("Enter");
  await page.waitForNavigation({
    // timeout: 40000,
    waitUntil: "domcontentloaded",
  });

  for (let i = 0; i < 4; i++) {
    await page.keyboard.down("PageDown");
    await page.keyboard.up("PageDown");
  }

  console.log("waiting for 5 seconds before processing..");
  await page.waitForTimeout(5000);
  console.log("Waiting done");

  const divs = await page.evaluate(() => {
    const wrapperDivA = Array.from(document.querySelectorAll(".product-block"));
    const items = [];
    console.log(wrapperDivA);
    for (const div of wrapperDivA) {
      console.log(div.querySelector("img").src);
      console.log(div.querySelector("h3").innerText);
      const obj = {
        imgUrl: div.querySelector("img").src,
        name: div.querySelector("h3").innerText,
      };
      items.push(obj);
    }
    return items.filter((item) => item.imgUrl.includes("product"));
  });
  console.log(divs);
  await browser.close();
};
main();
