import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles/ListMembers.css";
import Loading from './Loading';

const ListMembers = () => {
    const [members,setMembers]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3004/members").then(res=>setMembers(res.data)).catch(err=>console.log(err));
    },[]);
    return (
        <div className=" content" >
            {
                members.length > 0 ? (
                    <div className="table-container">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" style={{textAlign:"center"}}>Name</th>
                                    <th scope="col" style={{textAlign:"center"}}>User Management</th>
                                    <th scope="col" style={{textAlign:"center"}}>Permission Management</th>
                                    <th scope="col" style={{textAlign:"center"}}>Role Management</th>
                                    <th scope="col" style={{textAlign:"center"}}>System Settings Management</th>
                                    <th scope="col" style={{textAlign:"center"}}>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    members.map(member=>(
                                        <tr key={member.id} className="table-tr">
                                            <td className="table-td">{member.name}</td>
                                            {
                                                member.permissions.map(permission=>(
                                                    <td key={permission.name} className="table-td">
                                                        <span>Admin: </span>
                                                        <input type="checkbox" disabled checked={permission.admin}/>
                                                        <span>Create: </span>
                                                        <input type="checkbox" disabled checked={permission.create}/>
                                                        <span>Read: </span>
                                                        <input type="checkbox" disabled checked={permission.read}/>
                                                        <span>Update: </span>
                                                        <input type="checkbox" disabled checked={permission.update}/>
                                                        <span>Delete: </span>
                                                        <input type="checkbox" disabled checked={permission.delete}/>
                                                    </td>
                                                ))
                                            }
                                            <td style={{textAlign:"center"}}>
                                                <Link to={{pathname:`/edit-member/${member.id}`,id:member.id}} style={{fontSize:"0.7rem"}} className="btn btn-primary btn-sm" >Edit</Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                                
                            </tbody>
                        </table>
                    </div>
        
                ):(<Loading/>)
            }
         </div>   
    )
}

export default ListMembers
