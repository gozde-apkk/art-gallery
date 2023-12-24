

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";






 const registerUser = async (userData) => {
  const response = await axios.post(`http://localhost:5000/api/users`, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
} 
  export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        // configure header's Content-Type as JSON
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        const { data } = await axios.post(
          `http://localhost:5000/api/users/login`,
          { email, password },
          config
        )
        // store user's token in local storage
        localStorage.setItem('userToken', data.userToken)
        return data
      } catch (error) {
        // return custom error message from API if any
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )


  const authService = {
    registerUser
  }

  export default authService
  