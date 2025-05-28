import puppeteer from 'puppeteer'

const number = [

];

const message = [
  'Boa%20noite%2C%20como%20voc%C3%AA%20est%C3%A1%3F%20Espero%20que%20esteja%20bem%21%0A%0AEstamos%20entrando%20em%20contato%20para%20reiterar%20o%20convite%20para%20a%20nossa%20palestra%20%22A%20import%C3%A2ncia%20dos%20recursos%20gen%C3%A9ticos%2C%20dos%20centros%20de%20origem%20e%20dos%20bancos%20de%20germoplasma%C2%A0vegetal%22%20e%20expressar%20nossa%20expectativa%20em%20t%C3%AA-lo%20conosco.%20Nossos%20ministrantes%2C%20al%C3%A9m%20de%20toda%20a%20equipe%20da%20UTMulti%2C%20estar%C3%A3o%20ansiosos%20para%20receb%C3%AA-lo%20%C3%A0s%2019h30%20horas%21%20Aguardamos%20sua%20presen%C3%A7a%20com%20grande%20entusiasmo.%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%0ALink%20do%20evento%3A%20meet.google.com%2Fpyx-imck-rrt%20%0A%20%0AAbra%C3%A7os%2C%C2%A0%0AEquipe%C2%A0UTMULTI'
];

function delay(time) {
   return new Promise(function(resolve) { 
       setTimeout(resolve, time)
   });
}

(async () => {
  
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  
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