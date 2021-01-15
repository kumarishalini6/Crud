import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link,useParams} from 'react-router-dom'
function View(){
    const [users, setUser] =useState({
        name:"",
        username:"",
        email:"",
        password:"",
        confirm_password:"",
        phone:""
    });
    const {id} = useParams();

    useEffect (()=>{
        loaduser()
    },[])
    const loaduser = async () =>{
        const res = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(res.data)
    }
     return(
        <>
        <br />
        <div className="container py-4 border shadow">
           <Link className="btn btn-primary" to="/">Back To Home</Link>
           <h1 className="display-4">User Id: {id}</h1>
           <hr />
           <ul className="list-group w-70">
                <li className="list-group-item">Name: {users.name}</li>
                <li className="list-group-item">User Name: {users.username}</li>
                <li className="list-group-item">Email: {users.email}</li>
                <li className="list-group-item">Password: {users.password}</li>
                <li className="list-group-item">Phone Number: {users.phone}</li>
           </ul>
          
        </div>
           
        </>
    )
}
export default View;
