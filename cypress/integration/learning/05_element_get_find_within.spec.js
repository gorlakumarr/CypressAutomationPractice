describe('check element get concept', () => {
    // it.skip('element get text', () => {
    /*
    *skip the test case for execution
    */
    it('element get text', () => {
        cy.visit('https://www.freshworks.com/')
        cy.contains('Customers').click()
        cy.url().should('include', 'customers')
        cy.get('body > section.l-section.align-center.pattern-light.banner-default > div > h2')
            .should('be.visible')
            .and('contain.text', 'Freshworks')
            .and('have.length.at.least', 1)
        cy.get('ul.footer-nav li')
            .should('have.length', 25)

        cy.get('ul.footer-nav li')
            .find("a[href*='footer']")
            .should('have.length', 5)
    })
    // it.only('Amazon search using with in', () => {
    /*
    *"Only" this test case runs for execution even though you didnt mention Skip
    */  it.only('Amazon search using with in', () => {
        cy.visit('https://www.amazon.in/')
        cy.get('.nav-search-field ').within(() => {
            cy.get('#twotabsearchtextbox').type('Amazon')
        })
    })

    it("each find wrap commands test case", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productLocator') //Aliases
        cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click()
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.tada').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        cy.log("My Second Test Case executed")
    })
})