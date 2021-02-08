const DOMAIN_URL = "https://fwemoviedb.herokuapp.com/3/movie/";
const KEY = "e800e93ef4806616964242bbd2619ae1";
const API = "?api_key=";

window.onload = ()=> {
    var id = window.location.href.split("id=")[1];
    movieDetails(id);
}

const movieDetails = async(id)=> {
    let movieId = await (await fetch(`${DOMAIN_URL}${id}${API}${KEY}`)).json();
    
    const {
        title,
    overview,
    tagline,
    release_date,
    runtime,
    revenue,
    budget,
    adult,
    status,
    vote_count,
    vote_average,
    popularity,
    poster_path
    } = movieId;

    let imgUrl = "https://fwemoviedb.herokuapp.com/img/w500";
    var myHTML;
    // var prviewWarpper = document.getElementById("prviewWarpper");


    myHTML = `
    <div class="goToHome">
            <a href="Index.html" class="btn btn-danger goToBtn">Go To Home</a>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="prevImageLayout">
                        <img src="${imgUrl}${poster_path}" class="img-fluid prevImg">
                        <p class="prevImgLive">In Cinemas</p>
                    </div>
                </div>
    
                <div class="col-md-4">
                    <div class="prevDetail">
                        <h3>${title}</h3>
                        <div class="ratingLayout">
                            <div class="rating">
                                <p class="voteCount"> Vote Count : ${vote_count}</p>
                                <p class="voteRate"> Vote Rate : ${vote_average}</p>
                                
                            </div> 
                            <div class="rateNow">
                                <p class="voteNow">RATE NOW</p>
                            </div>
                        </div>
                        
                        
    
                        <p class="prevOtherDetail">Release Date : ${release_date}</p>
                        <p class="prevOtherDetail">Run Time : ${runtime}</p>
                        <p class="prevOtherDetail">Revenue : ${revenue}</p>
                        <p class="prevOtherDetail">Budget : ${budget}</p>
                        <p class="prevOtherDetail">Adult : ${adult}</p>
                        <p class="prevOtherDetail">Status : ${status}</p>
                        
                        <button class="btn bookNow btn-danger">Buy Now</button>
                    </div>
                    
                </div>
    
                <div class="col-md-4">
                    <div class="prevOverview">
                        <h4>Overview</h4>
                        <p class="overview">
                            ${overview}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        `

    console.log(movieId);
    document.getElementById("prviewWarpper").innerHTML = myHTML;
};

