import fs from "fs";

const filePath = "data.txt";

const content = fs.readFileSync(filePath, "utf-8");
console.log(content.toString());