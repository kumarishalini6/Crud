import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory,useParams} from 'react-router-dom'
function Edit(){
    let history = useHistory()
    const {id} = useParams()
    const [user, setUser] =useState({
        name:"",
        username:"",
        email:"",
        password:"",
        confirm_password:"",
        phone:""
    });
    const onInputchange=(event)=>{
       setUser ({...user,[event.target.name]:event.target.value})
    }
    useEffect (()=>{
        loaduser()
    },[])
    const {name,username,email,password,confirm_password,phone} = user;
    const onSubmit= async e=>{
        e.preventDefault()
        await axios.put(`http://localhost:3003/users/${id}`,user);
        history.push("/");
    }   
    const loaduser = async () =>{
        
        const result =  await axios.get(`http://localhost:3003/users/${id}`);
       setUser(result.data)
    }
     return(
        <>
        <br/>
        <div className="container  ">
            <div className="w-75 mx-auto shadow p-5">
                <h1 className="text-center mb-4">Edit A User</h1>
                <form onSubmit={e=> onSubmit(e)}>
                   
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                        placeholder="Enter Your Name" name="name"
                        value={name}  onChange={e => onInputchange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                        placeholder="Enter Your UserName" name="username" 
                        value={username}  onChange={e => onInputchange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control form-control-lg"
                        placeholder="Enter Your Email Address" name="email" 
                        value={email}  onChange={e => onInputchange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                        placeholder="Enter Your Password" name="password" 
                        value={password}  onChange={e => onInputchange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                        placeholder="Enter Your Confirm Password" name="confirm_password" 
                        value={confirm_password}  onChange={e => onInputchange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                        placeholder="Enter Your Phome Number" name="phone" 
                        value={phone}  onChange={e => onInputchange(e)}/>
                    </div>
                    <button className="btn btn-secondary btn-block">Add User</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default Edit;