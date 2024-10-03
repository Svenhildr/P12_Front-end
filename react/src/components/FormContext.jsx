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

    return <FormContext.Provider value={{ form, setForm }}>{children}</FormContext.Provider>;
};

export const useForm = () => {
    return useContext(FormContext);
};
