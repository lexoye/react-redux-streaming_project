import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${(props) => props.theme.colors.lightRed};
  padding: 0.625rem;
  height: 52px;
  width: 190px;
  margin-right: 2.5rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
`

const Button = () => {
  return (
    <StyledButton>
    </StyledButton>
  );
}

export default Button;
