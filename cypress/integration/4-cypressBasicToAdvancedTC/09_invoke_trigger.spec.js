describe('Invoke and trigger test', () => {

    it('Mouse over test case', () => {
        cy.log('Mouse over test case')
        cy.visit('https://book.spicejet.com/')
        cy.contains('Login / Signup ').trigger('mouseover')
        cy.contains("SpiceClub Members").trigger('mouseover')
        cy.contains("Member Login").click()
        cy.url().should('include', 'Login')
    })

    it('Mouse over test case 2', () => {
        cy.log('Mouse over test case 2')
        cy.visit('https://book.spicejet.com/')
        cy.get('#highlight-addons').trigger('mouseover')
        cy.contains("Friends and Family").click()
        cy.url().should('include', 'FamilyAndFriendOffer')
        cy.get('.content-heading').should('contain.text', 'Friends')
    })

    it.only('Add to cart test case using invoke command', () => {
        cy.log('Add to cart test case using invoke command')
        cy.visit('http://automationpractice.com/index.php?id_category=8&controller=category')
        cy.get("a[class='product_img_link']").first().trigger('mouseover')
        cy.contains("Add to cart").click()
        cy.contains('added to your').should('contain.text', 'success')
        cy.get('.cross').click()
        // cy.contains('Cart').trigger('mouseover')
        cy.get(".cart_block").should('be.hidden').invoke('show')
        cy.contains('Check out').click()
        cy.get('#cart_title').should('contain.text', 'cart')
    })

    it("mouse over trigger", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // One way
        // cy.get('.mouse-hover-content').invoke('show')
        // cy.contains('Top').click()
        // cy.url().should('include', 'top')

        //Anotherway
        cy.contains('Top').click({ force: true })
        cy.log(' Mouse Over Automated ')
    })
})