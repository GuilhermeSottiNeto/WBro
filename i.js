import puppeteer from "puppeteer"




(async () => {
  
  

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

//while (TOMBO.length > 0) {
  await page.goto(`https://sistemas2.utfpr.edu.br/dpls/sistema/corp06/mpIncorporarBem.pcpesquisa?p_bempattombonr=334955&p_matdescrvc=&p_partestr=I&p_matcomplvc=&p_bempatmarcamodvc=&p_gestaocodnr=1&p_altdeprnr=0&p_incorpconsulta=1`);
  // await page.type('::-p-xpath(//html/body/app-root/app-login/div/div/p-card/div/div/div/div/form/div[2]/div/input)', USER);
  // await page.type('::-p-xpath(//html/body/app-root/app-login/div/div/p-card/div/div/div/div/form/div[3]/div/input)', PASSWORD);
  // await page.$eval('::-p-xpath(//html/body/app-root/app-login/div/div/p-card/div/div/div/div/form/div[4]/div/button)', el => el.click());

  //body > center > table.tabela > tbody > tr:nth-child(2) > td:nth-child(1)
  //body > center > table.tabela > tbody > tr:nth-child(2) > td:nth-child(2)

   

    // await page.waitForSelector('table.tabela');
    
    // let table = await page.evaluate(() => {
    //   return document.querySelector(`body > center > table.tabela > tbody > tr:nth-child(2)`).textContent;
    // });

    // console.log(table);


    
    
    

  //await page.$eval('::-p-xpath(//html/body/center/table[1]/tbody/tr[2]/td[1])', el => el.click());
  
  browser.close();
//}

  
})();