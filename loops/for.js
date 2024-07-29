// let students = [
//     "Emily",
//     "James",
//     "Michael",
//     "Angelica",
//     "Demetri",
//     "LC",
//     "Karol",
//     "Sheryl",
//     "Eric",
//     "Deckard",
//     "Shane",
//   ];
//             //init      //condition             //incrememnt
//   for (let index = 0; index < students.length; index++) {
//     const student = students[index];
//     console.log(student);
//   }

const topNFLQuarterbacks = [
  {
    name: "Patrick Mahomes",
    passingYards: 4829, // Example passing yards for the 2023 season
  },
  {
    name: "Josh Allen",
    passingYards: 4559, // Example passing yards for the 2023 season
  },
  {
    name: "Joe Burrow",
    passingYards: 4406, // Example passing yards for the 2023 season
  },
];

for (let index in topNFLQuarterbacks) {
  console.log(`Name: ${topNFLQuarterbacks[index].name}`);

  for (let index in topNFLQuarterbacks) {
    console.log(`Name: ${topNFLQuarterbacks[index].passingYards}`);
  }
}
