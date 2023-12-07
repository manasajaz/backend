// console.log("hello");

// const fs = require("fs");
// const path = require("path");
// const http = require("http");

// fs.readFile("./abc.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.writeFile("./abc.txt", "anas", () => {
//   console.log("data change");
// });

// //// path ////

// console.log(__dirname);
// console.log(__filename);

// const arr = ["english", "math", "physics"];

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     console.log("done");
//     res.write(JSON.stringify(arr));
//   }
// });
// res.end();
// server.listen(3000);

///// Express  ////

// const express = require("express");

// const App = express();

// App.get("/courses", (req, res) => {
//   res.send(arr);
// });

// App.listen(5000, () => {
//   console.log("server is running");
// });

// const mongoose = require("mongoose")

const express = require("express");
require("dotenv").config();
const App = express();

App.use(express.json());
// const courseroute = require("./routes/courseroute");

// App.use("/course", courseroute);

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     App.listen(process.env.PORT, () => {
//       console.log(`database connected httpp://localhost:${process.env.PORT}`);
//     });
// }).catch((err) => {
//   console.log("err", err);
// })

 App.delete("courses/:id",(req, res) => {
    let id = parseInt(req.params.id);
    let obj = courses.find((x) => x.id === id);

    if (obj) {
      courses = courses.filter((x) => x.id !== id);
      res.send({
        isSuccessful: true,
        data: obj,
        message: "Course deleted successfully",
      });
    } else {
      res.send({
        isSuccessful: true,
        data: null,
        message: "No Data Found",
      });
    }
  })



App.listen(process.env.PORT, () => {
  console.log(`connected httpp://localhost:${process.env.PORT}`);
});


