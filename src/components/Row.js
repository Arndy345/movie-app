import React from "react";
import "./Row.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";



function Row({ movies, setFavor, handleClick, trailerUrl}) {

  
 

  return (
    <div className="container-fluid movie-app">
    <div className="row" >
    {movies.map((movie, index) => (
      <div className="row-images justify-content-start d-flex ">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="row-image"
            
            
          />
          <div className="overlay"></div>
        
        <div className="overlay align-items-center " >
          <PlayCircleFilledIcon className="body__shuffle" onClick={() => handleClick(movie)} fontSize="medium" className="play"/>
          <FavoriteIcon fontSize="medium" onClick={()=>setFavor(movie)} className="white"/>
        </div>
        </div>
        ))}
    </div>
        
      
    </div>
  );
}
export default Row;
