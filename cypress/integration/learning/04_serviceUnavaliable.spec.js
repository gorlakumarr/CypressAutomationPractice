///<reference types="Cypress"/>

describe("hub spot page feature", () => {
    it('hub spot login test', { defaultCommandTimeout: 10000 }, () => {
        cy.visit('https://app.hubspot.com/login', { failOnStatusCode: false })
        cy.get('#username').type('naveen@gmail.com')
        cy.get('#password').type('naveen@g123')
        cy.get('#loginBtn').click()
    })
})