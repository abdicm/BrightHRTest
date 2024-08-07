import loginSupport from "../../../support/login/support.login"
import employeeSupport from "../../../support/employeeList/support.employeeList"

function employeeList() {
    loginSupport.employeesTab().should("exist").should("be.visible").click();
    loginSupport.employeesHeading().should("exist").should("be.visible");
    employeeSupport.employeeName().contains("Abdi Aden").should("exist").should("be.visible");
    // loginSupport.homePageloginButton().should("exist").should("be.visible").click();
    //
}
exports.employeeList = employeeList