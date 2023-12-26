import axios from "axios";
import { FaFontAwesomeFlag } from "react-icons/fa";

const BASE_URL = "http://localhost:4000/api/users";

const LOGIN_URL = `${BASE_URL}/register`;

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


const login = async (users) => {
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

const authService = { register };

export default authService;
