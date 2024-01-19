import fs from "fs";

const filePath = "data.txt";

const args = process.argv;

const name = args[2];

fs.writeFileSync(filePath, name);

