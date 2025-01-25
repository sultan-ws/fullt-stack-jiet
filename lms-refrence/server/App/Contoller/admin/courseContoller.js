const { ObjectId } = require("mongodb");
const DbConnection = require("../../../dBConnection")

exports.addCourse=async (req,res)=>{
    let db=await DbConnection();
    let courseTable=await db.collection('course')

    let courseName=req.body.courseName;
    let coursePrice=req.body.coursePrice;
    let coursesDuration=req.body.coursesDuration;
    let coursesDescription=req.body.coursesDescription;
    let status=req.body.status;
   
    let courseImage;
    let updId=req.query.id ?? '';
    console .log(updId)

    if(req.file===undefined){

        if(updId!==undefined || updId!==""){
            try{
                let courseData=await courseTable.findOne({_id:new ObjectId(updId) })
                 courseImage=courseData.courseImage;
            }
            catch(e){
                
            }
        }
        else{
            courseImage=''
        }
       
    }
    else{
        courseImage=req.file.filename;
    }

    let finalObj={
        courseName,
        coursePrice,
        coursesDuration,
        coursesDescription,
        status,
        courseImage
    }

    if(req.query.id===""){

           
         
          
            let finalres=await courseTable.insertOne(
                finalObj
            )
            // console.log(req.body)
            // console.log(req.file.filename)
            res.send(finalres)


    }
    else{
        
      
        
       
        let finalres=await courseTable.updateOne(
            {_id:new ObjectId(updId)},{$set:finalObj}
        )
    console.log(req.body)
        
        res.send(finalres)
        //Update Query
       
    }
}
exports.viewCourse=async (req,res)=>{
    let db=await DbConnection();
    let courseTable=await db.collection('course')
    let finalCourse=await courseTable.find().toArray();
    let courseImgUrl="http://localhost:8000/uploads/course/"

    res.send({
        status:1,
        finalCourse,
        courseImgUrl
    })
}


exports.deleteCourse=(req,res)=>{
    res.send("Welcome delete Course Function")
}


exports.editCourse=async (req,res)=>{
    let courseId=req.params.id;
  
    let db=await DbConnection();
    let courseTable=await db.collection('course')
    let finalCourse=await courseTable.findOne({_id:new ObjectId(courseId) })
   
    res.send(finalCourse)
}