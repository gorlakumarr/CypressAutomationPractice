///<reference types="Cypress"/>

describe("Window handle test suite", function () {
    it("Handling window Test Case", function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').then(function (tab) {
            const url = tab.prop('href')
            cy.log(url)
            cy.visit(url)
        })
        cy.log(' Child Window Automated ')
    })
})