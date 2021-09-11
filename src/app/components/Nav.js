import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0.75rem;

  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-right: 3.75rem;
  }

  .nav-logo {
    margin-right: 3.75rem;

    img {
      border-radius: 50%;
    }
  }
`

const Nav = () => {
  return (
    <StyledNav>
      <div className="nav-logo"><img alt="Logo" src="https://via.placeholder.com/57" /></div>
      <ul>
        <li><Link to='/my-account'>My Account</Link></li>
        <li><Link to='/my-list'>My List</Link></li>
        <li><Link to='/new-releases'>New Releases</Link></li>
        <li><Link to='/top-shows'>Top Shows</Link></li>
      </ul>
    </StyledNav>
  );
}

export default Nav;
