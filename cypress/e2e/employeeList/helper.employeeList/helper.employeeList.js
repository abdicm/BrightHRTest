import loginSupport from "../../../support/login/support.login";
import employeeSupport from "../../../support/employeeList/support.employeeList";
import employeeLists from "../../login/helper.login/helper.login";

function employeeList() {
    loginSupport.employeesTab().should("exist").should("be.visible").click();
    loginSupport.employeesHeading().should("exist").should("be.visible");
    const employeeNames = employeeLists.retrieveNames(); 
    
    const employeeNameCount = employeeNames.length;
    console.log('employeeNameCount: ', employeeNameCount);
    
    for (let i = 0; i < employeeNameCount; i++) {
        employeeSupport.employeeName().contains(employeeNames[i]).should("exist").should("be.visible");
    }
}

exports.employeeList = employeeList;
