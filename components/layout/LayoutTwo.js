import Head from "next/head";
import HeaderTwo from "../header/HeaderTwo";
import Footer from "../footer/Footer";


const LayoutTwo = ({children}) => {
    return (
        <>
            <Head>
                <style
                    data-href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap">
                </style>
            </Head>
            <HeaderTwo/>
            <main style={{backgroundColor: "#fff", position: "relative", zIndex: 1}}>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default LayoutTwo;
