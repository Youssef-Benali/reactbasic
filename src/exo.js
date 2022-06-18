let students = [
  { id: 1, name: "Shams", lastName: "Uldin", presence: true },
  { id: 2, name: "Rinor", lastName: "Kossovo", presence: false },
];

console.log(students.map(s => s.lastName))