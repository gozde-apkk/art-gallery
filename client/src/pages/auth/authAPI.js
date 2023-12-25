


export function createUser(userData)  {
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:5000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify(userData)
        })
        const data = await response.json();
        resolve({data});
        })
}

export function checkUser(loginInfo)  {
    return new Promise(async (resolve, reject) => {
        const email = loginInfo.email;
        const password = loginInfo.password;
        const response = await fetch("http://localhost:5000/api/users/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify(loginInfo)
        })
        const data = await response.json();
        console.log(data);
        if(data.length) {
           if(password === data[0].password){
            resolve({data : data[0]});
           }
        }else{
            reject({message : "wrong email or password"});
        }
        })
}
