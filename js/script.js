const DOMAIN_URL = "https://fwemoviedb.herokuapp.com/3/movie/popular?api_key=";
const KEY = "e800e93ef4806616964242bbd2619ae1"; 
const PAGE_NO = "&page="; 



var search_id = document.getElementById("movieName").value;

window.onload = function (){
    // document.getElementById("search").value = "";

    fetchPopularMovies(0);
}

const pagination = (value, label)=> {
    if(label === "prev"){
        fetchPopularMovies(value);
    }
    if(label === "next"){
        fetchPopularMovies(value);
    }
}

const fetchPopularMovies = async (page)=>{
  const data = await (await fetch(`${DOMAIN_URL}${KEY}${PAGE_NO}${page? page : 1}`)).json();
    let recivedData = data['results'];
   
    var myHTML = "";
    let imgUrl = "https://fwemoviedb.herokuapp.com/img/w500";
    var dots = "...";
    for (var i=0; i<recivedData.length; i++){
        const {poster_path, title, overview, id} = recivedData[i];

        myHTML += `  <div class="col-md-3">
                        <div class="card mb" onclick="redirect(${id})">
                        <img class="card-img-top" src="${imgUrl}${poster_path}" alt="Card image cap">
                        <div class="card-body mb">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${overview.slice(0, 50)+dots}</p>
                            <button type="button" class="btn btn-danger mb">Read More</button>
                        </div>
                        </div>
                    </div>`
                   
    }
    console.log(myHTML);    
    document.getElementById("allMovie").innerHTML = myHTML;
}

const redirect = (id) => {
    window.location =`preview.html?id=${id}`;
};

const searchMovie = () => {
    search_id = document.getElementById("movieName").value;
    if(!(search_id)){
        alert("Please enter a movie name");
    }

    else {
        window.location = `result.html?keyword=${search_id.replace(/\s/g, "")}&pageNo=${count}`;
    } 
}


