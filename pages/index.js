import React from 'react'
import Layout from "../components/layout/Layout";
import 'react-dropdown/style.css';
import TabMenuComp from "../components/advert/TabMenuComp";
import FeaturedWrapper from "../components/featured/FeaturedWrapper";
import RealEstateSection from "../components/realEstate/RealEstateSection";
import WeSection from "../components/whyWe/WeSection";
import RecentPropertySection from "../components/recentProperty/RecentPropertySection";
import BlogSection from "../components/blog/BlogSection";


export default function Home() {

    return (
        <>
            <Layout>
                <TabMenuComp/>
                <FeaturedWrapper/>
                <RealEstateSection/>
                <WeSection/>
                <RecentPropertySection/>
                <BlogSection/>
            </Layout>
        </>
    )
}
