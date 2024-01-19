import fs from "fs";

const filePath = "data.txt";

const option = process.argv[2];
const input = process.argv[3];

if (option === "w") {
  fs.appendFileSync(filePath, input + "\n");
  console.log("appended:", input);
} else if (option === "r"){
  const content = fs.readFileSync(filePath, "utf-8");
  console.log(content.toString());
}else if (option === "c"){
  //วิธี 1 เขียนทับ
  // fs.writeFileSync(filePath, "");

  //วิธี 2 truncateSync
  fs.truncateSync(filePath, 0);

}else if (option === "d"){
  // read file 
  const content = fs.readFileSync(filePath, "utf-8");

  // appende content to the file
  fs.appendFileSync(filePath, "\n" + content)


  //-------------duplicate file---------------
//   const content = fs.copyFile(filePath, "copied_file.txt", (err) => {
//     if (err) {
//         console.log("Error Found:", err);
//     }
//     else {
 
//         // Get the current filenames
//         // after the function
//         getCurrentFilenames();
//         console.log("\nFile Contents of copied_file:",
//         fs.readFileSync("copied_file.txt", "utf8"));
//     }
// });
}else {
  console.log("invalid option");
}
