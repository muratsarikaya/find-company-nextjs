import LayoutTwo from "../../components/layout/LayoutTwo";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import VideoSectionOne from "../../components/video/VideoSectionOne";
import SimpleReactLightbox from 'simple-react-lightbox';
import WhyWePeopleNumberSection from "../../components/whyWe/WhyWePeopleNumberSection";
import StaffSection from "../../components/staff/StaffSection";

const breadcrumbData ={
    "title":"Hakkımızda"
}

const AboutPage = (props) => {
    return (
        <LayoutTwo>
            <Breadcrumb breadcrumbData={breadcrumbData}/>
            <SimpleReactLightbox>
                <VideoSectionOne/>
            </SimpleReactLightbox>
            <WhyWePeopleNumberSection/>
            <StaffSection/>
        </LayoutTwo>
    );
};


export default AboutPage;
