import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axios from '../../axios';

const ImgUrl = 'https://image.tmdb.org/t/p/original';

function MovieGrid({title, fetchUrl}) {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const StyledMovieGrid = styled.section`

  h2 {
    margin-top: 5rem;
  }

  .movies {
    display: flex;
    flex-wrap: wrap;
  }

  .movies__poster img {
    object-fit: contain;
    max-height: 200px;
    transition: transform 450ms;
    margin: 1rem;
  }

  .movies__poster:hover {
    transform: scale(1.08);
  }
`
  return (
    <StyledMovieGrid>
      <h2>{title}</h2>
      <div className="movies">
        {
          movies.map(movie => (
            <div className="movies__poster">
              <img
                key={movie.id}
                src={`${ImgUrl}/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))
        }
      </div>
    </StyledMovieGrid>
  );
}

export default MovieGrid;
