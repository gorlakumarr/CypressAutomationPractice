///<reference types="Cypress"/>

describe("Alerts test Suite", function () {
    it("Alerts automate test case", function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window:alert
        cy.on('window:alert', (str) => {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        cy.log(' Alert Automated ')

        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.log(' Window Automated ')

        // cy.url().should('have.value', 'https://www.rahulshettyacademy.com/#/index')
        cy.url().should('includes', 'rahulshettyacademy')
        cy.go('back')
        cy.url().should('includes', 'Automation')
        cy.log(' Back/Foward/URL Check Automated')
        // cy.go('forward')
    })
})