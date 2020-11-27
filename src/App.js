import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "./components/Row";
import Search from "./components/Search";
import MovieList from "./MovieList";
import Favorites from "./components/Favorites";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function App() {
  const [movies, setMovies]= useState([])
  const [search, setSearch] = useState("")
  const [favorite, setFavorites] = useState([])
  const [trailerUrl, setTrailerUrl] = useState(false);



  const getMovies  = async(search)=>{
    const url = `http://www.omdbapi.com/?s=${search}&apikey=263d22d8`;
    const response = await fetch(url);
    const responseJson = await response.json()
if(responseJson.Search){
  setMovies(responseJson.Search)
  console.log(movies)
}
  

    
  }
  useEffect(()=>{
    getMovies(search)
  }, [search])

  useEffect(()=>{
    const favMovies = JSON.parse(localStorage.getItem("favorite-movies"));
    setFavorites(favMovies)
  },[])

const saveToLocalStorage = (items)=>{
  localStorage.setItem("favorite-movies", JSON.stringify(items))
}


const setFavor=(movie)=>{
  const newFavor = [...favorite, movie]
  setFavorites(newFavor)
  saveToLocalStorage(newFavor)
  console.log(movie.Title)
}


const removeFavor =(movie)=>{
  const newList = favorite.filter((movies)=>movies.imdbID !==movie.imdbID
  );
  setFavorites(newList)
  saveToLocalStorage(newList)

}
const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

const handleClick = (movie) => {

  if (trailerUrl) {
    setTrailerUrl(false);
  } else {
    //PRECODED FUNCTION
    movieTrailer(movie?.Title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log(`The trailer ${urlParams}`);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(`The error is ${error}`));
  }

  // if(trailerUrl){
  //   trailerUrl.map(trailer=>(trailer == movie.Title)=>{

  //   })
  // }
  
};

  return (
    <div className="container-fluid App">
     <h2>Search and save your favorite movies</h2>
      <div className="row d-flex align-items-center mt-4 mb-5 justify-content-center ">
     
        <Search search={search} setSearch={setSearch}/> 
      </div>
      {search? <MovieList child="Movies"/> : <div></div>}
      <div className="justify-content-center mb-5">
      <Row movies={movies} setFavorites={setFavorites} favorite={favorite} setFavor={setFavor} handleClick={handleClick} trailerUrl={trailerUrl}/>
      {favorite? <MovieList child="Favorite Movies"/> : <div></div>}
      <Favorites favorite={favorite} handleClick={handleClick} removeFavor={removeFavor} setFavorites={setFavorites} trailerUrl={trailerUrl}/>
      </div>
      <div className="youtube__video">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
      
    </div>
  )
}

export default App

