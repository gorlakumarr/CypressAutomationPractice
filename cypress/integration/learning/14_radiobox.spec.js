///<reference types="Cypress"/>

describe("Radio box Testing ", function () {
    it("Radio box test case", function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //Comparision : Have ; Behaviourial : be
        cy.get('input#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('input#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
        // cy.get('input[type="checkbox"]').check()

        //Static Dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        //Dynamic Dropdown
        cy.get('input#autocomplete').type('ind')
        cy.get('li.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() == 'India') {
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')
        cy.log(" Dropdown Automated ")

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox   ').click()
        cy.get('#displayed-text').should('be.visible')
        cy.log(' Hide/Show Automated ')

        cy.get('[value="radio2"]').check().should('be.checked').and('have.value', 'radio2')
        cy.log(' Radio Button Automated')
    })
})