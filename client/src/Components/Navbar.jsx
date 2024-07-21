import React, { useContext } from 'react'
import '../assets/css/navbar.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'
import { toast } from 'react-toastify';


const Navbar = () => {
    const { user, logout } = useContext(UserContext);
  
    const handleLogout = () => {
      toast.success("Logged out successfully", {
        position: "top-right",
        autoClose: 5000
      });
      logout(); // Clear user context
    };
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <Link to ="/" className='navbar-brand'>
                CONTACT MS
            </Link>
        </div>
        <div className="navbar-right">
            <Link to="/about" className='navbar-link'>About</Link>
            {
              user ? <>
              <Link to="/user" className='navbar-link'>{user.name}</Link>
              <Link to="/" className='navbar-link' onClick={handleLogout}>Logout</Link>
              </>
              :
              <>
                <Link to="/login" className='navbar-link'>Login</Link>
                <Link to="/register" className='navbar-link'>Register</Link>
              </>
            }
            
            
        </div>
    </div>
  )
}

export default Navbar
