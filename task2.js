let student1 = {
  name: "std1",
  age: 19,
  school: "school1",
  subjectList: ["maths", "physics", "chemistry"],
  marks: [30, 40, 50],
  printDetails: () => {
    console.log(student1.name + " " + student1.age + " " + student1.school);
  },
};

let student2 = {
  name: "std2",
  age: 20,
  school: "school2",
  subjectList: ["maths", "physics", "chemistry"],
  marks: [60, 70, 80],
  printDetails: () => {
    console.log(student2.name + " " + student2.age + " " + student2.school);
  },
};
let student3 = {
  name: "std3",
  age: 21,
  school: "school3",
  subjectList: ["maths", "physics", "chemistry"],
  marks: [10, 20, 30],
  printDetails: () => {
    console.log(student3.name + " " + student3.age + " " + student3.school);
  },
};

function print(obj) {
  obj.printDetails();
  console.log((obj.marks[0] + obj.marks[1] + obj.marks[2])/3);
}

print(student1);
print(student2);
print(student3);
