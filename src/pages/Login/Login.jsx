import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import {useAuth} from '../../authContext.js'

const Login = () => {
  const [Values, setValues] = useState({
    userName: "",
    pwd: ""
  });

  const [error, setError] = useState('');
  const { login } = useAuth();

  const navigate = useNavigate();
  const change = (e) => {
  const { name, value } = e.target;
  setValues((prevValues) => ({ ...prevValues, [name]: value }));
};

  const submit = async () =>{
    
    try{
        const response = await axios.post("http://localhost:5000/api/Signin", Values);

        console.log("response", response)

         const token = response.data.token;
         const id = response.data.id

        
        if (response.data.message === "Welcome") {
        login(token, id);

        navigate("/");
      }
    }catch(error){
      const field = error.response.data.field
      setError({ [field]: error.response.data.message });
    }
  };
  return (
    <div className='page-container'>
      <div className='login-container'>
        <p>Log In</p>
        <div className='form_containe'>
          <div className='un-containe'>
            <label htmlFor='' className=''>Username</label>
            <input type='text' className='inputUser' placeholder='Username' name='userName' required
            value={Values.userName}
            onChange={change}
            />
             {error.userName && <p className='input-error'>{error.userName}</p>}  
          </div>
          <div className='pwd-containe'>
            <label htmlFor='' className=''>Password</label>
            <input type='password' className='inputPass' placeholder='Password' name='pwd' required 
            value={Values.pwd}
            onChange={change}/>
            {error.pwd && <p className='input-error'>{error.pwd}</p>}  
          </div>
         
          <div className='log'>
            <button className='btnLog' onClick={submit}>LogIn</button>
          </div>
          <p className='orContaine'>Or</p>
          <p className='text_containe'>Don't have an account? &nbsp;
            <Link to= "/Signup" className='linkSignup'>
              <u>Signup</u>
            </Link>
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Login
