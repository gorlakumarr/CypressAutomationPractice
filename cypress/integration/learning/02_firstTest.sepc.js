
describe("Launch my app", function () {
    const newLocal = { "viewportHeight": 1500, "viewportWidth": 1500 }
    it('app test', newLocal, function () {
        cy.visit('https://www.freshworks.com/')
        cy.contains('Customers').click()
        cy.url().should('include', '/customers')
    })
})