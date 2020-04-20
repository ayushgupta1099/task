let fname = "Ayush";
let lname = "Gupta";
let fullname = fname.concat(lname);
let len = fullname.length;

const print = () => {
  console.log(fullname);
};
print();

let day = "sunday";
if (day === "sunday" || day === "saturday") {
  console.log("Weekend");
} else console.log("Weekday");

let num = 1;
let i;
if (num === 5) {
  for (i = 1; i <= 100; i++) {
    if (i % 5 === 0) console.log(i);
  }
} else console.log("Error");
