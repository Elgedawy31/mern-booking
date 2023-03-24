import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

function Navbar() {




  const navigate = useNavigate()
  const {user} = useContext(AuthContext)





  const HandleOut = () => {

    localStorage.clear()

    navigate('/login')

  }

  return (
    <div className='navbar '>
        <div className="navcontainer"  style={{cursor:'pointer'}}>
            <NavLink to='/'><span style={{color:'white' , textDecoration:'none'}}> GadBooking</span></NavLink>
            {user ? <div style={{display:'flex' , gap:"20px" , alignItems:'center'}}> <span>hello :  {user.username}</span> <button className='btn' style={{backgroundColor:'white' , marginRightL:"20px" , color:'blue'}} onClick={HandleOut}>Logout</button></div> : <div className="butons">
            <NavLink to='/register'><button className='btn ' style={{backgroundColor:'white' , marginRight:'20px'}}>Register</button></NavLink>

                <NavLink to='/login'><button className='btn ' style={{backgroundColor:'white'}}>Login</button></NavLink>
            </div>}
        </div>
    </div>
  )
}

export default Navbar