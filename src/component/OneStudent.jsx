import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function OneStudent() {
    // 1. create the state
    const [student,setStudent] = useState(null)

    async function getOneStudent(){
        const studentValue = await axios.get('https://omar-ga-class.onrender.com/students/5')
        console.log(studentValue.data)
        setStudent(studentValue.data)
    }
  return (
    <div>
      
    </div>
  )
}

export default OneStudent


