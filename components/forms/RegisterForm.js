
import Input from "../common/Input";
import styles from "./form.module.css"
import Button from "../common/Button";
const RegisterForm = (props) => {
    return (
        <div>
            <h1 className="text-center">Kaydol</h1>
            <p className="text-center mb-5">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
            <form className={styles.form__wrapper}>
                <Input type="text" title="Kullanıcı Adı yada E-Postanız" placeholder="E-Posta Adresiniz"/>
                <Input type="password" title="Parola" placeholder="Parola Giriniz"/>
                <Input type="password" title="Parola Doğrulama" placeholder="Parola Doğrulama"/>
                <div className="text-center">
                    <Button primary="#6349e8" textColor="#fff" setValue="Kaydol"/>
                </div>

            </form>

        </div>
    );
};


export default RegisterForm;
