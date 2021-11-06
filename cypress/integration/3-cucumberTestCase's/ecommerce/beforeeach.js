import { beforeEach } from "mocha";

beforeEach(() => {
    cy.fixture('example').then(function (data) {
        this.data = data
    })
})