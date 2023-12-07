// const courses = [
//     {
//       id: 1,
//       courseName: "Graphic Design 101",
//       type: "Graphic Design",
//     },
//     {
//       id: 2,
//       courseName: "Web Development Fundamentals",
//       type: "Programming Language",
//     },
//     {
//       id: 3,
//       courseName: "Advanced Photoshop Techniques",
//       type: "Graphic Design",
//     },
//     {
//       id: 4,
//       courseName: "JavaScript Programming",
//       type: "Programming Language",
//     },
//     {
//       id: 5,
//       courseName: "Digital Illustration Masterclass",
//       type: "Graphic Design",
//     },
//     {
//       id: 6,
//       courseName: "Python for Data Science",
//       type: "Programming Language",
//     },
//   ];

// const CourseControler = {
//   get: (req, res) => {
//     res.send(courses);
//   },

//   getbyid: (req, res) => {
//     let id = req.params.id;
//     let obj = courses.find((x) => x.id == id);

//     if (obj) {
//       res.send({
//         isSuccessful: true,
//         data: obj,
//         message: "",
//       });
//     } else {
//       res.send({
//         isSuccessful: true,
//         data: null,
//         message: "no data found",
//       });
//     }
//   },

//   add: (req, res) => {
//     let { name, passward } = req.body;
//     let obj = { name, passward };
//     let errorArray = [];

//     if (!obj.name) {
//       errorArray.push("required name");
//     }
//     if (!obj.passward) {
//       errorArray.push("required passward");
//     }

//     if (errorArray.length > 0) {
//       res.send({
//         isSuccessful: false,
//         data: errorArray,
//         message: "validation error",
//       });
//     } else {
//       res.send({
//         isSuccessful: false,
//         data: obj,
//         message: "add",
//       });
//     }
//   },

//   edit: (req, res) => {
//     let id = parseInt(req.params.id);
//     let { name, shortName } = req.body;
//     let obj = { id, name, shortName };
//     let errArr = [];

//     let prevobj = courses.find((x) => x.id == id);

//     if (prevobj) {
//       prevobj.id = obj.id;
//       prevobj.name = obj.name;
//       prevobj.shortName = obj.shortName;
//       res.send({
//         isSuccessful: true,
//         message: "Data updated successfully",
//         data: prevobj,
//       });
//     } else {
//       res.send({
//         isSuccessful: false,
//         message: "Not update",
//         data: "",
//       });
//     }
//   },

//   del: (req, res) => {
//     let id = parseInt(req.params.id);
//     let obj = courses.find((x) => x.id === id);

//     if (obj) {
//       courses = courses.filter((x) => x.id !== id);
//       res.send({
//         isSuccessful: true,
//         data: obj,
//         message: "Course deleted successfully",
//       });
//     } else {
//       res.send({
//         isSuccessful: true,
//         data: null,
//         message: "No Data Found",
//       });
//     }
//   },
// };

// module.exports = CourseControler;
