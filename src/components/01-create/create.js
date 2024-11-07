import React, { useState } from 'react'

// IMG
import Corbeille from '../../assets/corbeille.png'

// CSS
import './style.css'

const Create = () => {

  const [article, setArticle] = useState({
    array: [],
    task: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setTodo(acritcle => ({ ...todo, [name]: value }))
    console.log(todo);
    
  }

  const save = (array) => {
    localStorage.setItem('todo', JSON.stringify(array))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const objet = { 
      name: todo.task,
      isActive: true
    }

    todo.array.push(objet)

    save(todo.array)

    e.target.reset()
    setTodo(todo => ({...todo, task: '' }))
  }

  const deleteTask = (indexTask) => {
    // const arrayAfterDelete = todo.array.filter((task, index) => index !== indexTask)
  
    const arrayAfterDelete = todo.array.filter((task, index) => {
      if(index !== indexTask) return task
    })    

    setTodo({array: arrayAfterDelete})
  }

  const updateTask = (indexTask) => {
    const arrayAfterUpdate = todo.array.filter((task, index) => {
      if(index === indexTask){
        task.isActive = !task.isActive
      }
      return task
    })
  
    setTodo({array: arrayAfterUpdate})
    console.log(todo.array);
  }
    

  return ( 
    <div>
      <h1>Create Article </h1>
      {todo.array.map((task, index) => (
        <div key={index}>
          <p 
            className={task.isActive ? "task" : 'barree'}
            onClick={() => updateTask(index)} 
            >
              {task.name}
            </p>
          <img 
            src={Corbeille}  
            width={20}
            alt='corbeille'
            onClick={() => deleteTask(index)}
          />
        </div>
      ))

      }
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder='Add article '
          name='task'
          onChange={handleChange} 
          required
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default Create