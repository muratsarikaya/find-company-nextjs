import Image from "next/image";
import LayoutTree from "../../components/layout/LayoutTree";
import LoginForm from "../../components/forms/LoginForm";
import styles from "../../components/forms/form.module.css"
import RegisterForm from "../../components/forms/RegisterForm";


const Index = (props) => {
    return (
        <LayoutTree>
            <div className={styles.login__section}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 px-0">
                            <div className={styles.login__bg}>
                                <Image className={`w-100 h-100`}
                                       src="https://cdn.stocksnap.io/img-thumbs/960w/canal-water_GCZ32Y9RLS.jpg"
                                       objectFit="cover" width="1000px" height="100%"/>
                            </div>
                        </div>
                        <div className={`${styles.form__bgColor} col-6`}>
                            <RegisterForm/>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutTree>
    );
};


export default Index;
