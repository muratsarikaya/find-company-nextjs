import React from 'react';
import styles from "./blogCart.module.css"
import TitleSection from "../common/TitleSection";
import BlogCard from "./BlogCard";

const datas = [
    {'title':'Eviniz Için En Ilham Verici Iç Tasarım','category':'Apartman', 'day': '28','date':'Eylül 2018', 'img':'http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/blog/news_2.jpg'},
    {'title':'Gayrimenkulünüzü Tamamen Sallamanın 7 Basit Sırrı','category':'Emlak','day': '21', 'date':'Mart 2019', 'img':'http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/blog/news_3.jpg'},
    {'title':'Bakış Açınızı Değiştirebilecek 10 Kiralama Avantajı','category':'Reklam','day': '28', 'date':'Eylül 2018', 'img':'http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/blog/news_1.jpg'}
]
const BlogSection = (props) => {
    return (
        <section className={styles.blog__card_section}>
            <div className="container">
                <TitleSection statusClass="text-center" title1="Haberler" title2="Son Habelere göz atın"/>
                <div className="mt-5">
                    <div className="row">
                        {
                            datas.map((item, index) =>(
                                <BlogCard key={index} classAttr="col-4" data={item}/>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
