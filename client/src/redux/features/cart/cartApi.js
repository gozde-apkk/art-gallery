export function addToCart(item) {
    return new Promise(async (resolve) => {
      const response = await fetch('http://localhost:5000/cart', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      resolve({ data });
    });
  }