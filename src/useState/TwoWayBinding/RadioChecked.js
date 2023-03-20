import { useState } from "react";


const courses = [
  {
    id: 1,
    name: 'JS'
  },
  {
    id: 2,
    name: 'React'
  },
  {
    id: 3,
    name: 'HTML'
  }
  
]

function RadioChecked () {

  const [checked, setChecked] = useState()



 

  const handleClick= () => {
    console.log('click', {id: checked})
  }
  return (
    <div>
      { courses.map(course => (
        <div key= {course.id}>
          <input 
            type="radio" 
            value=""
            checked = {checked === course.id}
            onChange = { () => setChecked(course.id)}
          />
          { course.name }
        </div>
      ))}
      
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default RadioChecked;