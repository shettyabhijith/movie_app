const DOMAIN_URL = "https://fwemoviedb.herokuapp.com/3/movie/popular?api_key=";
const KEY = "e800e93ef4806616964242bbd2619ae1";
const API = "?api_key=";
const PAGE_NO = "&page=";

window.onload = function () {
    let keyword = window.location.href.split("keyword=")[1].split("&")[0];

    let pageNo = window.location.href.split("&pageNo=")[1];

    fetchPopularMovies(keyword, pageNo);
};


var page = 1; // hard coded
const fetchPopularMovies = async (keyword, pageNo) => {
    let response = await fetch(`${DOMAIN_URL}${KEY}${PAGE_NO}${page? page : 1}`); //how to 
    let data = await (response).json();

    let recivedData = data["results"].filter((x) =>
    x.title.replace(/\s/g, "").toLowerCase().includes(keyword.toLowerCase())
  );

  var resultWrapper = document.getElementById("resultWarpper");
  var myHTML = "";
  let imgUrl = "https://fwemoviedb.herokuapp.com/img/w500";

    if(recivedData.length === 0){
        myHTML = `<div class='w-100'> <p class='text-center'>No results Found</p></div>`;
    }
    else {
        
        for(let i=0; i<recivedData.length; i++){
            const {overview, poster_path, release_date, title, id} = recivedData[i];

            myHTML+=`<div class="col-md-3"><div class="result1"><img src="${imgUrl}${poster_path}" class="img-fluid"><h2>${title}</h2><p class="result_p1">${overview}</p><button class="btn btn-danger" onclick="previewMovieDetail(${id})" type="submit">Know More</button></div></div>`;
      
        }
        myHTML = `<div class="result_layout"><div class="row">${myHTML}</div></div>`;

    }

    resultWrapper.innerHTML = myHTML;

}

function previewMovieDetail(id) {
    window.location = "preview.html?id="+id;
}