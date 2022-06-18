import 'react-dropdown/style.css';
import dynamic from "next/dynamic";
import {Provider} from "react-redux";
import store from "../Redux/store";
// import Layout from "../components/layout/Layout";
// //import RecentPropertySection from "../components/recentProperty/RecentPropertySection"
// import BlogSection from "../components/blog/BlogSection"
// import RealEstateSection from "../components/realEstate/RealEstateSection"
// import FeaturedWrapper from "../components/featured/FeaturedWrapper"
// import WeSection from "../components/whyWe/WeSection"
// import TabMenuComp from "../components/advert/TabMenuComp"

const Layout = dynamic(
    ()=> import("../components/layout/Layout"),
    {ssr:false}
)

// const RecentPropertySection = dynamic(
//     ()=> import("../components/recentProperty/RecentPropertySection"),
//     {ssr:true}
//     )
const BlogSection = dynamic(()=> import("../components/blog/BlogSection"),
    {ssr:false}
);
const RealEstateSection = dynamic(()=> import("../components/realEstate/RealEstateSection"),
    {ssr:false}
    ) ;
const FeaturedWrapper = dynamic(()=> import("../components/featured/FeaturedWrapper"),
    {ssr:false});
const WeSection = dynamic(()=> import("../components/whyWe/WeSection"),
    {ssr:false});
const TabMenuComp = dynamic(()=> import("../components/advert/TabMenuComp"),
    {ssr:false});

export default function Home() {
    return (
        <Provider store={store}>
                <Layout>
                    <TabMenuComp/>
                    <FeaturedWrapper/>
                    <RealEstateSection/>
                    <WeSection/>
                    {/*<RecentPropertySection/>*/}
                    <BlogSection/>
                </Layout>
        </Provider>
    )
}
