import fs from "fs"

const filePath = "data.txt";

fs.writeFileSync(filePath, "Hello world\n");
fs.appendFileSync(filePath, "Second line");

const content = fs.readFileSync(filePath);
console.log(content.toString());