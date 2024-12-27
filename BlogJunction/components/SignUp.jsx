import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router'
import {login as authLogin} from '../src/app/authSlice'
import {useDispatch} from 'react-redux'
import authService from '../src/appwrite/auth'
import {Button, Input ,Logo} from './index'
import {useForm} from 'react-hook-form'

function SignUp() {
    let [error,setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register,handleSubmit} = useForm();

    const signUp = async(data)=>{
        setError('');
        try {
            const session = await authService.createAccount(data);
            console.log(session);

            if(session){
                
                const userData = await authService.getUser();
                console.log(userData);
                if(userData)useDispatch(authLogin(userData));
                navigate('/')
            }
        } catch (error) {
            setError(error.message);
        }
    }
  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex align-middle justify-end ">
                    <span className="inline-block w-full max-w-[300px] ">
                        <Logo width='100%' />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign Up to get your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Login
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(signUp)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="UserName: "
                placeholder="Enter your UserName"
                {...register("username", {
                    required: true,
                })}
                />
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default SignUp