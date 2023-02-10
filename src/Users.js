import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import axios from 'axios'
import React from "react";


function User(){

    const[users,setUsers]=useState([])
    const[isLoading,setLoading]=useState(false)

  //here useEffect is a one of hook concept.and it was used for fetch the data when compoenet is mount,ie.not at all time
      useEffect(()=>{
       
       loadData()
   
    },[])
 
   //axios is a metheod,used for look like fetch the data.ie.advanced fecth concept
   let loadData=async()=>{
        setLoading(true)
        let users=await axios.get("https://63e3213fc919fe386c01131e.mockapi.io/users");
        
        //console.log(users)
        setUsers(users.data)
        setLoading(false)
   }

   let userDelete = async (id)=>{

    try{
        let ask= window.confirm("Do you want to delete this data.?"
        );
        if(ask){
            await axios.delete(`https://63e3213fc919fe386c01131e.mockapi.io/users/${id}`
            );
            loadData();
        }
    }catch (error){

    }
    
   }

    return(
        <div class="container-fluid">

        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Users</h1>
                        <Link to="/portal/createuser" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i>Create user</Link>
                    </div>
        {
            isLoading ? <span>Loading...</span> : <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>#Sl</th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>#Sl</th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                                <th>Action </th>
                            </tr>
                        </tfoot>
                       <tbody>
                       {/* usely the map is return a values and its indexes,& here we used for s.no purpose */}
                        
                        {users.map((user,index)=>{
                            
            //here key={index} is given for prevent the virtual dom from confusing.because,if there is no keyvalues,then vdom consider the ele are duplicate..  
                       
                            return <tr key={index}>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.position}</td>
                                <td>{user.office}</td>
                                <td>{user.age}</td>
                                <td>{user.startDate}</td>
                                <td>{user.salary}</td>
                                <td>
                                    <Link to={`/portal/users/${user.id}`} className="btn btn-sm btn-warning mr-2">View</Link>
                                    <Link to={`/portal/user/edit/${user.id}`} className="btn btn-sm btn-primary mr-2">Edit</Link>
                                    <button onClick={()=>userDelete(user.id)} className="btn btn-sm btn-danger mr-2">Delete</button>
                                </td>
                                
                            </tr>
                        })}
                        
                        
                        </tbody> 
                            
                        
                    </table>
                </div>
            </div>
        </div>

        }
        
    </div>
    )
}
export default User;