import React from 'react';


const Logo = (props) => {
    return (
        <div>
            <img src={props.src.src} style={{maxWidth:"150px"}}/>
        </div>
    );
};

export default Logo;

