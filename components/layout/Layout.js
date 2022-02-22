import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <main style={{backgroundColor:"#fff", position:"relative",zIndex:1}}>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
