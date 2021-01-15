const internetPage = require('../pages/internet.page')

describe('switch to Iframe', function () {
    xit('should switch to iframe', () => {
        browser.url(`${browser.options.baseUrl}/iframe`)
        internetPage.h3Header.waitForDisplayed()
        internetPage.iframe.waitForDisplayed()
        browser.switchToFrame(internetPage.iframe)
        internetPage.sendTextToBody('This is the text in the iframe body')
        assert.equal('This is the text in the iframe body', internetPage.iframeBody.getText())
    })
})