///<reference types="Cypress"/>
///<reference types="cypress-iframe"/>

import 'cypress-iframe'
import HomePage from '../../support/pageObjects/HomePage'
import ProductsPage from '../../support/pageObjects/ProductsPage'
import CartPage from '../../support/pageObjects/CartPage'
import ConfirmationPage from '../../support/pageObjects/ConfirmationPage'


describe("My Framework Suite", function () {
    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })
    it("My Framework Test Case", function () {

        var sum = 0

        cy.visit(Cypress.env('url'))
        // cy.visit('https://rahulshettyacademy.com/angularpractice/')

        const homePage = new HomePage();
        homePage.getNameEditBox().type(this.data.name)
        homePage.getGenderSelectBox().select(this.data.gender)
        homePage.getTwoWayDataBindingBox().should('have.value', this.data.name)
        homePage.getNameEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneurRadioButton().should('be.disabled')
        homePage.getShopButton().click()

        const productsPage = new ProductsPage();
        productsPage.clickAddToCartForMobiles(this.data.productName)
        productsPage.checkoutButton().click()

        const cartPage = new CartPage();
        cartPage.getCostValues().each((el, index, $list) => {
            sum = Number(sum) + Number(el.text().split(' ')[1].trim())
            cy.log(el.text().split(' ')[1].trim())
            // cy.log("Sum " + sum)
        }).then(function () {
            cy.log("Sum = " + sum)
        })
        cartPage.getTotalValue().then(function (ele) {
            expect(sum).to.equal(Number(ele.text().split(' ')[1].trim()))
        })
        cartPage.getCheckoutButton().click()
        cartPage.getCountryTextBox().type('India')
        cartPage.getSuggestedCountryValue().click()
        cartPage.getAgreeCheckBox().click({ force: true })
        cartPage.getPurchaseButton().click()

        const confirmationPage = new ConfirmationPage()
        confirmationPage.getMessageValue().then(function (d) {
            expect(d.text()).to.contains('Success')
        })
    })
})