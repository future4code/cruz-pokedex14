import StyledButton from './styles.js';

const Button = ({ text, color, textColor, onClick }) => {
  return (
    <StyledButton color={color} textColor={textColor} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
