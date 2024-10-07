import React, { useEffect, useState } from "react";
import { useForm } from "./FormContext";
import { Link } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
// import { Dropdown } from "primereact/dropdown";
import "../Style//employeeList.scss";

/**
 * Component EmployeeList to display employees list pour afficher with pagination and search input.
 *
 * @component
 * @returns {JSX.Element}  employees datas table with a global filter and pagination.
 *
 * @example
 * <EmployeeList />
 *
 * @description uses `useState` et `useEffect`  to manage employees datas and apply a global filter for search.
 * table uses `DataTable` from PrimeReact to display employees datas with pagination and options to change the number of rows.
 *
 * @see {@link https://www.primefaces.org/primereact/showcase/#/datatable|PrimeReact DataTable Documentation}
 */

const EmployeeList = () => {
    const { employees } = useForm();
    const [globalFilterValue, setGlobalFilterValue] = useState("");

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: "contains" }
    });

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let updatedFilters = { ...filters };
        updatedFilters["global"].value = value;

        setFilters(updatedFilters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="search-container">
                <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Search..." className="p-inputtext" />
                <i className="pi pi-search search-icon"></i>
            </div>
        );
    };

    const header = renderHeader();

    return (
        <div className="employee-list-container">
            <h2 className="currentEmployeeTitle">Current Employees</h2>
            <div className="filter-container">
                {renderHeader()}
                <i className="pi pi-search search-icon"></i>
            </div>

            <DataTable
                value={employees}
                className="employee-table"
                paginator
                rows={10}
                rowsPerPageOptions={[10, 25, 50, 100]}
                filters={filters}
                globalFilterFields={["firstName", "lastName", "dateOfBirth", "startDate", "department", "street", "city", "state", "zipCode"]}
                emptyMessage="No employees found."
            >
                <Column field="firstName" header="First Name" sortable />
                <Column field="lastName" header="Last Name" sortable />
                <Column field="startDate" header="Start Date" body={(rowData) => new Date(rowData.startDate).toLocaleDateString()} sortable />
                <Column field="department" header="Department" sortable />
                <Column field="dateOfBirth" header="Date of Birth" body={(rowData) => new Date(rowData.dateOfBirth).toLocaleDateString()} sortable />
                <Column field="street" header="Street" sortable />
                <Column field="city" header="City" sortable />
                <Column field="state" header="State" sortable />
                <Column field="zipCode" header="Zip Code" sortable />
            </DataTable>
            <Link to="/" className="home-link">
                Home
            </Link>
        </div>
    );
};

export default EmployeeList;
