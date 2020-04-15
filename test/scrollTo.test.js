const internetPage = require('../pages/internet.page')

describe('Scroll to Element', function () {
    it.skip('should scroll to the footer', () => {
        browser.url('/')
        internetPage.pageHeader.waitForDisplayed({ timeout: 1000, reverse: true })
        internetPage.scrollToPageFooter()
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())
    })

    it('should scroll into view', () => {
        browser.url('/')
        internetPage.pageFooter.scrollIntoView()
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())
    })
})