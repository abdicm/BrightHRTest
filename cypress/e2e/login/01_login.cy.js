/// <reference types="cypress" />
import { slowCypressDown } from "cypress-slow-down";
import * as login from "./helper.login/helper.login"

describe('Login flow', () => {
  const testCaseID = 'T1-Login'
  // slowCypressDown()
  beforeEach(() => {
    
    cy.visit((`${Cypress.config('baseUrl')}`), { failOnStatusCode: false });
    cy.url().should("eq", `https://sandbox-app.brighthr.com/lite`);
  });

  it('should login to BrightHR website', function () {
    login.loginBrightHr();
    login.addEmployee();
  });
});

