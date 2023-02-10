import logo from './logo.svg';
import './App.css';
import './css/sb-admin-2.min.css'
import SideBar from './sidebar';
import TopBar from './Topbar';
import DashBoard from './dashboard';
import User from './Users';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import CreateUser from './CreateUser';
import Login from './Login';
import Portal from './Portal';
import UserView from './Userview';
import EditUser from './EditUser';
import Products from './Products';
import ProductView from './ProductView';
import CreateProduct from './CreateProduct';
import { UserProvider } from './Contex';
import Profile from './Profile';
import EditProduct from './EditProduct';

function App() {
  return (
    
    <BrowserRouter>
    
    
      <Routes>  
      <Route path="/" element={<Login/>}/>
      <Route path="/portal" element={<Portal/>}>
         <Route path="dashboard" element={<DashBoard/>}/>
         <Route path="users" element={<User/>}/>
         
         
         <Route path="users/:id" element={<UserView/>}/>
         <Route path="user/edit/:id" element={<EditUser/>}/>

         <Route path="createuser" element={<CreateUser/>}/>
         <Route path="products" element={<Products/>} />
         <Route path="product/:id" element={<ProductView/>} />
         <Route path="product/edit/:id" element={<EditProduct/>} />
         <Route path="createproduct" element={<CreateProduct/>}/>
         </Route> 
         </Routes> 
         
          </BrowserRouter>
  );
}

export default App;
