import React from 'react';
import './App.css';
import EmplopyeeNames from './Components/EmployeeNames';
import EmployeeDetails from './Components/EmployeeDetails';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeTables from './Components/EmployeeTable';

function App() {


  return (
    <div className="mainDiv">
      <EmployeeDetails/>
     <EmplopyeeNames/>
     <EmployeeTables/>
     <EmployeeForm/>
     
      
      
      
      

    </div>
  );
}

export default App;
