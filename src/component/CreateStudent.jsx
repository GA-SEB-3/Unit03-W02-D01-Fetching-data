import React from 'react'
import { useState } from 'react'

function CreateStudent() {
    const [studentName,setStudentName] = useState("")

    function handleChange(event){
        setStudentName(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="studentName">Student Name</label>
        <input 
        type="text" 
        name='studentName'
        id='studentName'
        value={studentName}
        onChange={handleChange}
        />

        <button>Create Student</button>
      </form>
    </div>
  )
}

export default CreateStudent
