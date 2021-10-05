import styled from 'styled-components';
import { Button, Input } from 'semantic-ui-react';

const MyAccountStyles = styled.section`

  h2 {
    color: ${(props) => props.theme.colors.white};
    font-weight: 400;
    max-width: 20ch;
  }

  .my_account {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }

  .my_account__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .my_account__pic {
    margin: 1rem;
  }

  .my_account__pic img {
    border-radius: 50%;
  }

  .my_account__data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .my_account__data > .ui.input {
    width: 400px;
    justify-content: center;
  }
  .my_account__data > .ui.button {
    margin-top: 2rem;
  }
`

function MyAccount() {
  return (
    <MyAccountStyles>
      <section className="my_account">
        <h2>My Account</h2>
        <div className="my_account__form">
          <div className="my_account__pic">
            <img alt="Profile" src="https://via.placeholder.com/106x106" />
          </div>
          <div className="my_account__data">
            <Input />
            <Input />
            <Input />
            <Input />
            <Button>Save</Button>
          </div>
        </div>
      </section>
    </MyAccountStyles>
  );
}

export default MyAccount;
