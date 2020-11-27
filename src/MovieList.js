import React from 'react';
import "./components/Row.css";

function MovieList({child}) {
    return (
        <div className="movie-list">
            {child}
        </div>
    )
}

export default MovieList
