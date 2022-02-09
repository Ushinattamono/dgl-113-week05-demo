import path from "path";

describe("index.html", () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, "./index.html")}`;
    await page.setViewport({'width': 1920, 'height': 1080 });
    await page.goto(URL);
  });

  it("click test1 cell", async () => {
    await page.click('#test1');

    await page.waitForSelector('#test1');
    let element = await page.$('#test1');
    let value = await page.evaluate(el => el.classList.contains('table-warning'), element);
    expect(value).toBe( true );

    await page.waitForSelector('#selectedcellvalue');
    element = await page.$('#selectedcellvalue');
    value = await page.evaluate(el => el.innerText, element);
    expect(value).toBe( '24,006' );
  });

  it("click test2 cell", async () => {
    await page.click('#test2');

    await page.waitForSelector('#test2');
    let element = await page.$('#test2');
    let value = await page.evaluate(el => el.classList.contains('table-warning'), element);
    expect(value).toBe( true );

    await page.waitForSelector('#selectedcellvalue');
    element = await page.$('#selectedcellvalue');
    value = await page.evaluate(el => el.innerText, element);
    expect(value).toBe( '89' );
  });
});
