describe('Drop down Test', () => {

    it('drop down test case', () => {
        cy.log('drop down test case')
        cy.visit('https://www.orangehrm.com/contact-sales/')
        cy.get('#Form_submitForm_Country')
            .select('India')
            .should('have.value', 'India')
        cy.get('#Form_submitForm_State')
            .select('Telangana')
            .should('have.value', 'Telangana')
    })

    it.only('Auto suggestion for Google', () => {
        cy.log('Auto suggestion for Google test case')
        cy.visit('https://www.google.co.in/')
        cy.get("input[name='q']")
            .type('Amazon')
            .wait(2000)
        cy.get("ul[role='listbox']")
            .find("li")
            .should('contain.text', 'Amazon')
            .and('have.length', 10)
            .eq(0)
            .click()
        cy.get('input.gLFyf').should('have.value', 'amazon').and('not.be.null')
    })
})