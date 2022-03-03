import styles from "./whyWe.module.css"
import styled from "styled-components"

const PeopleNumberIconComp = styled.i`
    color: ${props => props.color ? props.color : "#000"}
`;
const PeopleNumber = (props) => {
    return (
        <div className={styles.counter_text}>
            <div className={styles.people_number}>
                <PeopleNumberIconComp color="#fa6742" className={props.icon} aria-hidden="true"/>
            </div>
            <h6 className={styles.counter_value}>{props.count}</h6>
            <p>{props.text}</p>
        </div>
    );
};


export default PeopleNumber;
