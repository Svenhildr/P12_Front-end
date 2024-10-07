import React, { useState } from "react";
import { useForm } from "./FormContext";
import StateSelect from "./StateSelect";
import { Calendar } from "primereact/calendar";
import { Link } from "react-router-dom";
import Modal from "success-modal-hrnet/src/lib/Modalsuccess";
import "../Style/createEmployee.scss";

/**
 * CreateEmployee Component
 * 
 * @component
 * 
 * @description This component renders a form for creating a new employee. It uses the form data from a global form 
 * context, allowing the user to input personal information, address, and department. On form submission, 
 * the employee data is saved.
 * 
 * @returns {JSX.Element} The employee creation form.

 * 
 * @description The form consists of inputs for the employee's first and last name, birthdate, start date, 
 * address fields (street, city, state, zip code), and department selection. 
 * The user input is handled by `handleChange` for regular inputs and `handleDateChange` for date inputs.
 */

const CreateEmployee = () => {
    const { form, setForm, addEmployee } = useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);

    /**
     * Handle input changes and update the form state
     *
     * @param {Object} e - The input change event
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    /**
     * Handle date changes and update the form state
     *
     * @param {string} name - The name of the date field (e.g., 'dateOfBirth', 'startDate')
     * @param {Date} value - The selected date value
     */

    const handleDateChange = (name, value) => {
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    //form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(form);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
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
                    <StateSelect value={form.state} onChange={(e) => handleChange({ target: { name: "state", value: e.value } })} />

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
            <Modal isVisible={isModalVisible} onClose={closeModal} message="Employee Created!" />
        </div>
    );
};

export default CreateEmployee;
