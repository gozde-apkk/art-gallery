


export function fetchAllProducts (){
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json()
        resolve({data})
        console.log(data)
    })
}



export function fetchProductById(id) {
    return new Promise(async (resolve) => {
      const response = await fetch(`http://localhost:5000/api/products/${id}`);
      const data = await response.json();
      console.log("id data", data)
      resolve({ data });
    });
  }