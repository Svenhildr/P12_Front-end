export const saveEmployee = (employeeData) => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(employeeData);
    localStorage.setItem("employees", JSON.stringify(employees));
};

export const getEmployees = () => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    return employees.map((employee) => ({
        ...employee,
        dateOfBirth: new Date(employee.dateOfBirth),
        startDate: new Date(employee.startDate)
    }));
};
