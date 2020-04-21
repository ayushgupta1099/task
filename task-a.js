let fname = "Ayush";
let lname = "Gupta";
let fullname = fname.concat(lname);
fullname = fullname.toUpperCase();
let len = fullname.length;

const print = () => {
  console.log(fullname);
};
print();

let x = 1;
switch (x) {
  case 1:
    let day = "sunday";
    if (day === "sunday" || day === "saturday") {
      console.log("Weekend");
    } else console.log("Weekday");
    break;

  case 2:
    for (let i = 1; i <= 100; i++) if (i % 5 === 0) console.log(i);
    break;

  default:
    console.log("Wrong Choice");
}
