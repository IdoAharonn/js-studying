// פונקציה שמביאה את המוצרים דרך fetch ומציגה אותם
async function fetchProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const products = data.products;
        displayProducts(products);
    } catch (error) {
        console.error("שגיאה בהבאת המוצרים:", error);
    }
}

// פונקציה להצגת המוצרים על המסך
function displayProducts(products) {
    const productListElement = document.getElementById('product-list');
    productListElement.innerHTML = '';  // נמחק את התוכן הקיים (אם יש)

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.imageUrl}" alt="${product.name}" style="width: 100px;">
            <p>מחיר: ${product.price} ש"ח</p>
            <p>${product.description}</p>
        `;
        
        productListElement.appendChild(productElement);
    });
}

// קריאה לפונקציה כאשר הדף נטען
document.addEventListener('DOMContentLoaded', fetchProducts);