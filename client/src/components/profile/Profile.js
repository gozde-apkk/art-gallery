


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
    const handleImageChange = () => {

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
      await dispatch(updateUser(userData));
      
    }
  return (
    <>
      {isLoading && <Loader/>}
       <div className="h-[100vh] text-white w-full ">
        <PageMenu/>
        <h1>Profile</h1>
        <div>
            <Card>
                {!isLoading && (
                    <>
                    <div className="border-2 text-white">
                        <h2>Profile img</h2>
                    </div>
                    <form onSubmit={saveProfile}>
                     <p>
                        <label>Change Photo</label>
                        <input type='file'
                            accept='image/*'
                             name='image'
                             onChange={handleInputChange}
                             disabled/>
                     </p>
                     <p>
                        <label>Name : </label>
                        <input type='text'
                             name='name'
                             value={profile?.name}
                             onChange={handleInputChange}
                             required
                             />
                     </p>
                     <p>
                        <label>Email : </label>
                        <input type='email'
                             name='email'
                             value={profile?.email}
                             onChange={handleInputChange}
                             required
                             />
                     </p>
                     <p>
                        <label>Phone : </label>
                        <input type='text'
                             name='phone'
                             value={profile?.phone}
                             onChange={handleInputChange}
                             required
                             />
                     </p>
                     <p>
                        <label>Address : </label>
                        <input type='text'
                             name='phone'
                             value={profile?.address}
                             onChange={handleInputChange}
                             required
                             />
                     </p>
                     <p>
                        <label>Country : </label>
                        <input type='text'
                             name='country'
                             value={profile?.address?.country}
                             onChange={handleInputChange}
                             required
                             />
                     </p>
                     <button>
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