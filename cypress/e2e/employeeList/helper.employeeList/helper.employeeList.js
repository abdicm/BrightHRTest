import loginSupport from "../../../support/login/support.login";
import employeeSupport from "../../../support/employeeList/support.employeeList";
import employeeLists from "../../login/helper.login/helper.login";

function employeeList() {
    // Navigate to the Employees tab
    loginSupport.employeesTab().should("exist").should("be.visible").click();
    loginSupport.employeesHeading().should("exist").should("be.visible");
    const employ = employeeLists[0];
    employeeSupport.employeeName().contains(employ).should("exist").should("be.visible");
    // // Retrieve the list of employee names
    // const employeeNames = employeeLists.retrieveNames(); // Assuming this is a function that returns an array
    // const employeeNameCount = employeeNames.length;
    // console.log('employeeNameCount: ', employeeNameCount);
    
    // // Loop through the employee names and check if they exist and are visible on the page
    // for (let i = 0; i < employeeNameCount; i++) {
    //     employeeSupport.employeeName().contains(employeeNames[i]).should("exist").should("be.visible");
    // }
}

exports.employeeList = employeeList;
