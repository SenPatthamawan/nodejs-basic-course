import {write, read, clear} from "./utils.js"; //Best practice: use some function but same performance (a bit different)
//Another solution
// import utils from "./utils.js";

const option = process.argv[2];
const input = process.argv[3];

if (option === "w") {
// example: utils.write
  write(input);
} else if (option === "r") {
  read();
} else if (option === "c") {
  clear();
} else {
  console.log("invalid option");
}
