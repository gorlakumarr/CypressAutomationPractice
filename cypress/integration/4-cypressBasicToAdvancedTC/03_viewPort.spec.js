///<reference types="Cypress"/>

describe("testing different view ports", () => {
    before(() => {
        console.log('running my test in before block')
    })

    beforeEach(function () {
        cy.visit('https://www.google.com')
    })

    it('open in mac book 13', () => {
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(200)
    })


    it('open in mac book 15', () => {
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    })


    it('open in iphone-x', () => {
        cy.viewport('iphone-x')
        cy.screenshot()
        cy.wait(200)
    })


    it('open in customized', () => {
        cy.viewport(500, 750)
        cy.screenshot()
        cy.wait(200)
    })
})