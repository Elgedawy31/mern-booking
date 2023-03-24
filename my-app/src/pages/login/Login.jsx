import React, { useContext, useState  } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login() {

  

    
  const navitage = useNavigate()

    const [username , setUsername] = useState('')
    const [password , setPasword] = useState('')


    const { error , loading  , dispatch}  = useContext(AuthContext)


    const data = {
        username ,
        password
    }



    const HandleSubmit =async (e) => {

        e.preventDefault()

        dispatch({type:'LOGIN-START'}) 

        try {

            const res = await axios.post('http://localhost:4000/auth/login' ,data)

            res.data.Data  && localStorage.setItem('user' , JSON.stringify(res.data.Data[0]))

            dispatch({type:'LOGIN-SUCCESS' , payload:res.data})

            navitage('/')
            
          } catch (error) {
            dispatch({type:'LOGIN-FAILURE' , payload:error.response.data})

          }
          
        }


        


  return (
    <div className='container' style={{margin:'20px auto'}}> 
        
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e) => setUsername(e.target.value) } />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPasword(e.target.value) } />
  </div>

  <button disabled={loading} type="submit" className="btn btn-primary" onClick={HandleSubmit}>Submit</button>
</form>

{error &&  <div style={{margin:'30px auto 0' , width:'fit-content' , color:'red' , fontSize:'25px'} }>{error.message}</div>}


<div style={{margin:'30px auto 0' , width:'fit-content'} }>Are You Not Have Account ? <NavLink to='/register'>Register</NavLink></div>

    </div>
  )
}

export default Login