// app.js

document.getElementById("searchButton").addEventListener("click", searchProduct);

function searchProduct() {
    const productSearch = document.getElementById("productSearch").value;
    const errorMessage = document.getElementById("errorMessage");
    const productResults = document.getElementById("productResults");
    const productList = document.getElementById("productList");

    // Clear previous results and error messages
    productResults.classList.add("hidden");
    productList.innerHTML = "";
    errorMessage.classList.add("hidden");

    // Validate input
    if (!productSearch.trim()) {
        errorMessage.textContent = "Please enter a valid product name.";
        errorMessage.classList.remove("hidden");
        return;
    }

    // Simulate API call with setTimeout
    simulateApiCall(productSearch)
        .then((products) => {
            if (products.length === 0) {
                errorMessage.textContent = "No sustainable products found. Try searching for something else.";
                errorMessage.classList.remove("hidden");
            } else {
                displayProducts(products);
            }
        })
        .catch((error) => {
            errorMessage.textContent = `An error occurred: ${error.message}`;
            errorMessage.classList.remove("hidden");
        });
}

function simulateApiCall(query) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) { // Simulate a 20% chance of failure
                reject(new Error("Failed to retrieve data from the server."));
            } else {
                const mockData = [
                    {
                        name: "Eco-friendly Water Bottle",
                        brand: "Green Bottle Co.",
                        sustainabilityRating: "A",
                        imageUrl: "https://via.placeholder.com/200x200.png?text=Eco-Bottle",
                        price: "$25.00",
                    },
                    {
                        name: "Bamboo Toothbrush",
                        brand: "Bamboo Care",
                        sustainabilityRating: "A+",
                        imageUrl: "https://via.placeholder.com/200x200.png?text=Bamboo+Toothbrush",
                        price: "$5.00",
                    },
                ];

                resolve(mockData);
            }
        }, 1500);
    });
}

function displayProducts(products) {
    const productResults = document.getElementById("productResults");
    const productList = document.getElementById("productList");

    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Brand: ${product.brand}</p>
            <p>Rating: ${product.sustainabilityRating}</p>
            <p>Price: ${product.price}</p>
        `;

        productList.appendChild(productDiv);
    });

    productResults.classList.remove("hidden");
}

