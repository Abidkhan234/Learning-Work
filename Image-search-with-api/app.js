var searchForm = document.getElementById("search-form");

var searchBox = document.getElementById("search-box");

var searchResult = document.getElementById("search-result");

var showMore = document.getElementById("show-more");

var accessKey = "ByyqLS1m2DKIE6K8f50DXZDgfeOwldYGsYd3hsNIU3M";

let keyword = "";

let page = 1;

async function searchImages() {
    keyword = searchBox.value;

    let url = `https://api.unsplash.com/search/photos?${page}&query=${keyword}&client_id=${accessKey}&per_page=6`;

    let response = await fetch(url);

    let data = await response.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }

    let results = data.results;

    results.map((result) => {
        let image = document.createElement("img");
        image.src = result.urls.small;

        let imageLinks = document.createElement("a");
        imageLinks.href = result.links.html;
        imageLinks.target = "_blank";

        imageLinks.appendChild(image);

        searchResult.appendChild(imageLinks);
    })
    showMore.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click",()=>{
    page++;
    searchImages();
});