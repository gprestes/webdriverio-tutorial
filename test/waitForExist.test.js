const internetPage = require('../pages/internet.page')

describe('Wait for Exist', function () {
    it('should wait until the delete button exists', () => {
        browser.url(`${browser.options.baseUrl}/add_remove_elements/`)
        internetPage.clickExampleButton()
        internetPage.deleteButton(1).waitForExist()
        assert.equal(true, internetPage.deleteButton(1).isExisting())
    })

    it('should wait for the delete button to not exist', () => {
        internetPage.clickDeleteButton(1)
        internetPage.deleteButton(1).waitForExist({ timeout: 500, reverse: true })
        assert.equal(false, internetPage.deleteButton(1).isExisting())
    })
})