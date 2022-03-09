import Head from "next/head";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Page from 'react-page-loading'

const Layout = ({children}) => {
    return (
        <>
            <Page loader={"rotate-spin"} color={"#6449e7"} size={5}>
                <Head>
                    <style
                        data-href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap">
                    </style>
                </Head>
                <Header/>
                <main style={{backgroundColor: "#fff", position: "relative", zIndex: 1}}>
                    {children}
                </main>
                <Footer/>
            </Page>
        </>
    );
};

export default Layout;
