



const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const app = express();


app.use(express.json());
app.use(cors());
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));

app.get('/' , (req ,res) =>{
    res.send(`
    {
        <h1>Hello</h1>
    }`)
});


// async function getData(userId){
//     const data = await (
//       await  fetch("https://jsonplaceholder.typicode.com/posts")).json();
//     console.log(data);
//   }

//  getData();

 {()=>{
    console.log("hello");
 }};


 



/**
 * Kullanıcının verilerini ve gönderdiği postları çeken asenkron fonksiyon.
 * @param {Number} userId - Kullanıcının ID'si.
 * @returns {Promise<Object>} - Kullanıcı verileri ve postları içeren bir obje.
 */
async function getUserData(userId) {
  try {
    // Kullanıcı verilerini çekme
    const userDataResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = userDataResponse.data;

    // Kullanıcının postlarını çekme
    const userPostsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const userPosts = userPostsResponse.data;

    // Kullanıcı verileri ve postları içeren bir obje döndürme
    return {
      userData,
      userPosts,
    };
  } catch (error) {
    // Hata durumunda hata nesnesini fırlatma
    throw new Error(`Hata oluştu: ${error.message}`);
  }
}

// Fonksiyonu dışa aktarma


app.listen(5000, function(){
    console.log("Listening on port");
    
})