import puppeteer from 'puppeteer'

const number = [
  
];

const message = [
  'Este%20%C3%A9%20um%20teste%20de%20um%20programa%20de%20broadcast%20de%20minha%20autoria'
];

function delay(time) {
   return new Promise(function(resolve) { 
       setTimeout(resolve, time)
   });
}

function numberInput(){
  
}

(async () => {
  
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  let i = 0;
  let input, comparation = [' '];

  while(comparation != 'END'){
    input[i] = await page.evaluate(() => prompt('Type one of the numbers you want to add to the broadcast list.\n\nEx: 11988117766\n\nWhen you are done with the the list type: "END"'));
    comparation = input[i];
    input[i] = input[i].replace(/\D+/g, '');
    console.log('Got: ', input[i]);

    i++;
  }
  await browser.close();










  // Launch the browser and open a new blank page
  // const browser = await puppeteer.launch({headless: false});
  // const page = await browser.newPage();
  
  //loops through all the numbers
  while (number.length > 0) {
    
    // Navigate the page to a URL
    await page.goto(`https://web.whatsapp.com/send/?phone=${number.pop()}&text=${message}&type=phone_number&app_absent=0`);

    // Wait and click on the send button
    await delay(2000)
    await page.waitForSelector('::-p-xpath(//html/body/div[1]/div/div/div[3]/div/div[4]/div/footer/div[1]/div/span/div/div[2]/div[2]/button)');
    await delay(2000)
    await page.click('::-p-xpath(//html/body/div[1]/div/div/div[3]/div/div[4]/div/footer/div[1]/div/span/div/div[2]/div[2]/button)');
    await delay(2000)
  
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

  await browser.close();
})();
