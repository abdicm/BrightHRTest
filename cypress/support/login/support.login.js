export default {
    brightHrLoginHeading() {
        return cy.get('h1.text-5xl.font-bold.text-white.md\\:text-7xl').contains('Get FREE unlimited rota software')
    },
    loginPageHeading() {
        return cy.get('.mb-6.text-2xl.font-semibold.text-neutral-700').contains('Login to Bright')
    },
    homePageloginButton() {
        return cy.get('div.flex.items-center.ml-4.space-x-4').find('a').contains('Log in')
    },
    emailField() {
        return cy.get('input[name="email"]')
    },
    loginButton(){
        return cy.contains('button', 'Login')   
    },
    passwordField(){
        return cy.get('input[name="password"]')
    },
    peopleOverview(){
        return cy.contains('h2', 'People overview').parent('div.mb-4.md\\:mb-0').wait(5000);
    },
    employeesTab(){
        return cy.get('span.text-white').contains('Employees')
    },
    employeesHeading(){
        return cy.get('h1.sc-LKuAh.Heading-fLkEDa')
    },
    addEmployeeButton(){
       return cy.contains('button', 'Add employees') 
    },
    newFirstNameField() {
        return cy.get('input[aria-label="New first name"]')
    },
    newLastNameField() {
        return cy.get('input[aria-label="New last name"]') 
    },
    newEmployeeSubmitButton(){
        return cy.get('button[aria-label="Add new employee"]')
    },
    selectTitle(){
    return cy.get('#title')

    },
    middleName(){
        return cy.get('#middleName')
    },
    gender(){
        return cy.get('#gender')
    },
    dateOfBirth(){
        return cy.get('input[data-e2e="dateOfBirth"]');
    },
    emailAddress(){
        return cy.get('#email')
    },
    mobileNumber(){
        return cy.get('input[name="mobile number"]')
    },
    jobTitle(){
        return cy.get('#jobTitle')
    },
    workStartDate(){
        return cy.get('input[data-e2e="workStartDate"]');
    },
    address1(){
        return cy.get('#address1')
    },
    address2(){
        return cy.get('#address2')
    },
    address3(){
        return cy.get('#address3')
    },
    town(){
        return cy.get('#town')
    },
    county(){
        return cy.get('#county')
    },
    postcode(){
        return cy.get('#postcode')
    },
    emergencyContactButton(){
        return cy.contains('button', 'Add Emergency Contact');
    },
    emergencyFirstName(){
        return cy.get('#emergencyFirstName')
    },
    emergencyLastName(){
        return cy.get('#emergencyLastName')
    },
    emergencyMobilePhone(){
        return cy.get('#emergencyMobilePhone')
    },
    emergencyHomePhone(){
        return cy.get('#emergencyHomePhone')
    },
    emergencyWorkPhone(){
        return cy.get('#emergencyWorkPhone')
    },
    emergencyAddress1(){
        return cy.get('#emergencyAddress1')
    },
    emergencyAddress2(){
        return cy.get('#emergencyAddress2')
    },
    emergencyAddress3(){
        return cy.get('#emergencyAddress3')
    },
    emergencyTown(){
        return cy.get('#emergencyTown')
    },
    emergencyPostcode(){
        return cy.get('#emergencyPostcode')
    },
    emergencyCounty(){
        return cy.get('#emergencyCounty')
    },
    emergencyCountry(){
        return cy.get('select[name="country"]')
    },
    emergencyRelationship(){
        return cy.get('select[name="relationship"]')
    },
    saveEmergencyContactButton(){
        return cy.contains('button', 'Save contact')
    },
    accountHolderName(){
        return cy.get('input[placeholder="Account name"]');
    },
    bankName(){
        return cy.get('input[placeholder="Bank name"]');
    },
    bankBranch(){
        return cy.get('input[placeholder="Bank branch"]');
    },
    accountNumber(){
        return cy.get('input[placeholder="8 digit number"]');
    },
    sortCode(){
        return cy.get('input[placeholder="00-00-00"]');
    },
    taxCode(){
        return cy.get('input[name="taxCode"]');
    },
    niNumber(){
        return cy.get('#niNumber');
    },
    passportNumber(){
        return cy.get('#passportNumber');
    },
    passportCountryOfIssue(){
        return cy.get('#passportCountryOfIssue').select('United Kingdom');
    },
    expiryDate(){
        return cy.get('input[data-e2e="passportExpiryDate"]');
    },
    drivingLicenceNumber(){
        return cy.get('#drivingLicenceNumber')
    },
    drivingLicenceCountryOfIssue(){
        return cy.get('#drivingLicenceCountryOfIssue')
    },
    drivingLicenceClass(){
        return cy.get('#drivingLicenceClass')
    },
    drivingLicenceExpiryDate(){
        return cy.get('input[data-e2e="drivingLicenceExpiryDate"]');
    },
    visaNumber(){
        return cy.get('#visaNumber')
    },
    visaExpiryDate(){
        return cy.get('input[data-e2e="visaExpiryDate"]')
    },
    SaveAndContinueForm(){
        return cy.contains('button', 'Save and continue').wait(2000)
    },
    addedContactName(){
        return cy.get('p.mb-0.text-xl.font-semibold.xl\\:text-2xl').wait(5000)
    },
    workLocation() {
        return cy.get('#location')
    },
    locationOption() {
        return cy.get('.text-base.font-semibold.text-neutral-700')
    },
    jurisdiction() {
        return cy.get('#jurisdiction')
    },
    fullTimeEmployeeOption() {
        return cy.get('input[aria-label="Fixed, full or part time"]')
    },
    workPaternOptions() {
        return cy.get('select[data-testid="workingPatternSelect"]')
    },
    workingWeekHours() {
        return cy.get('input[data-testid="fullTimeEquivalentWorkingWeek.hours"]');
    },
    holidaytEntitlementUnit() {
        return cy.get('input[data-testid="entitlement-unit-radio-days"]').wait(2000);
    },
    fullTimeAnnualLeaveDays() {
        return  cy.get('input[data-testid="fullTimeAnnualLeaveDays"]').wait(2000);
    },
    addAllToBrightHrButton() {
        return cy.contains('button', 'Add all to BrightHR').wait(2000);
    },
    summaryHeading() {
        return cy.get('p.text-xl.font-semibold');
    },
    addedUserName() {
        return cy.get('td.flex.p-3.md\\:table-cell');
    },
    addedUserEmail() {
        return cy.get('td.flex.p-3.md\\:table-cell')
    },
    summaryPageNextButton() {
        return cy.contains('button', 'Next').wait(2000);
    },
    summarySaveAndContinue() {
        return cy.contains('button', 'Send & continue').wait(2000);
    },
    goToEmployeeHubButton() {
        return cy.contains('button', 'Go to Employee Hub').wait(2000);
    }
    
}