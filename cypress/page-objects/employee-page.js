/// <reference types="cypress" />

export class EmployeePage {

    navigate() {
        cy.visit('/Employee/Create');   
    }

    setName(name) {
        cy.get('#Name').clear().type(name);
    }

    setSalary(salary) {
        cy.get('#Salary').clear().type(salary);
    }

    setDurationWorked(durationWorked) {
        cy.get('#DurationWorked').clear().type(durationWorked);
    }

    setGrade(grade) {
        cy.get('#Grade').clear().type(grade);
    }

    setEmail(email) {
        cy.get('#Email').clear().type(email);
    }

    clickSave() {
        cy.get('.btn').click();
    }

    SaveEmployee(name, salary, durationWorked, grade, email) {
        this.setName(name);
        this.setSalary(salary);
        this.setDurationWorked(durationWorked);
        this.setGrade(grade);
        this.setEmail(email);
        this.clickSave();
    }

}