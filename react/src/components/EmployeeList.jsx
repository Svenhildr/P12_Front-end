import { useEffect, useState } from "react";
import { getEmployees } from "../data/EmployeeDatas";
import { Link } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import "../Style//employeeList.scss";
// import "primeicons/primeicons.css";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: "contains" }
    });
    const [globalFilterValue, setGlobalFilterValue] = useState("");
    const [rows, setRows] = useState(15);

    useEffect(() => {
        const employeeData = getEmployees();
        setEmployees(employeeData);
    }, []);

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters["global"].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const onRowsChange = (e) => {
        setRows(e.value);
    };

    const renderHeader = () => {
        return <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Search..." className="p-inputtext" />;
    };

    const rowOptions = [
        { label: "10", value: 10 },
        { label: "25", value: 25 },
        { label: "50", value: 50 },
        { label: "100", value: 100 }
    ];

    const renderRowOptions = () => {
        const displayLabel = rows ? `Show ${rows} entries` : "Select rows";
        return (
            <Dropdown
                variant="filled"
                value={rows}
                options={rowOptions}
                onChange={(e) => setRows(e.value)}
                placeholder={displayLabel}
                className="row-dropdown"
                appendTo={document.getElementById("filter-container")}
            />
        );
    };

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
                <Column field="dateOfBirth" header="Date of Birth" body={(rowData) => new Date(rowData.dateOfBirth).toLocaleDateString()} sortable />
                <Column field="startDate" header body={(rowData) => new Date(rowData.startDate).toLocaleDateString()} sortable />
                <Column field="department" header="Department" sortable />
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
