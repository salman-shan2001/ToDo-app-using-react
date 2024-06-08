import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navebar from './Navebar'

const ViewTodo = () => {
    const [Todo,changeTodo] = useState([])
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            (response)=>{
                changeTodo(response.data)
            }
        ).catch()
    }

    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <div className="conteiner">
                <div className="row">
                    <Navebar/>
                    <center>
                        <h1>
                            ToDo Details
                        </h1>
                        <br></br>
                    </center>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">userId</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">title</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Todo.map(
                                        (value,index) => {
                                            return < tr >
                                                <th scope="row">{value.userId}</th>
                                                <td>{value.id}</td>
                                                <td>{value.title}</td>
                                            </tr >
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTodo
