import React from 'react'
import Studentportal from '../src/Components/Studentportal'
import Button from './Components/Button';

const App = () => {
  const edit =()=>{
    alert("Edit!!!")
  }
  const remove =()=>{
    alert("Delete!!!")
  }
  const rusticate =()=>{
    alert("Rusticate!!!")
  }
  return (
    <div>
      <Studentportal></Studentportal>
      <Button title="Edit" color="btn btn-warning" sayHello={edit}></Button>
      <Button title="Delete" color="btn btn-danger" sayHello={remove}></Button>
      <Button title="Rusticate" color="btn btn-dark" sayHello={rusticate}></Button>
    </div>
  )
}

export default App