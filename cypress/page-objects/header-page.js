/// <reference types="cypress" />

export class HeaderPage {

    verifyLogin(username) {
        cy.get('a[title="Manage"]').should('contain.text', 'Hello '+username);
    }

}