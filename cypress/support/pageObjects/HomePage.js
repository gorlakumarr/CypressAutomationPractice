class HomePage {

    getNameEditBox() {
        return cy.get("form input[name='name']")
    }

    getTwoWayDataBindingBox() {
        return cy.get("h4 input[name='name']")
    }

    getGenderSelectBox() {
        return cy.get('select')
    }

    getEntrepreneurRadioButton() {
        return cy.get("#inlineRadio3")
    }
    getShopButton() {
        return cy.get("a:contains('Shop')")
    }
}

export default HomePage;