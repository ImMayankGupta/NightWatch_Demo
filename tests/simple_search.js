//module.exports = {
//  'Demo search StackOverflow' : function (browser) {
//    browser
//      .url('https://www.google.com')
//      .waitForElementVisible('input[name="q"]', 10000)
//      .setValue('input[name="q"]', 'elm architecture')
//      .waitForElementVisible('input[name="btnk"]', 10000)
//      .click('input[name="btnk"]')
//      .pause(2000)
//      .assert.containsText('#mainbar', 'Q: Elm Architecture and tasks')
//      .end();
//  }
//};
module.exports = {
   // tags: ['my-app'],
    'My App Test' : function (browser) {
         browser 
         .url('https://www.ebay.com')
         .pause(20000)
         .waitForElementVisible('body', 50000) 
         .end();
       }
 };