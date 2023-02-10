import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";
import TopBar from "./Topbar";

function Portal(){

    return(
        <div id="wrapper">
      <SideBar/>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">    
      
      <TopBar/>
      <Outlet/>   
      
      </div>
          </div>
        
          </div>
    )
}
export default Portal;