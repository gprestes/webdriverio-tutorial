const internetPage = require("../pages/internet.page")

describe("Interacting with elements", function () {
    it("Get text for element", () => {
        browser.url('/')
        
        let text = $("h2").getText()
        console.log(text)

        text = $(".heading").getText()
        console.log(text)

        text = $("#page-footer").getText()
        console.log(text)
        
        text = $("//*[@id='page-footer']").getText()
        console.log(text)

        internetPage.getLiText()
        internetPage.getSpecificElementText(3)
    })
})