
import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./Row.css";




function Favorites({ favorite, removeFavor, handleClick,trailerUrl}) {

    

  return (
    <div className="container-fluid movie-app">
      {favorite? <div className="row" >
      {favorite.map((movie, index) => (
        <div className="row-imagess justify-content-start d-flex ">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="fav-image"
              
              
            />
        
          <div className="overlay align-items-center" >
          <PlayCircleFilledIcon className="body__shuffle" onClick={() => handleClick(movie)} fontSize="medium" className="play"/>
          <FavoriteIcon onClick={()=>removeFavor(movie)} className="red" fontSize="medium"/>
          <a href={`https://www.thenetnaija.com/search?t=${movie.Title}+`} className="btn link" target="__blank" >Download</a>
          </div>
        </div>
        ))}
      </div>: <div></div>}
        
      
    </div>
  );
}
export default Favorites;
