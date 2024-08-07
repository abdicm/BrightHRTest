/// <reference types="cypress" />
import { slowCypressDown } from "cypress-slow-down";
import * as login from "../login/helper.login/helper.login"
import * as list from "../employeeList/helper.employeeList/helper.employeeList"

describe('Add New Employee', () => {
  const testCaseID = 'T2-Add another employee'
  // slowCypressDown()
  beforeEach(() => {
    
    cy.visit((`${Cypress.config('baseUrl')}`), { failOnStatusCode: false });
    cy.url().should("eq", `https://sandbox-app.brighthr.com/lite`);
  });

  it('Adding another employee', function () {
    login.loginBrightHr();
    list.employeeList();

  });
});

