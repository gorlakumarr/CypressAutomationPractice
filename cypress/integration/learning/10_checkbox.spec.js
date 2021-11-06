describe('Check box test', () => {

    it('Check box test case', () => {
        cy.log('Check box test case')
        cy.visit('http://automationpractice.com/index.php')
        cy.contains('Women').click()

        cy.get("input[class='checkbox']")
            .check()
            .should('be.checked')
            .parent()
            // .invoke('attr', 'class')
            // .should('equal', 'checked')
            .should('not.have.class', 'class')

        cy.get("input[class='checkbox']")
            .uncheck()
            .should('not.be.checked')
            .parent()
            // .invoke('attr', 'class')
            // .should('equal', 'checked')
            .should('not.have.class', 'class')

        // cy.get("input[class='checkbox']").each(($el, index, $list) => {
        //     //Check
        //     cy.wrap($el)
        //         .check()
        //         .should('be.checked')
        //         .parent()
        //         // .invoke('attr', 'class')
        //         // .should('equal', 'checked')
        //         .should('not.have.class', 'class')

        //     // Uncheck
        //     cy.wrap($el)
        //         .uncheck()
        //         .should('not.be.checked')
        // })
    })
    it.only('Snapdeal filter test case', () => {
        cy.log('Snapdeal filter test case')
        cy.visit('https://www.snapdeal.com/')
        cy.get('#inputValEnter').type('Laptop{enter}')
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
            .should('not.have.attr', 'checked')
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
            .check({ force: true }).should('have.attr', 'checked')
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
            .should('have.checked', 'checked')
    })
})