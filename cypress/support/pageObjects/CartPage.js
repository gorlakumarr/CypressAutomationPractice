class CartPage {

    getCheckoutButton() {
        return cy.get("button:contains('Checkout')")
    }
    getCountryTextBox() {
        return cy.get('#country')
    }

    getSuggestedCountryValue() {
        return cy.get("div[class*='suggest'] ul li a")
    }

    getAgreeCheckBox() {
        return cy.get('#checkbox2')
    }
    getPurchaseButton() {
        return cy.get("input[value='Purchase']")
    }

    getCostValues() {
        return cy.get("td:nth-child(4) strong")
    }

    getTotalValue() {
        return cy.get('.text-right > h3')
    }
}

export default CartPage;