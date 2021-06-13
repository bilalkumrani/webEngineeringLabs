import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Todo from './Todo'

export default function TodoList(){
    
const [todos,setTodos] =  useState(['larning','earning','sleeping','working','not working']);


return (

    <>
        <div className="container">
            <div className="row">
            {
            todos.map(item=>{
                return <Todo  text={item}/>
            })
        }

            </div>
        </div>

    </>
)



}