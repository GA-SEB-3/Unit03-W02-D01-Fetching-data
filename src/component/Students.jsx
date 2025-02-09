import React from 'react'
import axios from 'axios'

function Students() {

    async function getAllStudents(){
        const allStudents = await axios.get("https://omar-ga-class.onrender.com/students")
        console.log(allStudents.data)
    }

    getAllStudents()

  return (
    <div>
        <h1>All Students</h1>
      
    </div>
  )
}

export default Students
