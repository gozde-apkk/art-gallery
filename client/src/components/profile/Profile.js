


import React, { useEffect, useState } from 'react'
import PageMenu from '../pageMenu/PageMenu'
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { getUser, updateUser } from '../../redux/features/auth/authSlice';
import { useDisclosure } from '@nextui-org/react';
import Loader from '../../pages/auth/Loader';

const Profile = () => {
    const {isLoading, user} = useSelector((state) => state.auth)
    const initialState = {
        name : user?.name || "",
        email: user?.email || "",
        phone : user?.phone || "",
        role : user?.role || "",
        address : user?.address || {},
    }

    const [profile, setProfile] = useState(initialState);
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const dispatch = useDispatch();
 const handleInputChange = (e) => {
    const { name , value} = e.target;
    setProfile({ ...profile, [name] : value})
 }

    useEffect(() => {
       if(user === null){
        dispatch(getUser())
       }
    }, [dispatch])


    useEffect(() => {
        if(user === null){
         setProfile({
            name : user?.name || "",
            email: user?.email || "",
            phone : user?.phone || "",
            role : user?.role || "",
            address : user?.address || {},
         })
        }
     }, [dispatch])
    const handleImageChange = (e) => {
        setProfileImage(e.target.files[0]);
         setImagePreview(URL.createObjectURL(e.target.files[0]))
    }
    const saveProfile =  async (e) => {
      e.preventDefault()

      const userData = {
        name : profile.name,
        email : profile.email,
        address : {
            address : profile.address,
            state : profile.state,
            country : profile.country
        }
      }
      console.log(userData)
      dispatch(updateUser(userData));
      
    }
  return (
    <>
      {isLoading && <Loader/>}
       <div className=" text-white w-full ">
        <PageMenu/>
        <h1 className='text-2xl mt-7 ml-8' >Profile</h1>
        <div className='ml-[30px] mt-5 w-[28rem]  border-2'>
            <Card>
                {!isLoading && (
                    <>
                    <div className="border-2 h-16  text-white">
                        <div>
                           <img src={imagePreview === null ? user?.photo : imagePreview} alt='profile'/>
                           <h3>Role : {profile.role}</h3>
                        </div>
                    </div>
                    <form  className="flex flex-col mx-6"  onSubmit={saveProfile}>
                     <p  className='grid h-24 w-[24rem] '>
                        <label>Change Photo</label>
                        <input className='w-full' type='file'
                            accept='image/*'
                             name='image'
                             onChange={handleInputChange}
                             disabled/>
                     </p>
                     <p className='grid h-24  w-[24rem] '>
                        <label>Name : </label>
                        <input  className='w-full' type='text'
                             name='name'
                             value={profile?.name}
                             onChange={handleInputChange}
                             required
                             />
                     </p>
                     <p className='grid h-24  w-[24rem] '>
                        <label>Email : </label>
                        <input  className='w-full' type='email'
                             name='email'
                             value={profile?.email}
                             onChange={handleInputChange}
                             required
                             />
                     </p>
                     <p className='grid h-24  w-[24rem] '>
                        <label>Phone : </label>
                        <input  className='w-full' type='text'
                             name='phone'
                             value={profile?.phone}
                             onChange={handleInputChange}
                          
                             />
                     </p>
                     <p className='grid h-24   w-[24rem] '>
                        <label>Address : </label>
                        <input  className='w-full' type='text'
                             name='phone'
                             value={profile?.address}
                             onChange={handleInputChange}
                     
                             />
                     </p>
                     <p className='grid h-24    w-[24rem] '>
                        <label>Country : </label>
                        <input  className='w-full' type='text'
                             name='country'
                             value={profile?.address?.country}
                             onChange={handleInputChange}
                             required
                             />
                     </p>
                     <button  className='mt-2 justify-center flex h-12'>
                        Update Profile
                     </button>
                    </form>
                    </>
                ) }
            </Card>
        </div>
       </div>
       
    </>
  )
}

export default Profile