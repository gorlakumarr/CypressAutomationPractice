describe('check back n forward test', () => {

    it('back and forward test case', () => {
        cy.log('back and forward test case')
        cy.visit('https://www.freshworks.com/')
        cy.contains('Customers').click()
        cy.url().should('include', 'customers')
        cy.go('back')
        cy.url().should('include', 'freshworks')
        cy.go('forward')
        cy.url().should('include', 'customers')
    })
    it.only('back and forward test case using index', () => {
        cy.log('back and forward test case using index')
        cy.visit('https://www.freshworks.com/')
        cy.contains('Customers').click()
        cy.url().should('include', 'customers')
        cy.go(-1)
        cy.url().should('include', 'freshworks')
        cy.go(1)
        cy.url().should('include', 'customers')
    })
})