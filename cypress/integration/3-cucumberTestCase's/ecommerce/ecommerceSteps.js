///<reference types="Cypress"/>
///<reference types="cypress-iframe"/>

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

import 'cypress-iframe'
import HomePage from '../../../support/pageObjects/HomePage'
import ProductsPage from '../../../support/pageObjects/ProductsPage'
import CartPage from '../../../support/pageObjects/CartPage'
import ConfirmationPage from '../../../support/pageObjects/ConfirmationPage'


const homePage = new HomePage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();
const confirmationPage = new ConfirmationPage()
var sum = 0
let name

// ()=>
Given("i open ecommerce page", function () {
    cy.visit(Cypress.env('url'))
})

When("i add items to cart", function () {
    homePage.getShopButton().click()

    productsPage.clickAddToCartForMobiles(this.data.productName)
    productsPage.checkoutButton().click()
})

And("validate the total price of the items added to cart", function () {
    cartPage.getCostValues().each((el, index, $list) => {
        sum = Number(sum) + Number(el.text().split(' ')[1].trim())
        cy.log(el.text().split(' ')[1].trim())
    }).then(function () {
        cy.log("Sum = " + sum)
    })
    cartPage.getTotalValue().then(function (ele) {
        expect(sum).to.equal(Number(ele.text().split(' ')[1].trim()))
    })
})

When("i checkout products", function () {
    cartPage.getCheckoutButton().click()
})

Then("select the country submit and verify Success message", function () {
    cartPage.getCountryTextBox().type('India')
    cartPage.getSuggestedCountryValue().click()
    cartPage.getAgreeCheckBox().click({ force: true })
    cartPage.getPurchaseButton().click()

    confirmationPage.getMessageValue().then(function (d) {
        expect(d.text()).to.contains('Success')
    })
})

When("i fill the form details", function (dataTable) {
    name = dataTable.rawTable[1][0]
    homePage.getNameEditBox().type(dataTable.rawTable[1][0])
    homePage.getGenderSelectBox().select(dataTable.rawTable[1][1])

    // homePage.getNameEditBox().type(this.data.name)
    // homePage.getGenderSelectBox().select(this.data.gender)

})
Then("validate the forms behaviour", function (dataTable) {
    homePage.getTwoWayDataBindingBox().should('have.value', name)
    homePage.getNameEditBox().should('have.attr', 'minlength', dataTable.rawTable[1][0])
    homePage.getEntrepreneurRadioButton().should('be.disabled')
    Cypress.config("defaultCommandTimeout", 10000)
})
And("select the shop page", function () {
    homePage.getShopButton().click()
})