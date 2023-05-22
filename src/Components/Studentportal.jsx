import React, { useState } from 'react'

const Studentportal = () => {
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const [allstudents, setallstudents] = useState([])

  const add =()=>{
  let student = {firstname,lastname, email, password}
    setallstudents([...allstudents, student])
    setfirstname('')
    setlastname('')
    setemail('')
    setpassword('')
  }

  const deleteStudent =(studentIndex)=>{
    let newAllStudent = [...allstudents]
    newAllStudent.splice(studentIndex,1)
    setallstudents(newAllStudent)
  }

  const editStudent = () =>{
    
  }

  return (
    <>
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto">
                <h1 className='text-primary text-center mt-5'>Student Portal</h1>
                <div className='form-control shadow py-4'>
                  <input
                  className='form-control my-2' 
                  type="text" 
                  placeholder='First Name' 
                  onChange={(e) => setfirstname(e.target.value)}
                  value = {firstname} />
                  
                  <input 
                  className='form-control my-2' 
                  type="text" 
                  placeholder='Last Name' 
                  onChange={(e) => setlastname(e.target.value)}
                  value={lastname}/>

                  <input
                  className='form-control my-2'  
                  type="email" 
                  placeholder='Email' 
                  onChange={(e) => setemail(e.target.value)}
                  value={email}/>

                  <input
                  className='form-control my-2'  
                  type="password" 
                  placeholder='Password' 
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}/>

                  <button className='btn btn-primary text-white form-control' onClick={add}>Add Student</button>
                </div>

                <hr className='mt-5 mb-3' />
                <div>
                  <h2 className='text-primary text-center'>List of Students</h2>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allstudents.map((eachStudent, index)=>(
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{eachStudent.firstname}</td>
                          <td>{eachStudent.lastname}</td>
                          <td>{eachStudent.email}</td>
                          <td>
                            <button className='btn btn-warning me-3'
                            onClick={()=>editStudent(index)}>Edit</button>

                            <button className='btn btn-danger'
                            onClick={() => deleteStudent(index)}>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Studentportal