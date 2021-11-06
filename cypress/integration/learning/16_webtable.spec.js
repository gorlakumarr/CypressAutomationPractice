///<reference types="Cypress"/>

describe("Webtable handle Test Suite", function () {
    it("web table test Case", function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("table#product[name='courses'] tbody tr td:nth-child(2)").each(($el, index, $list) => {
            const text = $el.text()
            if (text.includes('Python')) {
                cy.get("table#product[name='courses'] tbody tr td:nth-child(2)").eq(index).next().then(function (price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
        cy.log(' Webtable Value Getting Automated ')
    })
})