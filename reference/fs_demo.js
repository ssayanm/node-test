const fs = require("fs");
const path = require("path");

//create folder

// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

//create and write to file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello Sayan!",
//   (err) => {
//     if (err) throw err;
//     console.log("File write too...");

//     //file append
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       " I am learning Node.js",
//       (err) => {
//         if (err) throw err;
//         console.log("File write too...");
//       }
//     );
//   }
// );

//read file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//Rename a file
// fs.rename(
//   path.join(__dirname, "/test", "hello.txt"),
//   path.join(__dirname, "/test", "helloworld.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("FIle renamed");
//   }
// );
