// //For Drop down menu navbar
// let dropdownLi = document.getElementById("dropdown-link");

// let dropdownLi2 = document.getElementById("dropdown-link-2");

// let dropdownMenu = document.getElementById("dropdown-menu");

// let dropdownMenu2 = document.getElementById("dropdown-menu-2");

// let dropdownIcon = document.getElementById("dropdown-icon");

// let dropdownIcon2 = document.getElementById("dropdown-icon-2");

// dropdownLi.addEventListener("mouseenter", () => {
//     dropdownMenu.style.maxHeight = "200px";
//     dropdownIcon.style.transform = "rotate(180deg)";
// })

// dropdownLi2.addEventListener("mouseenter", () => {
//     dropdownMenu2.style.maxHeight = "200px";
//     dropdownIcon2.style.transform = "rotate(180deg)";
// })

// dropdownLi.addEventListener("click", () => {
//     if (dropdownMenu.style.maxHeight === "200px") {
//         dropdownMenu.style.maxHeight = "0px";
//         dropdownIcon.style.transform = "rotate(0deg)";
//     } else {
//         dropdownMenu.style.maxHeight = "200px";
//         dropdownIcon.style.transform = "rotate(180deg)";
//     }
// })

// dropdownLi2.addEventListener("click", () => {
//     if (dropdownMenu2.style.maxHeight === "200px") {
//         dropdownMenu2.style.maxHeight = "0px";
//         dropdownIcon2.style.transform = "rotate(0deg)";
//     } else {
//         dropdownMenu2.style.maxHeight = "200px";
//         dropdownIcon2.style.transform = "rotate(180deg)";
//     }
// })

// dropdownLi.addEventListener("mouseleave", () => {
//     dropdownMenu.style.maxHeight = "0px";
//     dropdownIcon.style.transform = "rotate(0deg)";
// })

// dropdownLi2.addEventListener("mouseleave", () => {
//     dropdownMenu2.style.maxHeight = "0px";
//     dropdownIcon2.style.transform = "rotate(0deg)";
// })

// //For Drop down menu navbar

// // For navbar responsiveness

// let openNavbar = document.getElementById("bar");

// let closeNavbar = document.getElementById("cross");

// let sideBar = document.querySelector(".side-menu");

// openNavbar.addEventListener("click", () => {
//     sideBar.classList.add("open-side-bar");
// })

// closeNavbar.addEventListener("click", () => {
//     sideBar.classList.remove("open-side-bar");
// })


// // For navbar responsiveness

// // For sidebar dropdown
// let sideBarDropDown = document.getElementById("side-dropdown-link");

// let sideBarDropDown2 = document.getElementById("side-dropdown-link-2");

// let sideBarDropDownIcon = document.getElementById("side-dropdown-icon");

// let sideBarDropDownIcon2 = document.getElementById("side-dropdown-icon-2");

// let sideBarDropDownMenu = document.getElementById("side-dropdown-menu");

// let sideBarDropDownMenu2 = document.getElementById("side-dropdown-menu-2");

// sideBarDropDown.addEventListener("mouseenter", () => {
//     sideBarDropDownMenu.style.maxHeight = "200px";
//     sideBarDropDownIcon.style.transform = "rotate(180deg)";
// })

// sideBarDropDown.addEventListener("mouseleave", () => {
//     sideBarDropDownMenu.style.maxHeight = "0px";
//     sideBarDropDownIcon.style.transform = "rotate(0deg)";
// })

// sideBarDropDown.addEventListener("click", () => {
//     if (sideBarDropDownMenu.style.maxHeight === "200px") {
//         sideBarDropDownMenu.style.maxHeight = "0px";
//         sideBarDropDownIcon.style.transform = "rotate(0deg)";
//     } else {
//         sideBarDropDownMenu.style.maxHeight = "200px";
//         sideBarDropDownIcon.style.transform = "rotate(180deg)";
//     }
// })


// sideBarDropDown2.addEventListener("mouseenter", () => {
//     sideBarDropDownMenu2.style.maxHeight = "200px";
//     sideBarDropDownIcon2.style.transform = "rotate(180deg)";
// })

// sideBarDropDown2.addEventListener("mouseleave", () => {
//     sideBarDropDownMenu2.style.maxHeight = "0px";
//     sideBarDropDownIcon2.style.transform = "rotate(0deg)";
// })

// sideBarDropDown2.addEventListener("click", () => {
//     if (sideBarDropDownMenu2.style.maxHeight === "200px") {
//         sideBarDropDownMenu2.style.maxHeight = "0px";
//         sideBarDropDownIcon2.style.transform = "rotate(0deg)";
//     } else {
//         sideBarDropDownMenu2.style.maxHeight = "200px";
//         sideBarDropDownIcon2.style.transform = "rotate(180deg)";
//     }
// })

// // For sidebar dropdown

let cross = document.getElementById("cross");

let bar = document.getElementById("bar");

let sideMenu = document.querySelector(".side-menu");

bar.addEventListener("click", () => {
    sideMenu.classList.add("openSideMenu");
})

cross.addEventListener("click", () => {
    sideMenu.classList.remove("openSideMenu");
})

