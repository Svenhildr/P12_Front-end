/**
 * @module FormContext
 *
 * @description Provides a context for managing form state across the application. This allows components to access
 * and update the form data without prop drilling.
 */

import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: null,
        startDate: null,
        department: "",
        street: "",
        city: "",
        state: "",
        zipCode: ""
    });

    const [employees, setEmployees] = useState([]);

    const addEmployee = (employeeData) => {
        setEmployees((prevEmployees) => [...prevEmployees, employeeData]);
    };

    return <FormContext.Provider value={{ form, setForm, employees, addEmployee }}>{children}</FormContext.Provider>;
};

export const useForm = () => {
    return useContext(FormContext);
};
