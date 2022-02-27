import React from 'react';
import styled from "styled-components";
import img from "../../public/images/header/header_11.jpg"

const HeaderParallax = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-color: #ddd;
  height: 750px;
  position: relative;
`;

const MainSlider = (props) => {
    return (
       <>
           <HeaderParallax src={img.src}/>
       </>
    );
};

export default MainSlider;
