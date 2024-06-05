import studentsList from './students';

// Create a table and append it to the body
const table = document.createElement('table');
const tableHeader = document.createElement('tr');
const header1 = document.createElement('th');
const header2 = document.createElement('th');
header1.textContent = 'First Name';
header2.textContent = 'Location';
tableHeader.appendChild(header1);
tableHeader.appendChild(header2);
table.appendChild(tableHeader);

// Loop through the studentsList and create rows
studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

// Append the table to the body
document.body.appendChild(table);
