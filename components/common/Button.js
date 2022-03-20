import styled from "styled-components";

const ButtonComp = styled.button`
  width: ${props => props.width ? props.width : "auto"};
  height: ${props => props.height ? props.height : "auto"};
  background: ${props => props.primary ? props.primary : "transparent"};
  color: ${props => props.textColor ? props.textColor : "white"};
  font-size: 1em;
  font-weight: 500;
  margin: ${props => props.margin ? props.margin : "1em"};;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.primary ? props.primary : props.border};
  border-radius: 3px;

  &:hover {
    background: ${props => props.textColor ? props.textColor : "white"};
    color: ${props => props.primary ? props.primary : "#ccc"};
  }
`;

const Button = (props) => {
    return (
        <div>
            <ButtonComp margin={props.margin} width={props.width} height={props.height} primary={props.primary}
                        textColor={props.textColor} border={props.border}>{props.setValue}</ButtonComp>
        </div>
    )
};

export default Button;
