///<reference types="Cypress"/>

describe("Each Find Then Test Suite", function () {
    it("Then Find Each Commands Test Case", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //selenium get hit url in browser, cypress get acts like findElemen
        cy.get('.products').as('productLocator') //Aliases
        // cy.get('.product:visible').should('have.length',4)
        // cy.get('div.products div.product').should('have.length', 4)
        // Parent child chaining
        cy.get('@productLocator').find('.product').should('have.length', 4)

        cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click().then(function () {
            console.log("Clicked") //Manualy Resolving Promise
        })
        // cy.get(':nth-child(1) > .product-action > button').click()

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })

        //Assert if logo is correctly displayed as "GREENKART"
        cy.get('.brand').should('have.text', 'GREENKART')

        //This is to print in logs
        const logo = cy.get('.brand').then(function (logoelement) {
            cy.log(logoelement.text())
        })
        //  const logo=cy.get('.brand')
        //  cy.log(cy.get('.brand').text())
        //  cy.log(logo.text())
        cy.log("My First Test Case executed")
        // console.log("My First Test Case executed")
    })
    // console.log("My First Test Suite executed")
})