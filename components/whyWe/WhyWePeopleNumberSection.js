import PeopleNumber from "./PeopleNumber";
import TitleSection from "../common/TitleSection";
import styles from "./whyWe.module.css"


const WhyWePeopleNumberSection = (props) => {
    return (
        <div className={`${styles.people_number_section} container`}>
            <div className="row">
                <div className="col-md-6">
                    <TitleSection statusClass="text-center"
                                  title1="SEVECEĞİNİZ BİR YER BULMANIZA YARDIMCI OLACAĞIZ."
                                  title2="Her yerde kiralık mülk bulun"/>
                    <p style={{marginTop:"60px"}}>Acının kendisi çok fazla acıdır Bu, ücretsiz ürünler, atıştırmalıklar ve başka zamanı olmayanlar
                        içindir. Onu zevkle memnun etmek için, aradığı ve reddedilmesi gereken arasındaki ayrım asla kör
                        olmadı! Çünkü herkes acı çekiyor! Acının kendisi çok fazla acıdır Bu, ücretsiz ürünler,
                        atıştırmalıklar ve başka zamanı olmayanlar içindir.</p>
                    <div className="row">
                        <div className="col-md-4">
                            <PeopleNumber icon="fa fa-building-o" count="10" text="Yılların Deneyimi"/>
                        </div>
                        <div className="col-md-4">
                            <PeopleNumber icon="fa fa-thumbs-o-up" count="585" text="Memnun müşteriler"/>
                        </div>
                        <div className="col-md-4">
                            <PeopleNumber icon="fa fa-user-o" count="100" text="Emlakçı"/>
                        </div>
                    </div>

                </div>
                <div className="col-md-6">

                </div>

            </div>
        </div>
    );
};

export default WhyWePeopleNumberSection;
