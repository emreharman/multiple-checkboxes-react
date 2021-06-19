import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "../styles/AddMember.css";
import Loading from './Loading';


const EditMember = (props) => {
    const id=props.location.id;
    const [member,setMember]=useState("");
    const [userPermissions,setUserPermissions]=useState({});
    const [permissionPermissions,setPermissionPermissions]=useState({});
    const [rolePermissions,setRolePermissions]=useState({});
    const [systemPermissions,setSystemPermissions]=useState({});

    useEffect(()=>{
        axios.get(`http://localhost:3004/members/${id}`)
        .then(res=>{
            setMember(res.data);
            setUserPermissions(res.data.permissions[0]);
            setPermissionPermissions(res.data.permissions[1]);
            setRolePermissions(res.data.permissions[2]);
            setSystemPermissions(res.data.permissions[3]);
        })
        .catch(err=>console.log(err));
    },[]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(id > 1){
            const updatedMember={
            id:member.id,
            name:member.name,
            permissions:[
                userPermissions,
                permissionPermissions,
                rolePermissions,
                systemPermissions
            ]
            };
            axios.put(`http://localhost:3004/members/${id}`,updatedMember)
                .then(()=>props.history.push("/"))
                .catch(err=>console.log(err));
        }else{
            alert("Can't update root member.");
            props.history.push("/");
        }
    };
    const handleDelete=(id)=>{
        if(id > 1){
            axios.delete(`http://localhost:3004/members/${id}`)
            .then(()=>props.history.push("/"))
            .catch(err => console.log(err));
        }else{
            alert("Can't delete root member.");
            props.history.push("/");
        }
    };
    return (
        <>
            {
                member !== "" ? (
                    <div className="add-member-container">
                        <form onSubmit={handleSubmit}>
                            <div id="form-top">
                                <div id="form-top-content">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" value={member.name} disabled/>
                                </div>
                            </div>
                            <div id="form-bottom">
                                <div className="first-line">
                                    <div className="permission-container">
                                        <h4 style={{textAlign:"center"}}>User Management</h4>
                                        <div >
                                            <div className="checkbox-container">
                                                <label htmlFor="user-admin">Admin</label>
                                                <input type="checkbox" id="user-admin" checked={userPermissions.admin} onChange={()=>setUserPermissions({...userPermissions,admin:!userPermissions.admin})}/>
                                            </div>
                                            <div className="checkbox-container">
                                                <label htmlFor="user-create">Create</label>
                                                <input type="checkbox" id="user-create" checked={userPermissions.create} onChange={()=>setUserPermissions({...userPermissions,create:!userPermissions.create})}/>
                                            </div>
                                            <div className="checkbox-container">
                                                <label htmlFor="user-read">Read</label>
                                                <input type="checkbox" id="user-read" checked={userPermissions.read} onChange={()=>setUserPermissions({...userPermissions,read:!userPermissions.read})}/>
                                            </div>
                                            <div className="checkbox-container">
                                                <label htmlFor="user-update">Update</label>
                                                <input type="checkbox" id="user-update" checked={userPermissions.update} onChange={()=>setUserPermissions({...userPermissions,update:!userPermissions.update})}/>
                                            </div>
                                            <div className="checkbox-container">
                                                <label htmlFor="user-delete">Delete</label>
                                                <input type="checkbox" id="user-delete" checked={userPermissions.delete} onChange={()=>setUserPermissions({...userPermissions,delete:!userPermissions.delete})}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="permission-container">
                                        <h4 style={{textAlign:"center"}}>Permission Management</h4>
                                        <div >
                                            <div className="checkbox-container">
                                                <label htmlFor="permission-admin">Admin</label>
                                                <input type="checkbox" id="permission-admin" checked={permissionPermissions.admin} onChange={()=>setPermissionPermissions({...permissionPermissions,admin:!permissionPermissions.admin})}/>
                                            </div>
                                            <div className="checkbox-container">
                                                <label htmlFor="permission-create">Create</label>
                                                <input type="checkbox" id="permission-create" checked={permissionPermissions.create} onChange={()=>setPermissionPermissions({...permissionPermissions,create:!permissionPermissions.create})}/>
                                            </div>
                                            <div className="checkbox-container">
                                                <label htmlFor="permission-read">Read</label>
                                                <input type="checkbox" id="permission-read" checked={permissionPermissions.read} onChange={()=>setPermissionPermissions({...permissionPermissions,read:!permissionPermissions.read})}/>
                                            </div>
                                            <div className="checkbox-container">
                                                <label htmlFor="permission-update">Update</label>
                                                <input type="checkbox" id="permission-update" checked={permissionPermissions.update} onChange={()=>setPermissionPermissions({...permissionPermissions,update:!permissionPermissions.update})}/>
                                            </div>
                                            <div className="checkbox-container">
                                                <label htmlFor="permission-delete">Delete</label>
                                                <input type="checkbox" id="permission-delete" checked={permissionPermissions.delete} onChange={()=>setPermissionPermissions({...permissionPermissions,delete:!permissionPermissions.delete})}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="second-line">
                                    <div className="permission-container">
                                        <h4 style={{textAlign:"center"}}>Role Management</h4>
                                        <div >
                                            <div className="checkbox-container">
                                                <label htmlFor="role-admin">Admin</label>
                                                <input type="checkbox" id="role-admin" checked={rolePermissions.admin} onChange={()=>setRolePermissions({...rolePermissions,admin:!rolePermissions.admin})}/>
                                            </div>
                                            <div className="checkbox-container">
                                                <label htmlFor="role-create">Create</label>
                                                <input type="checkbox" id="role-create" checked={rolePermissions.create} onChange={()=>setRolePermissions({...rolePermissions,create:!rolePermissions.create})}/>
                                            </div>
                                            <div className="checkbox-container">
                                                <label htmlFor="role-read">Read</label>
                                                <input type="checkbox" id="role-read" checked={rolePermissions.read} onChange={()=>setRolePermissions({...rolePermissions,read:!rolePermissions.read})}/>
                                            </div>
                                            <div className="checkbox-container">
                                                <label htmlFor="role-update">Update</label>
                                                <input type="checkbox" id="role-update" checked={rolePermissions.update} onChange={()=>setRolePermissions({...rolePermissions,update:!rolePermissions.update})}/>
                                            </div>
                                            <div className="checkbox-container">
                                                <label htmlFor="role-delete">Delete</label>
                                                <input type="checkbox" id="role-delete" checked={rolePermissions.delete} onChange={()=>setRolePermissions({...rolePermissions,delete:!rolePermissions.delete})}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="permission-container">
                                        <h4 style={{textAlign:"center"}}>System Settings Management</h4>
                                        <div >
                                            <div className="checkbox-container">
                                                <label htmlFor="system-admin">Admin</label>
                                                <input type="checkbox" id="system-admin" checked={systemPermissions.admin} onChange={()=>setSystemPermissions({...systemPermissions,admin:!systemPermissions.admin})}/>
                                            </div>
                                            <div className="checkbox-container">
                                                <label htmlFor="system-create">Create</label>
                                                <input type="checkbox" id="system-create" checked={systemPermissions.create} onChange={()=>setSystemPermissions({...systemPermissions,create:!systemPermissions.create})}/>
                                            </div>
                                            <div className="checkbox-container">
                                                <label htmlFor="system-read">Read</label>
                                                <input type="checkbox" id="system-read" checked={systemPermissions.read} onChange={()=>setSystemPermissions({...systemPermissions,read:!systemPermissions.read})}/>
                                            </div>
                                            <div className="checkbox-container">
                                                <label htmlFor="system-update">Update</label>
                                                <input type="checkbox" id="system-update" checked={systemPermissions.update} onChange={()=>setSystemPermissions({...systemPermissions,update:!systemPermissions.update})}/>
                                            </div>
                                            <div className="checkbox-container">
                                                <label htmlFor="system-delete">Delete</label>
                                                <input type="checkbox" id="system-delete" checked={systemPermissions.delete} onChange={()=>setSystemPermissions({...systemPermissions,delete:!systemPermissions.delete})}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="form-button-div">
                                <button type="reset" className="btn btn-outline-danger" onClick={()=>handleDelete(member.id)}>Delete</button>
                                <button type="submit" className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                ):(<Loading/>)
            }
        </>
        
    )
}

export default EditMember
