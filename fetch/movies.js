// let key = `52b92cb2`;


document.querySelector("#search").addEventListener("click",searchmovie);
async function searchmovie(){

    try{
        let movies = document.getElementById("search_movies").value
        let res = await fetch(`http://www.omdbapi.com/?apikey=52b92cb2&s=${movies}`);
    
        let data = await res.json();
        // console.log("data:",data);
        appendmovies(data)
        // return data.Search;
    
    } catch (err){
        console.log("err:",err);
    }
}
// searchmovie();

function appendmovies(data){
    console.log("data:",data);

document.querySelector("#container").innerHTML="";
if(data.Response=='True'){
data.Search.map(function(elem){
  let card = document.createElement("div") ;
  card.setAttribute("class","card");

  let image = document.createElement("img");
  image.setAttribute("src",elem.Poster);
  image.setAttribute("class","pic");

  let title = document.createElement("p");
  title.innerHTML = "MOVIES : "+elem.Title;
  title.setAttribute("class","title");

  let year = document.createElement("p");
  year.innerHTML = "YEAR : " + elem.Year;
  year.setAttribute("class","year"); 

  let rating = document.createElement("p");
    var rate = Math.floor(Math.random()* 11)+1;
    rating.innerHTML = rate;
    rating.setAttribute("class","rating");
    elem.rating = rate;

    var Recommended = document.createElement("p");
    if(rate > 8.5){
        Recommended.innerHTML = "MOSTLY WATCHED MOVIE";
    }else{
        Recommended.innerHTML="";
    }


  card.append(image,title,year,rating,Recommended);
  document.querySelector("#container").append(card);
})
}else{
    let card2 = document.createElement("div");
    card2.setAttribute("class","card2");

    var image = document.createElement("img")
    image.setAttribute("src","https://media.istockphoto.com/photos/error-on-a-blackboard-with-girl-picture-id482761749?k=20&m=482761749&s=612x612&w=0&h=sbDg56JSv2JfCNR0N4Lz1SyuAtSeAcaJHPyF_JBgH-M=");
    image.setAttribute("class","gif");

    card2.append(image);
    document.querySelector("#container").append(card2);
}
}

async function main(){
    let data = await searchmovie();
  
     if(data === undefined){
         return false;
     }
  // console.log("data:",data)
    // appendData(data);
    appendmovies(data);
  
  }
  let movies_div = document.getElementById("movies")
function appendData(movies){

    movies_div.textContent = null;

    movies.map(function(elem){
    let p = document.createElement("p")
    p.textContent = elem.Title;

    movies_div.append(p);
    })
}
// debounce
let timerId;
function debounce(func,delay){

    if(timerId){
        clearTimeout(timerId)   
     }

  timerId = setTimeout(function(){
        func()
    },delay);

}


