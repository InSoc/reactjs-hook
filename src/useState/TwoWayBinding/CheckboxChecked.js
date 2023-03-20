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

function CheckboxChecked () {

  const [checkbox, setCheckbox] = useState([])

  

  const handleCheck = (id) => {
    setCheckbox(prev => {
      const isChecked = checkbox.includes(id);

      if (isChecked) {
        return checkbox.filter(item => item!==id)
      } else {
        return [...prev, id]
      }
    })
  }

  const handCall = () =>{
    console.log({ids: checkbox})
  }

  return (
    <div>
      { courses.map(course => 
        <div key={course.id}>
          <input 
            type="checkbox"
            checked = {checkbox.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      )}
        
      <button onClick = {handCall}>Call</button>
    </div>
  )
}

export default CheckboxChecked;