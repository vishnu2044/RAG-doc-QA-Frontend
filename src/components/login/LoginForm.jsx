import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { loginUser } from '../../services/redux/slices/AuthSlice';
import ErrorAlert from '../AlertComonents/ErrorAlert';


const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleErrorClose = () => {
        // Logic to handle the close event
        console.log('Error alert closed');
      };

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("Function is working");
        setEmailError('');
        setPasswordError('');
        let hasError = false;

        if (email === '') {
            setEmailError('Please enter your email');
            hasError = true;
        }
        if (password === '') {
            setPasswordError('Please enter your password');
            hasError = true;
        }

        if (!hasError) {
            console.log('Login is working from login form');
            try {
                // Dispatch the loginUser thunk and wait for the result
                const resultAction = await dispatch(loginUser({ email, password, navigate }));
                
                if (loginUser.fulfilled.match(resultAction)) {
                    // Handle successful login
                    console.log("User login successful:", resultAction.payload);
                    // You can use resultAction.payload here
                } else {
                    // Handle login failure
                    console.log("User login failed:", resultAction.payload);
                    // You can use resultAction.payload here
                }
            } catch (error) {
                console.error("Login failed:", error);
            }
        }
    };
  return (
    <form>
    <div>
    {emailError && (
        <ErrorAlert message={emailError} onClose={true} />
      )}
      {passwordError && (
        <ErrorAlert message={passwordError} onClick={handleErrorClose} />
      )}
      <div>
        <div className="capitalize text-xl mb-2">
          <label>Email</label>
        </div>
        <div className="border-2 relative">
          <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </span>
          <input 
            className="w-full placeholder:capitalize px-8 py-1.5 outline-blue-800" 
            onChange={(e)=>setEmail(e.target.value)}
            type="text" 
            value={email}
            placeholder="enter your email" />
        </div>
      </div>
      <div className="mt-4">
        <div className="capitalize text-xl mb-2">
          <label>password</label>
        </div>
        <div className="border-2 relative">
          <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </span>
          <input 
            className="w-full placeholder:capitalize px-8 py-1.5 outline-blue-800" 
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            type="password" 
            placeholder="enter your password" />
        </div>
      </div>
      <div className="sm:flex sm:justify-between inline-block my-4">

      </div>
      <div>
        <button onClick={handleLogin} className="bg-blue-800 text-xl text-white font-medium uppercase p-2 rounded-lg w-full opacity-90 hover:opacity-100">login</button>
      </div>
      {/* <div className="text-[18px] text-center mt-4">
        <p>Don't have an account? <a className="capitalize text-blue-800 hover:underline cursor-pointer" href="#">register</a></p>
      </div> */}
    </div>
  </form>
  )
}

export default LoginForm