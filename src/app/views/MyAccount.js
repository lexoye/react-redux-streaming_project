import styled, { css } from 'styled-components';

import Button from '../components/Button';


const MyAccountStyles = styled.section`

  h2 {
    color: ${(props) => props.theme.colors.white};
    font-weight: 400;
    max-width: 20ch;
  }

  .MyAccount {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }

  .MyAccount-form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .MyAccount-pic {
    margin: 1rem;
  }

  .MyAccount-pic img {
    border-radius: 50%;
  }

  .MyAccount-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

function MyAccount() {
  return (
    <MyAccountStyles>
      <section className="MyAccount">
        <h2>My Account</h2>
        <div className="MyAccount-form">
          <div className="MyAccount-pic">
            <img alt="Profile" src="https://via.placeholder.com/106x106" />
          </div>
          <div className="MyAccount-data">
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <Button>Save</Button>
          </div>
        </div>
      </section>
    </MyAccountStyles>
  );
}

export default MyAccount;
