import axios from "axios";



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
    resolve({ data });
  });
}



  export function fetchProductsByFilters(filter) {
  //  let queryString= '';
  //  for(let key in filter){
  //   queryString = `${key}=${filter[key]}&`;
  //  }
    return new Promise(async (resolve) => {
      const response = await fetch(
        `http://localhost:5000/api/products/${filter}` 
      );
      const data = await response.json();
      resolve({ data });
    })};


    export function fetchCategories() {
      return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:5000/categories');
        const data = await response.json();
        console.log(data);
        resolve({ data });
      });
    }


    export function createProduct(product) {
      return new Promise(async (resolve) => {
        const response = await fetch('/products/', {
          method: 'POST',
          body: JSON.stringify(product),
          headers: { 'content-type': 'application/json' },
        });
        const data = await response.json();
        resolve({ data });
      });
    }