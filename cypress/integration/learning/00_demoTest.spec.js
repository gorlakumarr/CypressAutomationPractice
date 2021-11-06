///<reference types="Cypress"/>

describe('Our First Suite', () => {

    before('code for every test', () => {
        cy.log('Code for before')
    })

    describe('Our Suite section', () => {

        beforeEach('code for every sub test', () => {
            cy.log('Code for before each sub test')
        })

        it('Sub test case', () => {
            cy.log('Sub test case')
        })
        it('Sub test case 2', () => {
            cy.log('Sub test case 2')
        })
    })
    it('first test', () => {

    })
    it('second test', () => {

    })
    it('third test', () => {

    })
})

context('Our Second Suite', () => {
    it('first test', () => {

    })
    it('second test', () => {

    })
    it('third test', () => {

    })
})
