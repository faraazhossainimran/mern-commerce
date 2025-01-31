import React, { useState } from 'react'
import loginIcons from '../assets/signin.gif'
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='container mx-auto'>
            <div className='bg-white mt-4 max-w-md mx-auto py-8 px-8'>
                <div>
                    <div className=''><img className='w-24 mx-auto' src={loginIcons}/></div>
                    <p>Email:</p>
                    <input placeholder='Enter Email' className='bg-slate-100 w-full p-2'></input>
                    <p>Password:</p>
                    <div className='relative'><input type={showPassword ? "text" : "password"} placeholder='Enter Password' className='bg-slate-100 w-full p-2'></input> <div className='absolute top-3 right-3' onClick={() => setShowPassword((prev)=> !prev)}> {showPassword? <FaEyeSlash /> : <FaEye /> } </div></div>

                    <p className='text-right py-4'>Forgot password</p>
                    <div className=' p-4 bg-red-700 hover:bg-red-500 text-center w-48 rounded-full mx-auto'><button className='text-white font-semibold'><Link to={"/login"}>Login</Link></button></div>
                    <div className='mt-4 flex text-md'>Don't have an account? <p className='ml-2'><Link to={"/signup"}>Sign up</Link></p></div>
                </div>
            </div>
        </div>
    )
}

export default Login