import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function OneStudent() {

    // Exercise 2:
    // for the rest countries API get the data for bahrain
    // once you get the data show the name of the country of bahrain
    // BONUS: Show the flag and population as well 


    // 1. create the state
    const [student,setStudent] = useState(null)

    async function getOneStudent(){
        const studentValue = await axios.get('https://omar-ga-class.onrender.com/students/5')
        console.log(studentValue.data)
        setStudent(studentValue.data)
    }

    useEffect(()=>{
        getOneStudent()
    },[])

    const teacher = "OMar"

  return (
    <div>
      {student && (
        <div>
            <h1>name:{student.studentName}</h1>
            <p>id:{student.id}</p>

        </div>
      )}
    </div>
  )
}

export default OneStudent


