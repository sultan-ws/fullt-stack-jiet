let express=require("express");
const multer  = require('multer')
let path=require("path")
const { addCourse, viewCourse, deleteCourse, editCourse } = require("../../Contoller/admin/courseContoller");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/course')
    },
    filename: function (req, file, cb) {
        // Generating a unique filename for the uploaded file
        const fileName ='course_image_'+ Date.now()+path.extname(file.originalname);
       console.log(fileName)
        cb(null, fileName);
    }
  })

  
let courseRoutes=express.Router();

const upload = multer({ storage: storage }).single('courseImg');


courseRoutes.post('/add-course/',upload,addCourse)
courseRoutes.get('/view-course',viewCourse)
courseRoutes.get('/delete-course',deleteCourse)
courseRoutes.get('/edit-course/:id?',editCourse)
module.exports=courseRoutes;