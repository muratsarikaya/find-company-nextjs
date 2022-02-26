import styled from "styled-components/dist/styled-components.min";

const ButtonComp = styled.button`
  background: ${props => props.primary ? props.primary : "transparent"};
  color: ${props => props.textColor ? props.textColor : "white"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.primary ? props.primary : "white"};
  border-radius: 3px;
  &:hover{
  background: ${props => props.textColor ? props.textColor : "white"};
  color: ${props => props.primary ? props.primary : "transparent"};
  }
`;

const Button = (props) => {
    return(
        <div>
            <ButtonComp primary={props.primary} textColor={props.textColor}>{props.setValue}</ButtonComp>
        </div>
    )
};

export default Button;
