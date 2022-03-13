import styled from "styled-components";
import styles from "../forms/form.module.css";

const Input = (props) => (
    <label className="w-100 mb-4">
        <span>{props.title}</span>
        <input className={styles.input__comp} type={props.type} placeholder={props.placeholder} autoComplete="false"/>
    </label>
)

export default Input;
