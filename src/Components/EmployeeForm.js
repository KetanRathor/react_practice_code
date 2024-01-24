import React from "react";
function EmployeeForm(){
    return(
        <div className="formDiv">
      <form className="myForm">
      <h3 className= "h3">Add Employees</h3>
      <br/>
      <label for="fname">First name: </label>
      <input type="text" id="fname" name="fname"/>
      <br/>
      <br/>
      <label for="designation">Designation: </label>
      <input type="text" id="designation" name="designation"/>
      <br/>
      <br/>
      <label for="Salary">Designation: </label>
      <input type="text" id="salary" name="salary"/>
      <br/>
      <br/>
      <label for="departmentId">Department Id: </label>
      <input type="text" id="departmentId" name="departmentId"/>
      <br/>
      <br/>
      <input type="button" value="Submit"/>
      <input type="button" value="Cancel"/>
      </form>
      </div>
    )
}
export default EmployeeForm;