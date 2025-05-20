import puppeteer from 'puppeteer';

const number = [
  
];

const message = [
  'teste%201%202%203'
];

(async () => {
  
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  while (number.length > 0) {
    // Navigate the page to a URL
    await page.goto(`https://web.whatsapp.com/send/?phone=${number.pop()}&text=${message}&type=phone_number&app_absent=0`);

    // Wait and click on first result
    await page.waitForSelector('::-p-xpath(//html/body/div[1]/div/div/div[3]/div/div[4]/div/footer/div[1]/div/span/div/div[2]/div[2]/button)');
    await page.click('::-p-xpath(//html/body/div[1]/div/div/div[3]/div/div[4]/div/footer/div[1]/div/span/div/div[2]/div[2]/button)');
    await page.waitFor(2000);
    // Wait for the message to be sent
  }
  // const searchResultSelector = '.x1c4vz4f.x2lah0s.xdl72j9.xfect85.x1iy03kw.x1lfpgzf';
  // await page.waitForSelector(searchResultSelector);
  // await page.click(searchResultSelector);

  // Locate the full title with a unique string
  // const textSelector = await page.waitForSelector(
  //   'text/Customize and automate',
  // );
  // const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // // Print the full title
  // console.log('The title of this blog post is "%s".', fullTitle);

  //await browser.close();
})();