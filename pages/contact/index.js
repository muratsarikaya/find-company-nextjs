import LayoutTwo from "../../components/layout/LayoutTwo";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ContactSection from "../../components/contact/ContactSection";

const breadcrumbData ={
    "title":"İletişim"
}
const ContactPage = (props) => {
    return (
        <LayoutTwo>
            <Breadcrumb breadcrumbData={breadcrumbData}/>
            <ContactSection/>
        </LayoutTwo>
    );
};


export default ContactPage;
