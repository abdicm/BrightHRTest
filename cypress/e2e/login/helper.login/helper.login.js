import loginSupport from "../../../support/login/support.login"
//
let nameList = [];


function loginBrightHr() {
    loginSupport.brightHrLoginHeading().should("exist").should("be.visible")
    loginSupport.homePageloginButton().should("exist").should("be.visible").click();
    loginSupport.loginPageHeading().should("exist").should("be.visible");

    loginSupport.emailField().should("exist").should("be.visible").type("acctest02@grr.la"); //look into enum//variables and call them
    loginSupport.passwordField().should("exist").should("be.visible").type("A123456789");
    loginSupport.loginButton().should("exist").should("be.visible").click();
    loginSupport.peopleOverview().should("exist").should("be.visible");
}
exports.loginBrightHr = loginBrightHr

function addEmployee() {
    loginSupport.employeesTab().should("exist").should("be.visible").click();
    loginSupport.employeesHeading().contains('Employee hub').should("exist").should("be.visible");
    loginSupport.addEmployeeButton().should("exist").should("be.visible").click();

    const randomName = generateRandomName();
    const email = generateRandomEmail(randomName.firstName, randomName.lastName);

    const firstName = randomName.firstName;
    const lastName = randomName.lastName;
    const fullName = `${firstName} ${lastName}`; // Alternatively: firstName + ' ' + lastName;

    nameList.push(fullName);
    console.log('Added Employee Name: ', fullName);
    console.log('*********************************', nameList);

    loginSupport.newFirstNameField().scrollIntoView().should("exist").should("be.visible").type(randomName.firstName);
    loginSupport.newLastNameField().scrollIntoView().should("exist").should("be.visible").type(randomName.lastName);
    loginSupport.newEmployeeSubmitButton().scrollIntoView().should("exist").should("be.visible").click({ force: true });

    loginSupport.selectTitle().should("exist").should("be.visible").select('Mr');
    loginSupport.middleName().should("exist").should("be.visible").type(randomName.middleName);
    loginSupport.gender().should("exist").should("be.visible").select('Male');
    loginSupport.dateOfBirth().should("exist").should("be.visible").type("22111990").type('{enter}')
    loginSupport.emailAddress().should("exist").should("be.visible").type(email);
    loginSupport.mobileNumber().scrollIntoView().should("exist").should("be.visible").click().type("07446165925");
    loginSupport.jobTitle().should("exist").should("be.visible").type("Tester");
    loginSupport.workStartDate().should("exist").should("be.visible").type("14082024").type('{enter}')

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

    loginSupport.accountHolderName().scrollIntoView().should("exist").should("be.visible").type('GOAT');
    loginSupport.bankName().scrollIntoView().should("exist").should("be.visible").type('Barclays');
    loginSupport.bankBranch().scrollIntoView().should("exist").should("be.visible").type('`West London');
    loginSupport.accountNumber().scrollIntoView().should("exist").should("be.visible").type('53305045');
    loginSupport.sortCode().scrollIntoView().should("exist").should("be.visible").type('20-98-03');

    loginSupport.taxCode().scrollIntoView().should("exist").should("be.visible").type('F22');
    loginSupport.niNumber().scrollIntoView().should("exist").should("be.visible").type('SP0134L');
    loginSupport.passportNumber().scrollIntoView().should("exist").should("be.visible").type('63849207');
    loginSupport.passportCountryOfIssue().scrollIntoView().should("exist").should("be.visible").type('United Kingdom');
    loginSupport.expiryDate().scrollIntoView().should("exist").should("be.visible").type('17082030').type("{Enter}");

    loginSupport.drivingLicenceNumber().scrollIntoView().should("exist").should("be.visible").type('JACK364659FL');
    loginSupport.drivingLicenceCountryOfIssue().scrollIntoView().should("exist").should("be.visible").select("United Kingdom")
    loginSupport.drivingLicenceClass().scrollIntoView().should("exist").should("be.visible").type('Type B');
    loginSupport.drivingLicenceExpiryDate().scrollIntoView().should("exist").should("be.visible").type('22022040').type("{Enter}");

    loginSupport.visaNumber().scrollIntoView().should("exist").should("be.visible").type('7465850');
    loginSupport.visaExpiryDate().scrollIntoView().should("exist").should("be.visible").type('22022025').type("{Enter}");
    loginSupport.SaveAndContinueForm().scrollIntoView().should("exist").should("be.visible").should("not.be.disabled").click();

    loginSupport.workLocation().scrollIntoView().should("exist").should("be.visible").click();
    loginSupport.locationOption().contains("ABC Office").scrollIntoView().should("exist").should("be.visible").click();
    loginSupport.jurisdiction().scrollIntoView().should("exist").should("be.visible").select("England & Wales");
    loginSupport.fullTimeEmployeeOption().scrollIntoView().should("exist").click()
    loginSupport.workPaternOptions().scrollIntoView().should("exist").should("be.visible").should('be.enabled').select('Mon-Fri 9-5 (5 days, 35hr)');
    loginSupport.workingWeekHours().scrollIntoView().should("exist").should("be.visible").clear().type("35");
    loginSupport.holidaytEntitlementUnit().scrollIntoView().should("exist").click()
    loginSupport.fullTimeAnnualLeaveDays().scrollIntoView().should("exist").should("be.visible").type("25");
    loginSupport.SaveAndContinueForm().scrollIntoView().should("exist").should("be.visible").should("not.be.disabled").click();
    loginSupport.addAllToBrightHrButton().scrollIntoView().should("exist").should("be.visible").should("not.be.disabled").click();

    loginSupport.summaryHeading().scrollIntoView().should("exist").should("be.visible").should('contain.text', 'Summary');
    loginSupport.addedUserName().should("exist").should("be.visible").should('contain.text', randomName.firstName);
    loginSupport.addedUserEmail().should("exist").should("be.visible").should('contain.text', email);
    loginSupport.summaryPageNextButton().should("exist").should("be.visible").click();
    loginSupport.summarySaveAndContinue().should("exist").should("be.visible").click();
    loginSupport.goToEmployeeHubButton().should("exist").should("be.visible").click();
}
exports.addEmployee = addEmployee

function retrieveNames() {
    return nameList; //Created outside so it can be accessed globally and called
}

exports.retrieveNames = retrieveNames

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]; 
    // get leng of the array
    // generate a random number between 0 and the length of the array
    //round down the generated value into a whole number
    //return value of the array at that position  array[generated number]
}

function generateRandomName() {
    const firstNames = [
        'Jackson', 'Avery', 'Logan', 'Samantha', 'Mason', 'Ella',
        'Harper', 'James', 'Sofia', 'Isaiah', 'Chloe', 'Eli'];
    
    const lastNames = [
        'Wright', 'Martinez', 'Murphy', 'Cooper', 'Bennett', 
        'Foster', 'Bailey', 'Morris', 'Price', 'Lee', 'Sanders', 'Bryant'];
    
    const middleNames = [
        'Jackson', 'Nora', 'Landon', 'Piper', 'Owen', 
        'Maya', 'Levi', 'Ruby', 'Sebastian', 'Lila', 'Henry', 'Ellie'];

    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    const middleName = getRandomElement(middleNames); 

    return {
        firstName,
        middleName,
        lastName, 
    };
}
function generateRandomEmail(firstName, lastName) {
    const domains = ['example.com', 'test.com', 'demo.com'];
    const domain = getRandomElement(domains);
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`; //returns a string
    //look up string interpolation
}


