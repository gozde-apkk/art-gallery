import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import OAuth from '../components/oauth/OAuth';

const SignUp = () =>  {


    const navigate = useNavigate();
    const [formData , setFormData] = useState({});
    const [error , setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        setFormData({
            ...formData,
           [ e.target.id] : e.target.value,
        })
    }
    console.log(formData);

    const  handleSubmit = async (e) => {

        try{
            e.preventDefault();
            setLoading(true);
            const res = await fetch('http://localhost:4000/api/auth/signup', {
                method : "POST",
                headers : {
                        "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if(data.success === false){
                setError(data.message);
                setLoading(false);
                return;
            }
            setLoading(true);
            setError(null);
            navigate("/");
        }catch(error){
            setLoading(true);
            setError(error.message);
        }
    }


  return (
    <div className='h-full  flex justify-center text-white'> 
    <main style={{height: "500px", width:"350px"}} className=" flex flex-col items-center justify-center px-4">
       <div className="max-w-sm w-full text-gray-600 space-y-5">
           <div style={{margin:"16px"}} className="text-center flex h-[87px] justify-center items-center  pb-8">
             
               <div className="mt-5 w-[151px] ">
                   <h3 style={{fontSize: "xx-large"}} className="text-gray-800  h-[56px] font-bold sm:text-3xl">Sign up</h3>
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
               <button disabled={loading}
                   className="w-full px-4 py-2 text-white font-medium border-1 bg-indigo-600 hover:bg-indigo-500 rounded-lg duration-150"
               >
                  {loading ? "Loading..." : "Sign Up..."}
               </button>
           </form>
           <OAuth/>
           <p style={{marginTop:"14px"}} className="text-center">
             Have an account?
             <a href="/sign-in" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</a>
            </p>
       </div>
      {error && <p>{error}</p>}
   </main>
</div>
  );
}

export default SignUp;