import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axios from '../../axios';


const StyledRow = styled.section`
  h2 {
    color: ${(props) => props.theme.colors.white};
    font-weight: 400;
    max-width: 20ch;
    margin-top: 5rem;
  }

  .section-row__posters {
    display: flex;
    overflow: scroll;
    height: 240px;
    padding: 1rem;
  }

  .section-row__posters::-webkit-scrollbar {
    display: none;
  }

  .section-row__posters::-moz-scrollbar {
    display: none;
  }

  .section-row__poster {
    margin-right: 1rem;
  }
  .section-row__poster img {
    object-fit: contain;
    max-height: 200px;
    transition: transform 450ms;
  }

  .section-row__poster:hover {
    transform: scale(1.08);
  }
`

const ImgUrl = 'https://image.tmdb.org/t/p/original';

function SectionRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <StyledRow className="section-row">
      <h2>{title}</h2>
      <div className="section-row__posters">
        {
          movies.map(movie => (
            <div className="section-row__poster">
              <img
                key={movie.id}
                src={`${ImgUrl}/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))
        }
      </div>
    </StyledRow>
  );
}

export default SectionRow;
