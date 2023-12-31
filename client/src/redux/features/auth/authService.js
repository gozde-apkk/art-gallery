import axios from "axios";


const BASE_URL = "http://localhost:5000/api/users/";


//Register User

const register = async (users) => {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
      withCredentials: true,
    });
    const data = await res.json();
    if (data.success === false) {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

//Login User
const login = async (users) => {
    try {
      const res = await axios(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(users),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };


//Logout User
const logout = async (users) => {
  try {
    const res = await fetch(`${BASE_URL}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
      withCredentials: true,
    });
    const data = await res.json();
    return res.data.message;
  } catch (error) {
    console.log(error);
  }
};
//Get users
const getUser = async () => {
  const res = await axios.get(`${BASE_URL}/getUser`);
  return res.data;
}
//Update User
const updateUser = async (userData) => {
  const res = await axios.patch(`${BASE_URL}/updateUser`, userData);
  return res.data;
}

//Update Photo
const updatePhoto = async (userData) => {
  const res = await axios.patch(`${BASE_URL}/updatePhoto`, userData);
  return res.data;
}
//Get Login Status
const getLoginStatus = async (users) => {
  try {
    const res = await fetch(`${BASE_URL}/getLoginStatus`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
      withCredentials: true,
    });
    const data = await res.json();
    return  data;
  } catch (error) {
    console.log(error);
  }
};
const authService = { register, login, logout ,getLoginStatus, getUser, updatePhoto,updateUser};

export default authService;
