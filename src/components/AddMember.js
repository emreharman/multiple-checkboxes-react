import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "../styles/AddMember.css";

const AddMember = (props) => {
    const [name,setName]=useState("");
    const [userPermissions,setUserPermissions]=useState({name:"user-management",admin:false,create:false,read:true,update:false,delete:false});
    const [permissionPermissions,setPermissionPermissions]=useState({name:"permission-management",admin:false,create:false,read:true,update:false,delete:false});
    const [rolePermissions,setRolePermissions]=useState({name:"role-management",admin:false,create:false,read:true,update:false,delete:false});
    const [systemPermissions,setSystemPermissions]=useState({name:"system-settings-management",admin:false,create:false,read:true,update:false,delete:false});
    const [members,setMembers]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3004/members").then(res=>setMembers(res.data)).catch(err=>console.log(err));
    },[]);
    const findBiggestId=(members)=>{
        return members[members.length-1].id;
    }
    const handleSubmit=(e)=>{
        e.preventDefault();

        const member={
            id:findBiggestId(members)+1,
            name,
            permissions:[
                userPermissions,
                permissionPermissions,
                rolePermissions,
                systemPermissions
            ]
        };
        axios.post("http://localhost:3004/members",member).then(()=>props.history.push("/")).catch(err=>console.log(err));
    }
    const handleReset=()=>{
        setName("");
        setUserPermissions({name:"user-management",admin:false,create:false,read:true,update:false,delete:false});
        setPermissionPermissions({name:"permission-management",admin:false,create:false,read:true,update:false,delete:false});
        setRolePermissions({name:"role-management",admin:false,create:false,read:true,update:false,delete:false});
        setSystemPermissions({name:"system-settings-management",admin:false,create:false,read:true,update:false,delete:false})
    }
    return (
        <div className="add-member-container">
            <form onSubmit={handleSubmit}>
                <div id="form-top">
                    <div id="form-top-content">
                        <label htmlFor="name">Name</label>
                        <input type="text" autoComplete="off" id="name" value={name} onChange={(e)=>setName(e.target.value)} required/>
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
                    <button type="reset" className="btn btn-outline-danger" onClick={handleReset}>Reset</button>
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddMember
