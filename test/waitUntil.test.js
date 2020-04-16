const internetPage = require('../pages/internet.page')

describe('WaitUntil', function () {
    it('should wait until the button text changes to Add', () => {
        browser.url(`${browser.options.baseUrl}/dynamic_controls`)
        internetPage.clickPageButton()
        browser.waitUntil(
            () => { return internetPage.pageButton.getText() === 'Add' },
            {
                timeout: 6000,
                timeoutMsg: 'Expect button text to change'
            }
        )
        assert.equal('Add', internetPage.pageButton.getText())
    })

    it('should wait until the button text changes to Remove', () => {
        internetPage.clickPageButton()
        browser.waitUntil(
            () => { return internetPage.pageButton.getText() === 'Remove' },
            {
                timeout: 6000,
                timeoutMsg: 'Expect button text to change'
            }
        )
        assert.equal('Remove', internetPage.pageButton.getText())
    })
})