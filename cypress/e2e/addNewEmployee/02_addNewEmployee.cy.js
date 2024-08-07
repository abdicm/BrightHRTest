/// <reference types="cypress" />
import { slowCypressDown } from "cypress-slow-down";
import * as addEmployee from "../login/01_login.cy"

describe('Add New Employee', () => {
  const testCaseID = 'T2-Add another employee'
  // slowCypressDown()
  beforeEach(() => {
    
    cy.visit((`${Cypress.config('baseUrl')}`), { failOnStatusCode: false });
    cy.url().should("eq", `https://sandbox-app.brighthr.com/lite`);
  });

  it('Adding another employee', function () {
    addEmployee
  });
});

