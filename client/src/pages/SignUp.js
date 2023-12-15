import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import OAuth from '../components/oauth/OAuth';
// import {useDispatch, useSelector} from 'react-redux';
// import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice';
// import { setCredentials } from '../redux/user/authSlice';
// import { setCredentialsAction } from '../redux/actions';

const SignUp = () =>  {


    const navigate = useNavigate();
    const [formData , setFormData] = useState({});
    const [error , setError] = useState({});
    // const {error} = useSelector(state => state.user);
    // const {user} = useSelector(state => state.auth);
    // const dispatch = useDispatch();


    const handleChange = (e) => {
        setFormData({
            ...formData,
           [ e.target.id] : e.target.value,
        })
    }

    const  handleSubmit = async (e) => {

        try{
            e.preventDefault();
            // dispatch(signInStart());
            const res = await fetch('http://localhost:4000/api/auth/signup', {
                method : "POST",
                headers : {
                        "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if(data.success === false){
                // dispatch(signInFailure(data.message));
                return;
            }
            // dispatch(signInSuccess(data));
            // dispatch(setCredentialsAction(data));
           navigate('/profile');
        }catch(error){
            // dispatch(signInFailure(error.message));
        }
    }


  return (
    <div className='h-full  flex justify-center text-gray-200'> 
    <main  className=" h-[583px] w-[350px] flex mt-1 flex-col items-center justify-center px-4">
       <div className="max-w-sm mt-2 w-full text-gray-200 space-y-5">
           <div  className="text-center flex h-[87px] justify-center items-center">
             
               <div className="mt-5 w-[251px] ">
                   <h3 style={{fontSize: "xx-large"}} className=" h-[56px] font-WorkSans text-2xl sm:text-3xl">Create Account</h3>
               </div>
           </div>
           <form
               onSubmit={handleSubmit}
               className="space-y-5"
           >
               <div>
                   <label className="font-medium">
                      Username
                   </label>
                   <input
                   onChange={handleChange}
                       type="name"
                       id="username"
                       required
                       className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                   />
               </div>
               <div>
                   <label className="font-medium">
                      Email
                   </label>
                   <input
                   onChange={handleChange}
                       type="email"
                       id="email"
                       required
                       className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                   />
               </div>
               <div>
                   <label className="font-medium">
                       Password
                   </label>
                   <input
                   onChange={handleChange}      
                       type="password"
                       id="password"
                       required
                       className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                   />
               </div>
               <div style={{marginTop: "13px"}} className="flex items-center justify-between text-sm">
                   <div className="flex items-center gap-x-3">
                       <input type="checkbox" id="remember-me-checkbox" className="checkbox-item peer hidden" />
                       <label
                           htmlFor="remember-me-checkbox"
                           className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                       >
                       </label>
                       <span >Remember me</span>
                   </div>
                   <a href="javascript:void(0)" className="text-center text-indigo-600 hover:text-indigo-500">Forgot password?</a>
               </div>
               <button 
                   className="w-full px-4 py-2 text-white font-medium border-1 bg-indigo-600 hover:bg-indigo-500 rounded-lg duration-150"
               >
                  {/* {loading ? "Loading..." : ""} */}
                  Sign Up...
 
               </button>
           </form>
           <OAuth/>
           <p style={{marginTop:"14px"}} className="text-center">
             Have an account?
             <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</a>
            </p>
       </div>
      {error && <p>{error}</p>}
   </main>
</div>
  );
}

export default SignUp;