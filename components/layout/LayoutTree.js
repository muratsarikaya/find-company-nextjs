import Head from "next/head";
import HeaderTree from "../header/HeaderTree";
import Footer from "../footer/Footer";
import React, { useRef, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'

const LayoutTree = ({children}) => {
    const ref = useRef(null)
    useEffect(()=>{
        ref.current.complete()
    },[])

    return (
        <>
            <LoadingBar color='#6449e7' ref={ref} />
                <Head>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
                    </style>
                </Head>
                <HeaderTree/>
                <main style={{backgroundColor: "#fff", position: "relative", zIndex: 1}}>
                    {children}
                </main>
        </>
    );
};

export default LayoutTree;
