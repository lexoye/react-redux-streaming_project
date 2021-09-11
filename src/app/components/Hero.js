import styled from 'styled-components';
import Button from './Button';

const StyledHero = styled.section`
  section {
    position: absolute;
  }

  img {
    width: 100%;
  }

  h2 {
    color: ${(props) => props.theme.colors.black};
    font-weight: 400;
    max-width: 20ch;
  }

  .button-container {
    position: absolute;
    bottom: 40%;
    right: 55%;
  }
`

const Hero = () => {
  return (
    <StyledHero>
      <img alt="test" src="https://via.placeholder.com/1440x600/F5F5F1/FAFAFA?text=Show Poster" />

      <div className="button-container">
      <h2>The greatest show you’ll ever see!</h2>
        <div>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
      </div>
    </StyledHero>
  );
}

export default Hero;
