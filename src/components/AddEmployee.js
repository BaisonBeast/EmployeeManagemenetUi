import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(e);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add Employee</h1>
        </div>

        <div className="item-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="item-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            onChange={(e) => handleChange(e)}
            value={employee.lastName}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="item-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            onChange={(e) => handleChange(e)}
            value={employee.emailId}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="item-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 px-4 py-2"
            onClick={saveEmployee}
          >
            Save
          </button>
          <button
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 px-4 py-2"
            onClick={reset}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;