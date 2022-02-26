import React from 'react'
import Layout from "../components/layout/Layout";
import 'react-dropdown/style.css';
import TabMenuComp from "../components/advert/TabMenuComp";


export default function Home() {

    return (
        <>
            <Layout>
                <TabMenuComp/>
            </Layout>
        </>
    )
}
