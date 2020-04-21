/// <reference types="cypress" />

export class LoginPage {

    navigate() {
        cy.visit('/Account/Login');   
    }

    login() {
        const usernameField = cy.get('#UserName');
        const passwordField = cy.get('#Password');
        const loginBtn = cy.get('.btn');

        usernameField.type(Cypress.config('username'));
        passwordField.type(Cypress.config('password'));
        loginBtn.click();
    }

}