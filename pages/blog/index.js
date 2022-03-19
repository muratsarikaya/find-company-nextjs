import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import SimpleReactLightbox from "simple-react-lightbox";
import VideoSectionOne from "../../components/video/VideoSectionOne";
import WhyWePeopleNumberSection from "../../components/whyWe/WhyWePeopleNumberSection";
import StaffSection from "../../components/staff/StaffSection";
import LayoutTwo from "../../components/layout/LayoutTwo";
import BlogListPage from "../../components/blog/BlogListPage";


const breadcrumbData ={
    "title":"Blog"
}

const Index = (props) => {
    return (
        <LayoutTwo>
            <Breadcrumb breadcrumbData={breadcrumbData}/>
            <BlogListPage/>
        </LayoutTwo>
    );
};


export default Index;
