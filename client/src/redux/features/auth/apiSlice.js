// A mock function to mimic making an async request for data




import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: '/' });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
}); 
// export async function createUser() {
//   return new Promise((resolve) => {
//     const response = fetch("http://localhost:3000/users", {
//       method: "POST",
//       body: JSON.stringify({}),
//       headers: {
//         'content-type': 'application/json'
//       }
//     })

//     const data = response.json()
//     resolve({
//       data
//     })
//   })
// }



// export async function checkUser(loginInfo) {
//   return new Promise(async (resolve, reject) => {
//     const email = loginInfo.email;
//     const password = loginInfo.password;
//     const response = await fetch("http://localhost:5000/api/users/login")
//     const data = await response.json();
//     console.log(data)
//     if (data.length) {
//       if (password === data[0].password) {
//         resolve({
//           data: data[0]
//         })
//       } else {
//         reject({
//           message: 'Wrong Credentials'
//         })
//       }
//     } else {
//       reject({
//         message: "User not Found     "
//       })
//     }
//   })
// }



