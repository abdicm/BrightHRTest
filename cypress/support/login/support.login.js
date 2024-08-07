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
        return cy.get('.sc-cpmLhU.crcZfc').contains("People overview").wait(2000)
    },
    employeesTab(){
        return cy.get('span.text-white').contains('Employees')
    },
    employeesHeading(){
        return cy.get('h1.sc-LKuAh.Heading-fLkEDa').contains('Employee hub')
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


    closeButton() {
        return cy.get('button[data-testid="closeBtn"]');
    },
    companyField() {
        return cy.get('[data-qa="companyName-sign-up"]')
    },
    signUpButton() {
        return cy.get('div.flex.items-center.ml-4.space-x-4').find('button').contains('Sign up')
    },
    signUpMessage() {
        return cy.get('h3.my-6.text-secondary-300').contains('Sign up today and get same-day access')
    },
    template1() {
        return cy.get('[aria-label="Contacts"]')
    },
    template2() {
        return cy.get('[aria-label="Settings"]')
    }
}