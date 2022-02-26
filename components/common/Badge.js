import React from 'react';
import styled from "styled-components/dist/styled-components.min";

const BadgeComp = styled.span`
    color: #fff;
    display: inline-block;
    padding: 3px 6px;
    text-align: center;
    font-weight: 500;
    line-height: 1.3;
    z-index: 998;
    cursor: default;
    border-radius: 2px;
    margin: 0 3px;
    background-color: ${props => props.bgColor ? props.bgColor : "#6449e7"}
`;
const Badge = (props) => {
    return (
        <>
            <BadgeComp bgColor={props.bgColor}>{props.setValue}</BadgeComp>
        </>
    );
};


export default Badge;
