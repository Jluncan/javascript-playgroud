let students = [
  "Emily",
  "James",
  "Michael",
  "Angelica",
  "Demetri",
  "LC",
  "Karol",
  "Sheryl",
  "Eric",
  "Deckard",
  "Shane",
];
//init      //condition             //incrememnt
for (let index = 0; index < students.length; index++) {
  const student = students[index];
  console.log(student);
}
for (const student of students) {
  // think singular of plural (student of students)
  console.log(student);
}
