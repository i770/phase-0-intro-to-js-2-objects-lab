// Write your solution in this file!
// Initial employee object with name and streetAddress keys
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
};

// Non-destructive update function
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Destructive update function
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Non-destructive delete function
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Destructive delete function
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

