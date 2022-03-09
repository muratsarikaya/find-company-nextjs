import Icon from "../common/Icon";
import styles from "./contact.module.css"

const ContactCard = (props) => {
    return (
        <div>
            <div className="text-center">
                <Icon classStyle={props.icon} color="#6449e7" size="25"/>
            </div>
            <div className="text-center">
                <h2>{props.title}</h2>
            </div>
            <div className="text-center">
                {
                    props.office && <address>{props.office.address}</address>
                }
                {
                    props.numberInfo && <div>
                        {
                            props.numberInfo.map((item, index) =>(
                                <div className={styles.contact__item_wrapper} key={index}><a href="tel:8009876543"><span>{item.title} :</span>{item.value}</a></div>
                            ))
                        }
                    </div>
                }
                {
                    props.days && <div>
                        {
                            props.days.map((item, index)=>(
                                <div key={index} className={styles.contact__item_wrapper}><a href="tel:8009876543"><span>{item.title} :</span>{item.time}</a></div>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    );
};


export default ContactCard;
