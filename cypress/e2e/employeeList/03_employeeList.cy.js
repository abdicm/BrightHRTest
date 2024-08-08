/// <reference types="cypress" />
import { slowCypressDown } from "cypress-slow-down";
import * as login from "../login/helper.login/helper.login"
import * as list from "../employeeList/helper.employeeList/helper.employeeList"

describe('Verify employee list', () => {
  const testCaseID = 'T3- Verify employee list '
  // slowCypressDown()
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit((`${Cypress.config('baseUrl')}`), { failOnStatusCode: false });
    cy.url().should("eq", `https://sandbox-app.brighthr.com/lite`);
  });

  it('should verify the employee list', function () {
    login.loginBrightHr();
    list.employeeList();

  });
});

