//// <reference types="cypress" />
import { slowCypressDown } from "cypress-slow-down";
import * as login from "../login/helper.login/helper.login"

describe('Add Employee', () => {
  const testCaseID = 'T2 - Add Another Employee'
  // slowCypressDown()
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    
    cy.visit((`${Cypress.config('baseUrl')}`), { failOnStatusCode: false });
    cy.url().should("eq", `https://sandbox-app.brighthr.com/lite`);
    
  });
  it('Should add another employee', function () {
    login.loginBrightHr();
    login.addEmployee();
  });
});



