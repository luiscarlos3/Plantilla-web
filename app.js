let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
searchBox.addEventListener("click", () => {
    let v = navbar.classList.toggle("showInput");
    console.log(searchBox);
    console.log(v);
});