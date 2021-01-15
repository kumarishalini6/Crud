import React, {  useState, useEffect} from 'react';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { RiEdit2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
function Home(){
    const [users,setUsers] =useState([]);

    useEffect(()=>{
       loadUsers();
    },[]);

    const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:3003/users");
        console.log(result)
        setUsers(result.data.reverse())
    }

    const deleteUser= async id=>{
        await axios.delete(`http://localhost:3003/users/${id}`)
        loadUsers()
        alert("one data has been deleted")
    }
    
    return(
        <>
        <div className="container">
            <div className="py-4">
                <h1>List Of Users</h1>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th >Action</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index) => (
                            <tr>
                            <th scope="row">{index + 1}</th> 
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                            <Link className="btn btn-outline-secondary mr-2"  to={`/view/${user.id}`} ><GrView /></Link>
                            <Link  className="btn btn-outline-secondary mr-2"  to={`/edit/${user.id}`}><RiEdit2Fill/></Link>
                            <Link  className="btn btn-outline-danger mr-2"  onClick={()=> deleteUser(user.id)}><MdDelete/></Link>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default Home;