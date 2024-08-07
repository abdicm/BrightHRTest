export default {
    employeeHubHeading() {
        return cy.get('h1.sc-LKuAh.Heading-gXGEXq.ekygVS')
    },
    employeeName() {
        return cy.get('p.sc-dymIpo.Name-jQkLgH.kuvzUm')
    },
    template() {
        return cy.get('div.flex.items-center.ml-4.space-x-4').find('a').contains('Log in');
    },
    
   
    
}