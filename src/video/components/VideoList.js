import React from 'react';

import './VideoList.css';

function videoList({ movies, handleClick }) {
    return (
        <div className="videoList">
            {movies.map((elem, index) => (
                <div key={`movie-${index}`}>
                    <h3>
                        <a href="#" onClick={(event) => handleClick(event, elem)}>
                            {elem.title}
                        </a>
                    </h3>
                    <p>{elem.description}</p>
                </div>
            ))}
        </div>)
}

export default videoList;