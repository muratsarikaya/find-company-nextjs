import Head from "next/head";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import React, { useRef, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'


const Layout = ({children}) => {
    const ref = useRef(null)
    useEffect(()=>{
        ref.current.complete()
    },[])

    return (
        <>
            <LoadingBar color='#6449e7' ref={ref} />
                <Head>
                    <style
                        data-href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap">
                    </style>
                </Head>
                <Header/>
                <main style={{backgroundColor: "#fff", position: "relative", zIndex: 1}}>
                    {children}
                </main>
                <Footer/>

        </>
    );
};

export default Layout;
