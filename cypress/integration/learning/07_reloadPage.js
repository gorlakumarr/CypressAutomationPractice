describe('Page reload test', () => {

    it('page refresh test case', () => {
        cy.log('page refresh test case')
        cy.visit('https://www.freshworks.com/')
        cy.contains('Customers').click()
        cy.url().should('include', 'customers')
        cy.reload()
        cy.contains('Customers').click()
        cy.url().should('include', 'customers')
        cy.reload(true)
            .contains('Customers')
            .click()
        cy.url().should('include', 'customers')
    })
})