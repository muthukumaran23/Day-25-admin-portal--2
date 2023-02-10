import { useContext,useState } from "react"
import UserContext from "./Contex"


function Profile(){
   let context = useContext(UserContext)
   const [name,setName]= useState("")
 // the above value of (name) variable is change by setName & its connect with onChange event in below input tag
    let changeProfile = () =>{
  //this setUserName is connect with Profile.js,& it was update by button  
        context.setUserName(name)
    }


    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <label htmlFor="">UserName</label>
                    <input className="form-control" value={name} onChange={(event)=> setName(event.target.value)}></input>
                    <button onClick={changeProfile} className="btn bt-sm btn-primary mt-2">save</button>
                </div>
            </div>

        </div>
    )
}export default Profile;