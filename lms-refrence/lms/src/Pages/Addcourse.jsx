import React, { useContext, useEffect, useState } from 'react'
import Header from '../Common/Header'
import Sidebar from '../Common/Sidebar'
import DashboardItems from '../Common/DashboardItems'
import Footer from '../Common/Footer'
import { mainContext } from '../Context'
import prev from '../img/generic-image-file-icon-hi.png'
import axios, { toFormData } from 'axios'
import { useNavigate, useParams } from 'react-router'
// import AdminForms from '../Common/AdminForms'

function Addcourse() {
  let params=useParams()
  let [formValue,setValue]=useState({
    courseName:'',
    coursePrice:'',
    coursesDuration:'',
    coursesDescription:'',
    courseImage:'',
    status:1

  })
   
  useEffect(()=>{
    setValue({
      courseName:'',
      coursePrice:'',
      coursesDuration:'',
      coursesDescription:'',
      courseImage:'',
      status:1
    })
    if(params.id!=="" && params.id!==undefined){

      axios.get(`http://localhost:8000/course/edit-course/${params.id}`)
      .then((res)=>res.data)
      .then((finalRes)=>{
        console.log(finalRes)
        setValue(finalRes)
        //  setfinalCourse(finalRes.finalCourse)
        //  setcourseImgUrl(finalRes.courseImgUrl)
      })
  }
  
  },[params.id])
  let navigator=useNavigate();
  let {changemenu} = useContext(mainContext);
  let [status,setStatus]=useState(true)

  let addCourse=(event)=>{
   
    let AllFormData=new FormData(event.target)

    // let courseObj={
    //   courseName:event.target.courseName.value,
    //   coursePrice:event.target.coursePrice.value,
    //   coursesDuration:event.target.coursesDuration.value,
    //   coursesDescription:event.target.coursesDescription.value,
    //   courseImage:event.target.courseImg,
    //   courseStatus:status,
    // }
    axios.post(`http://localhost:8000/course/add-course/?id=${params.id ?? '' }`,AllFormData)
    .then((res)=>res.data)
    .then((finalRes)=>{
      console.log(finalRes)
      setTimeout(()=>{
        navigator('/viewcourse')
      },3000)
     
    })

    event.preventDefault();

  }
  return (
    <div>

<Header/>
    
    <div className='flex  bg-[#F5F7FF]'>
      <Sidebar/>

      <div className={` ${changemenu==true ? 'w-[95%]':'w-[84%]'} relative px-[30px] pt-[20px] pb-[60px]  bg-[#F5F7FF]`}>

        <h1 className='text-[25px] font-[500] mb-[10px]'>
        Courses
        </h1>
        <div className=''>
          <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
          <form action="" onSubmit={addCourse}>
            Courses Name
            <input type="text" 
            onChange={(e)=>{
              let obj={...formValue};
              obj['courseName']=e.target.value;
              setValue(obj)
            }}
            
            value={formValue.courseName} name='courseName' className='border px-4 border-gray-400 w-full h-[50px] mb-3 mt-2 '  />
            Courses Price
            <input
             onChange={(e)=>{
              let obj={...formValue};
              obj['coursePrice']=e.target.value;
              setValue(obj)
            }}
            value={formValue.coursePrice}
            type="text" name='coursePrice' className='border px-4 border-gray-400 w-full h-[50px] mb-3 mt-2 '  />
            Courses Duration
            <input type="text"
            onChange={(e)=>{
              let obj={...formValue};
              obj['coursesDuration']=e.target.value;
              setValue(obj)
            }}
            
            value={formValue.coursesDuration}
            name='coursesDuration' className='border px-4 border-gray-400 w-full h-[50px] mb-3 mt-2 '  />
            Courses Description
            <textarea
            onChange={(e)=>{
              let obj={...formValue};
              
              obj['coursesDescription']=e.target.value;
              setValue(obj)

            }}
            
            value={formValue.coursesDescription}
            name="coursesDescription" id="" className='border px-4 pt-3 border-gray-400 my-2 w-full h-[100px]' cols="30" rows="10"></textarea>
            <input type="file" name='courseImg' id='file-input' className='border hidden border-gray-400 w-full h-[50px] mb-3 mt-2 '/>
            <div className='flex items-center gap-0 mt-[80px]'>
              <div className='w-full flex items-center'>
            <input type="text" readOnly placeholder='Upload File' className=' px-4 rounded-[10px_0px_0px_10px] border border-gray-400 w-[70%] h-[50px]' />
            <label id="file-input-label" for="file-input" className='border block  bg-[#4B49AC] text-white text-center leading-[50px]  w-[10%] rounded-[0px_20px_20px_0px] h-[50px]  '>Upload</label>
            </div>
            <div className=''>
              <img src={prev} alt="" width={150} />
            </div>
            </div>
            Courses Stauts
            <div className='flex items-center mt-5  mb-8 gap-2'>
            <input
             type="radio" value={formValue.status} 
             onChange={(e)=>{
              let obj={...formValue};
              obj['status']=1;
              setValue(obj)
             }}
            
             checked={formValue.status==1 ? true : false }
             
             name='status' className='mx-2 w-[20px] h-[20px] text-[20px]'  /> Active
            <input type="radio" value={formValue.status}
            
            name='status' className='mx-2 w-[20px] h-[20px] text-[20px]'
            onChange={(e)=>{
              let obj={...formValue};
              obj['status']=0;
              setValue(obj)
             }}
             checked={formValue.status==0 ? true : false }
            /> Deactive
            </div>
            
            <input type="submit" className='bg-[#4B49AC] mb-8 mt-7 text-[18px] px-8 py-2 rounded-[10px] text-white' />
            <input type="reset" value="Cancel" className='bg-[#F8F9FA] ml-4  text-[18px] px-8 py-2 rounded-[10px] text-black' />
          </form>
          </div>
        </div>
      <Footer className/>
      </div>
    </div>

    </div>
  )
}

export default Addcourse