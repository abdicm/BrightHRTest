import loginSupport from "../../../support/login/support.login";
import employeeSupport from "../../../support/employeeList/support.employeeList";
import employeeLists from "../../login/helper.login/helper.login";

function employeeList() {
    loginSupport.employeesTab().should("exist").should("be.visible").click();
    loginSupport.employeesHeading().should("exist").should("be.visible");
    const employeeNames = employeeLists.retrieveNames(); 
    
    const employeeNameCount = employeeNames.length;
    console.log('employeeNameCount: ', employeeNameCount);
    
    for (let i = 0; i <= employeeNameCount; i++) {
        employeeSupport.employeeName().contains(employeeNames[i]).should("exist").should("be.visible");
    // Use for loop
    // get employeeList which is employeeSupport.employeeName()
    // if current i is eq 1 
    // Eg employeeNames[1] (John Smith). should....
    // Loop through all items in the list and check
    }
}

exports.employeeList = employeeList;
