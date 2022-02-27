import styled from "styled-components";

const IconComp = styled.i`
  color: ${props => props.color ? props.color : 'white'};
  font-size: ${props => props.size ? props.size: '20'}px;
`;
const Icon = (props) => {
    return (
        <div>
            <IconComp color={props.color} className={props.classStyle} size={props.size}/>
        </div>
    )
};

export default Icon;
