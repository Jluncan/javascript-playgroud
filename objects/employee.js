let employee = {
  firstName: "Emily", // propertyName: 'PropertyValue',
  lastName: "Morgan",
  formatName: function (firstName, lastName) {
    return `${lastName}, ${firstName}`;
  },
};
console.log(employee.formatName(employee.firstName, employee.lastName)); // dot notation (dotting to the property)

let truck = {
  truckId: "12345",
  Size: "53 Ft dry van",
  weight: "45K",
  color: "Black",
  Type: "dry Van",
};
function displayTruck(truck) {
  console.log(`
    type: ${truck.Type}
    type:${truck.Size}
    type: ${truck.truckId}
    `);
}
displayTruck(truck);
