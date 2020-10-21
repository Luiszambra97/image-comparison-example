describe('Visual regression using image comparison service', () => {
    const webdriverioUrl1 = 'https://webdriver.io';
    const webdriverioUrl2 = 'https://webdriver.io/blog';
    const applitoolsUrl1 = 'https://applitools.com/helloworld';
    const applitoolsUrl2 = 'https://applitools.com/helloworld?diff1';
  
    /**
     * The resulting screenshots of the tests are saved in the following folders:
     * @baseline are the expected images, these are automatically generated and saved if there are not existing ones.
     * @actual are the obtained from the tests and compared with those on the baseline.
     * @diff are the images that display the differences (if existing) between baseline and actual, the conflicting pixels are 
     * colored purple.
     */
  
    it('Positive comparison with Applitools page', () => {
      browser.url(applitoolsUrl1);
      expect(browser.checkScreen('applitools-hello', {}), 
      'Error: the Hello World site does not match with the original.').equal(0);
    });
  
    it('Negative comparison using another Applitools page', () => {
      browser.url(applitoolsUrl2);
      expect(browser.checkScreen('applitools-hello', {}), 
      'Error: the current Hello World site should not match with the original.').to.not.equal(0);
    });
  
    it('Positive comparison with navigation bar on WebdriverIO home page', () => {
      browser.url(webdriverioUrl1);
      $('.fixedHeaderContainer').waitForDisplayed();
      expect(
        browser.checkElement($('.fixedHeaderContainer'), 'wdio-headerContainer', {}),
        'Error: the navigation bar does not match with the original.'
      ).equal(0);
    });
  
    it('Negative comparison with navigation bar on WebdriverIO Blog page', () => {
      browser.url(webdriverioUrl2);
      $('.fixedHeaderContainer').waitForDisplayed();
      expect(browser.checkElement($('.fixedHeaderContainer'), 'wdio-headerContainer', {}), 
      'Error: the navigation bar on blog page should not match with the original').to.not.equal(0);
    });
  });
  