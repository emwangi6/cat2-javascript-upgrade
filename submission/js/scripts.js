const products = [
    {
        name: "Material Cores",
        desc: "They serve as the central spool or core that materials like tape, film, textiles, foil, or heavy paper are wound around.",
        img: "images/product1.jpeg"
    },
    {
        name: "Traces / Trays",
        desc: "Specially designed agricultural storage units used to securely pack fresh fruits for logistics and transport packaging.",
        img: "images/product2.jpeg"
    },
    {
        name: "Corrugated Paper Bunch Wrap Rolls",
        desc: "Used to package, protect, and bundle fresh-cut flowers (especially roses) for long-distance transport and export markets.",
        img: "images/product3.jpeg"
    },
    {
        name: "Custom Export Traces",
        desc: "Reinforced configurations and dimensional alternatives tailored to heavy industrial scale requirements.",
        img: "images/product4.jpeg"
    }
];

const productContainer = document.getElementById("product-container");

products.forEach(function(product) {
    const card = document.createElement("div");
    card.classList.add("service-card");

    card.innerHTML =
        "<h3>" + product.name + "</h3>" +
        "<img src='" + product.img + "' alt='" + product.name + "'>" +
        "<p>" + product.desc + "</p>";

    productContainer.appendChild(card);
});

const input= document.getElementById("product-input");
const button = document.getElementById("add-button");
const list= document.getElementById("product-list");

button.addEventListener("click",function(){
    const newProduct = input.value;
    if(newProduct === ""){
        alert("Kindly Enter a Service");
        return;
    }
    
    const listItem = document.createElement("li");
    listItem.textContent = newProduct;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    listItem.appendChild(removeButton);
    removeButton.addEventListener("click",function(){
        listItem.remove();

    });
    list.appendChild(listItem);

    input.value = "";
});

//Feature 3:Form Handling with validation Feedback