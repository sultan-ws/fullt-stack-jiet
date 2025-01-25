import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../Context';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Viewcourse() {
  let {changemenu} = useContext(mainContext);
  let [finalCourse,setfinalCourse]=useState([])
  let [courseImgUrl,setcourseImgUrl]=useState('')

  useEffect(()=>{
    axios.get('http://localhost:8000/course/view-course')
    .then((res)=>res.data)
    .then((finalRes)=>{
       setfinalCourse(finalRes.finalCourse)
       setcourseImgUrl(finalRes.courseImgUrl)
    })
  },[])

  return (
    <div>

<Header/>
    
    <div className='flex  bg-[#F5F7FF]'>
      <Sidebar/>
      
      <div className={` ${changemenu==true ? 'w-[95%]':'w-[84%]'} relative px-[30px] py-[50px] h-[92vh] bg-[#F5F7FF]`}>

        <h1 className='text-[25px] font-[500] mb-[10px]'>
        Course Table
        </h1>
        <div className=''>
        <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
          <table >
            <tr>
              <th>S.no</th>
              <th>Course Name</th>
              <th>Fees</th>
              <th>Duration</th>
              <th>Description</th>
              <th>Image</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            {finalCourse.length>=1

              ?
              finalCourse.map((courseItems,index)=>{
                return(
                  <tr>
                      <td>1</td>
                      <td>{courseItems.courseName}</td>
                      <td>{courseItems.coursePrice}</td>
                      <td>{courseItems.coursesDuration}</td>
                      <td>{courseItems.coursesDescription}</td>
                      <td>
                        <img src={courseImgUrl+courseItems.courseImage} width={50} />
                      </td>
                      <td>1</td>
                      <td className='text-center'>

                      <Link to={`/addcourse/${courseItems._id}`}>
                      <button className='bg-green-500 text-white px-5 mr-5 py-1'>Edit</button>
                      </Link>
                      <button className='bg-red-400 text-white px-5 py-1'>Delete</button>


                     </td>
                </tr>
                )
              })
              
            :
            <tr>
                <td colSpan={8}>no data found</td>
          </tr>

            }
           
          </table>
        </div>
        </div>
      <Footer/>
      </div>
    </div>

    </div>
  )
}

export default Viewcourse