import loginSupport from "../../../support/login/support.login"

function loginBrightHr() {
    loginSupport.brightHrLoginHeading().should("exist").should("be.visible")
    loginSupport.homePageloginButton().should("exist").should("be.visible").click();
    loginSupport.loginPageHeading().should("exist").should("be.visible");

    loginSupport.emailField().should("exist").should("be.visible").type("acctest02@grr.la");
    loginSupport.passwordField().should("exist").should("be.visible").type("A123456789");
    loginSupport.loginButton().should("exist").should("be.visible").click();
    loginSupport.peopleOverview().should("exist").should("be.visible");

    loginSupport.employeesTab().should("exist").should("be.visible").click();
    loginSupport.employeesHeading().should("exist").should("be.visible");
    loginSupport.addEmployeeButton().should("exist").should("be.visible").click();

    loginSupport.newFirstNameField().scrollIntoView().should("exist").should("be.visible").type("Abdi");
    loginSupport.newLastNameField().scrollIntoView().should("exist").should("be.visible").type("Aden");
    loginSupport.newEmployeeSubmitButton().scrollIntoView().should("exist").should("be.visible").click({ force: true });

    loginSupport.selectTitle().should("exist").should("be.visible").select('Mr');
    loginSupport.middleName().should("exist").should("be.visible").type("Yassin");
    loginSupport.gender().should("exist").should("be.visible").select('Male');
    loginSupport.dateOfBirth().should("exist").should("be.visible").type("22111990").type('{enter}')
    loginSupport.emailAddress().should("exist").should("be.visible").type("abdi.yassin@hotmail.com");
    loginSupport.mobileNumber().scrollIntoView().should("exist").should("be.visible").click().type("07446165925");
    loginSupport.jobTitle().should("exist").should("be.visible").type("Tester");
    loginSupport.workStartDate().should("exist").should("be.visible").type("14082024").type('{enter}')
    // loginSupport.closeButton().scrollIntoView().should("exist").should("be.visible").click();

    loginSupport.address1().should("exist").should("be.visible").type("31");
    loginSupport.address2().should("exist").should("be.visible").type("King Street");
    loginSupport.address3().should("exist").should("be.visible").type("West");
    loginSupport.town().should("exist").should("be.visible").type("Manchester");
    loginSupport.county().should("exist").should("be.visible").type("Cheshire");
    loginSupport.postcode().should("exist").should("be.visible").type("C164UI");

    loginSupport.emergencyContactButton().should("exist").should("be.visible").click();
    loginSupport.emergencyFirstName().should("exist").should("be.visible").type("Blake");
    loginSupport.emergencyLastName().should("exist").should("be.visible").type("Lively");
    loginSupport.emergencyMobilePhone().should("exist").should("be.visible").type("07778889999");
    loginSupport.emergencyHomePhone().should("exist").should("be.visible").type("07446789087");
    loginSupport.emergencyWorkPhone().should("exist").should("be.visible").type("07558908673");
    loginSupport.emergencyAddress1().should("exist").should("be.visible").type("31");
    loginSupport.emergencyAddress2().should("exist").should("be.visible").type("King Street");
    loginSupport.emergencyAddress3().should("exist").should("be.visible").type("West");
    loginSupport.emergencyTown().should("exist").should("be.visible").type("Manchester");
    loginSupport.emergencyCounty().should("exist").should("be.visible").type("Cheshire");
    loginSupport.emergencyCountry().should("exist").should("be.visible").select('United Kingdom');
    loginSupport.emergencyRelationship().should("exist").should("be.visible").select('Spouse');
    loginSupport.saveEmergencyContactButton().should("exist").should("be.visible").click();
}
exports.loginBrightHr = loginBrightHr
