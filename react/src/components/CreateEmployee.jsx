import React from "react";
import { useForm } from "./FormContext";
import StateSelect from "./StateSelect";
import { Calendar } from "primereact/calendar";
import { saveEmployee } from "../data/EmployeeDatas";
import { Link } from "react-router-dom";
import "../Style/createEmployee.scss";

/**
 * Composant CreateEmployee tp create a new employee.
 *
 * @component
 * @returns {JSX.Element} creation form is submited.
 */

const CreateEmployee = () => {
    const { form, setForm } = useForm();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleDateChange = (name, value) => {
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveEmployee(form);
        alert("Employee Created!");
    };

    return (
        <div className="create-employee-container">
            <h1>HRnet</h1>
            <Link to="/employee-list" className="employee-link">
                View Current Employees
            </Link>

            <h2>Create Employee</h2>
            <form onSubmit={handleSubmit} id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="firstName" value={form.firstName} onChange={handleChange} required />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="lastName" value={form.lastName} onChange={handleChange} required />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <Calendar id="date-of-birth" value={form.dateOfBirth} onChange={(e) => handleDateChange("dateOfBirth", e.value)} showIcon dateFormat="dd/mm/yy" />

                <label htmlFor="start-date">Start Date</label>
                <Calendar id="start-date" value={form.startDate} onChange={(e) => handleDateChange("startDate", e.value)} showIcon dateFormat="mm/dd/yy" />

                <fieldset className="address">
                    <legend>Address</legend>
                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" name="street" value={form.street} onChange={handleChange} required />

                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" value={form.city} onChange={handleChange} required />

                    <label htmlFor="state">State</label>
                    <StateSelect value={form.state} onChange={(e) => handleChange(e)} />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input type="number" id="zip-code" name="zipCode" value={form.zipCode} onChange={handleChange} required />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select id="department" name="department" value={form.department} onChange={handleChange} required>
                    <option value="">Select Department</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Legal">Legal</option>
                </select>

                <button type="submit" className="submit-button">
                    Save
                </button>
            </form>
        </div>
    );
};

export default CreateEmployee;
