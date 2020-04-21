/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page"
import { EmployeePage } from "../page-objects/employee-page";
import { EmployeeListPage } from "../page-objects/employee-list-page";

context('Manage Employees', () => {
    const loginPage = new LoginPage();
    const empPage = new EmployeePage();
    const empListPage = new EmployeeListPage();

    beforeEach(() => {
        loginPage.navigate();
        loginPage.login();
    })
    
    it('Create and Delete Employee', () => {
        let name = 'Jonathan', salary = '50000', durWorked = '20', grade = '10', email = 'test@test.com';
        empPage.navigate();
        empPage.SaveEmployee(name, salary, durWorked, grade, email);
        empListPage.searchEmployee(name);
        empListPage.deleteEmployee();
        empListPage.searchEmployee(name);
        empListPage.verifyEmployeeDeleted(name);
    })


})