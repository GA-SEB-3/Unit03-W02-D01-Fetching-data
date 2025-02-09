import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CreateStudent from './CreateStudent'

function Students() {

    console.log("component renders")
    
    const [students,setStudents] = useState([])

    async function getAllStudents(){
        const allStudents = await axios.get("https://omar-ga-class.onrender.com/students")
        console.log(allStudents.data)
        setStudents(allStudents.data)
    }

    // getAllStudents()

    // useEffect() is a function
    // takes 2 arguments: 
    //                  1. function
    //                  2. array

    useEffect(()=>{
        getAllStudents()
    },[])

  return (
    <div>
        <h1>All Students</h1>
 

        {students.map((oneStudent)=>
        <div key={oneStudent.id}>
            <h2>{oneStudent.studentName}</h2>
        </div>
        )}
      
      <CreateStudent getAllStudents = {getAllStudents}/>
    </div>
  )
}

export default Students
