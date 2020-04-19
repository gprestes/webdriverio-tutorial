const internetPage = require('../pages/internet.page')

describe('Wait For Enabled', function () {
    it('should wait for the input field to be enabled', () => {
        browser.url(`${browser.options.baseUrl}/dynamic_controls`)
        internetPage.clickEnableButton()
        internetPage.inputEnabledField.waitForEnabled({ timeout: 4000 })
        assert.equal(true, internetPage.inputEnabledField.isEnabled())
        // browser.debug()
    })

    it('should wait for the input field to be disable', () => {
        internetPage.clickEnableButton()
        internetPage.inputEnabledField.waitForEnabled({ timeout: 4000, reverse: true })
        assert.equal(false, internetPage.inputEnabledField.isEnabled())
    })
})