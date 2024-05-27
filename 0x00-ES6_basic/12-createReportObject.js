export default function createReportObject(employeesList) {
    const report = {

        allEmployees: employeesList,
        
        getNumberOfDepartments(employees) {
            return employees.length;
        }
    }
    return report;
}