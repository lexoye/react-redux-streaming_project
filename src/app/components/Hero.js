import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import axios from '../../axios';
import requests from '../../request';

function Hero() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  const StyledHero = styled.section`

    .hero {
      background-size: cover;
      background-image: url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}");
      background-position: 'center center';
      object-fit: contain;
      height: 448px;
      display: flex;
    }

    .hero__content {
      align-self: flex-end;
      margin: 0 2.5rem 2rem;
      max-height: 300px;
    }

    .hero__title {
      font-size: 3rem;
      font-weight: 800;
      line-height: 3.5rem;
      padding-bottom: 1rem;
    }

    .hero__description {
      max-width: 600px;
      margin-bottom: 1.5rem;
    }

    .hero__button-container {

    }

    .hero__button {
      padding: 0.5rem 3rem;
      margin-right: 1rem;
    }
  `
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }
  return (
    <StyledHero>
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="hero__description">{truncate(movie?.overview, 150)}</div>
          <div className="hero__button-container">
            <Button className="hero__button">Play</Button>
            <Button className="hero__button">My List</Button>
          </div>
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
