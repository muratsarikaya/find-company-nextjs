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
                </Head>
                <HeaderTree/>
                <main style={{backgroundColor: "#fff", position: "relative", zIndex: 1}}>
                    {children}
                </main>
        </>
    );
};

export default LayoutTree;
