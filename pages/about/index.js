import LayoutTwo from "../../components/layout/LayoutTwo";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import VideoSectionOne from "../../components/video/VideoSectionOne";
import SimpleReactLightbox from 'simple-react-lightbox';
import WhyWePeopleNumberSection from "../../components/whyWe/WhyWePeopleNumberSection";

const AboutPage = (props) => {
    return (
        <LayoutTwo>
            <Breadcrumb/>
            <SimpleReactLightbox>
                <VideoSectionOne/>
            </SimpleReactLightbox>
            <WhyWePeopleNumberSection/>
        </LayoutTwo>
    );
};


export default AboutPage;
