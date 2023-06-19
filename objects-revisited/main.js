const business = {
  opens: '8:30 AM',
  closes: '11:00 PM',
  totalEmployees: 4,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: {
    Andy: {
      position: 'Bowling Pin Juggler',
      daysOfWeekWorking: ['M', 'T', 'Th'],
    },
    Beverly: {
      position: 'Standing Horse Rider',
      daysOfWeekWorking: ['T', 'W', 'Th'],
    },
    Carl: {
      position: 'Fire Breather',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
    Doug: {
      position: 'Acrobat',
      daysOfWeekWorking: ['F'],
    },
  },
};

function addWeekends() {
  business.daysOpen = business.daysOpen.concat(['Sat', 'Sun']);
  const keys = Object.keys(business.employees);
  for (const key of keys) {
    business.employees[key].daysOfWeekWorking = business.employees[
      key
    ].daysOfWeekWorking.concat(['Sat', 'Sun']);
  }
}

function addEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';

  xhr.addEventListener('load', (event) => {
    console.log(xhr.response);
    for (let i = 0; i < 4; i++) {
      const newEmp = createEmployee(xhr.response[i]);
      business.employees[xhr.response[i].username] = newEmp;
    }
    business.totalEmployees = Object.keys(business.employees).length;
  });
  xhr.send();
}

function createEmployee(userObj) {
  const numDaysWorking = Math.floor(Math.random() * 5) + 1;
  const weekdays = ['M', 'T', 'W', 'Th', 'F'];
  const workDays = [];
  for (let i = 0; i < numDaysWorking; i++) {
    const day = weekdays[Math.floor(Math.random() * weekdays.length)];
    workDays.push(day);
    weekdays.splice(weekdays.indexOf(day), 1);
  }
  const employee = {
    position: userObj.company.catchPhrase + ' Creator',
    daysOfWeekWorking: workDays.concat(['Sat', 'Sun']),
  };
  addFullTime(employee);
  return employee;
}

function deleteEmployee(employeeName) {
  delete business.employees[employeeName];
  business.totalEmployees -= 1;
}

function addFullTime(employeeObj) {
  if (employeeObj.daysOfWeekWorking.length > 4) {
    employeeObj.fullTime = true;
  } else {
    employeeObj.fullTime = false;
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  addWeekends();
  const keys = Object.keys(business.employees);
  for (const key of keys) {
    addFullTime(business.employees[key]);
  }
  addEmployees();
  deleteEmployee('Carl'); // Reason: brought his llama to work
  console.log(business);
});
