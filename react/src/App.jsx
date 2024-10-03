import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FormProvider } from "./components/FormContext";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeList from "./components/EmployeeList";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import "primereact/resources/themes/mira/theme.css";
const App = () => {
    return (
        <FormProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<CreateEmployee />} />
                    <Route path="/employee-list" element={<EmployeeList />} />
                </Routes>
            </Router>
        </FormProvider>
    );
};

export default App;
