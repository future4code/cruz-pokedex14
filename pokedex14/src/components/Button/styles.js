import styled from 'styled-components';

const COLORS = {
  green: '#70B85D',
  black: '#656565',
  red: '#e34327',
  white: '#EEE'
};

const StyledButton = styled.button`
  outline: none;
  border: none;

  background-color: ${(props) => COLORS[props.color]};
  color: ${(props) => COLORS[props.textColor]};

  font-size: 1rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  padding: 6px 14px;
  opacity: 0.9;

  &:hover {
    opacity: 1;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }

  &:active {
    box-shadow: inset 0px 0px 2px black;
  }
`;

export default StyledButton;
