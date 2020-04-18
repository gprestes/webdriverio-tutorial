const internetPage = require('../../pages/internet.page')
const loginData = require('../../data/loginData')

describe('Test Element Action', function () {
    it('should click element', () => {
        browser.url('/')
        internetPage.clickOnLink()
        expect(browser.getUrl()).equals('https://the-internet.herokuapp.com/abtest')
    })

    it('should get Text', () => {
        browser.url('/')
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing')
    })

    it('should click checkbox', () => {
        internetPage.clickLink(6)
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(true)
    })

    it('should uncheck checkbox', () => {
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(false)
    })

    it('should enter username', () => {
        browser.url(`${browser.options.baseUrl}/login`)
        internetPage.enterUsername(loginData.userName)
        assert.equal(loginData.userName, internetPage.username.getValue())
    })

    it('should enter password', () => {
        browser.url(`${browser.options.baseUrl}/login`)
        internetPage.enterPassword(loginData.password)
        assert.equal(loginData.password, internetPage.password.getValue())
    })

    it('should clear Value', () => {
        internetPage.username.click()
        internetPage.username.clearValue()
        assert.equal('', internetPage.username.getValue())
    })
})