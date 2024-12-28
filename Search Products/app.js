const searchBtn = document.getElementById("search-btn");

const products = document.querySelectorAll(".product");

const searchBox = document.getElementById("search-box");

searchBtn.addEventListener("click", () => {

    searchBox.value = searchBox.value.toUpperCase();

    if (searchBox.value === "BAG") {
        products.forEach((value) => {
            if (value.classList.contains("bag")) {
                value.style.display = "flex";
            } else {
                value.style.display = "none";
            }
        })
    } else if (searchBox.value === "JEWELRY") {
        products.forEach((value) => {
            if (value.classList.contains("jew")) {
                value.style.display = "flex";
            } else {
                value.style.display = "none";
            }
        })
    } else if (searchBox.value === "WATCH") {
        products.forEach((value) => {
            if (value.classList.contains("watch")) {
                value.style.display = "flex";
            } else {
                value.style.display = "none";
            }
        })
    } else {
        alert("The item is not available"); 
    }

    searchBox.value = "";
});