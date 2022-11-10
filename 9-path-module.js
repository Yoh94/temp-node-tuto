const path = require("path");
console.log(path.sep); // file separator

const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);
console.log(path.sep); // file separator

const base = path.basename(filePath);
console.log(base);
console.log(path.sep); // file separator

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
console.log(path.sep); // file separator
