
// Define an array of objects containing product details
const products = [
    {
        name: "Chicken Masala",
        description: "Creamy Chicken",
        price: "$14.99",
        image: "../assets/menu/menu_dish_5.png"
    },
    {
        name: "Margherita Pizza",
        description: "Classic Italian Pizza",
        price: "$12.50",
        image: "../assets/menu/menu_dish_2.png"
    },
    {
        name: "Sushi Platter",
        description: "Fresh Assorted Sushi",
        price: "$24.99",
        image: "../assets/menu/menu_dish_3.png"
    },
    {
        name: "Beef Burger",
        description: "Juicy Cheeseburger",
        price: "$10.99",
        image: "../assets/menu/menu_dish_4.png"
    },
    {
        name: "Margherita Pizza",
        description: "Classic Italian Pizza",
        price: "$12.50",
        image: "../assets/menu/menu_dish_5.png"
    },
    {
        name: "Pasta Carbonara",
        description: "Creamy Bacon Pasta",
        price: "$15.99",
        image: "../assets/menu/menu_dish_4.png"
    },
    {
        name: "Shrimp Tacos",
        description: "Grilled Shrimp Tacos",
        price: "$18.50",
        image: "../assets/menu/menu_dish_3.png"
    },
    {
        name: "Vegetable Stir Fry",
        description: "Savory Veg Stir-Fry",
        price: "$11.99",
        image: "../assets/menu/menu_dish_2.png"
    },
    {
        name: "Mango Chicken",
        description: "Tangy Mango Chicken",
        price: "$16.99",
        image: "../assets/menu/menu_dish_1.png"
    },
    {
        name: "Cheese Platter",
        description: "Artisan Cheese Board",
        price: "$22.99",
        image: "../assets/menu/menu_dish_5.png"
    },
    {
        name: "Margherita Pizza",
        description: "Classic Italian Pizza",
        price: "$12.50",
        image: "../assets/menu/menu_dish_2.png"
    },
    {
        name: "Chocolate Fondue",
        description: "Rich Chocolate Dip",
        price: "$9.99",
        image: "../assets/menu/menu_dish_1.png"
    }
];


// Select the container where product cards will be appended
const productContainer = document.getElementById("menuItems");

// Dynamically create product cards using map
products.map(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("col-md-4", "col-sm-6", "col-lg-6", "col-xl-3", "mb-4");

    productCard.innerHTML = `
        <div class="item-cards text-center shadow p-3 bg-body rounded">
            <img src="${product.image}" class="img-fluid" alt="${product.name}">
            <div class="d-flex flex-column">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <p>${product.price}</p>
                <div class="d-flex justify-content-evenly">
                    <span class="material-symbols-outlined">shopping_cart</span>
                    <span class="material-symbols-outlined">favorite</span>
                </div>
            </div>
        </div>
    `;
    productContainer.appendChild(productCard);
});
