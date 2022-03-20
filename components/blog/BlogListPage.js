import Link from "next/link";
import styles from "./blogCart.module.css"
import BlogCard from "./BlogCard";
import {List} from 'antd';
import {BiChevronRight} from "react-icons/bi";
import Button from "../common/Button";
import React from "react";

const datas = [
    {
        'title': 'Eviniz Için En Ilham Verici Iç Tasarım',
        'category': 'Apartman',
        'day': '28',
        'date': 'Eylül 2018',
        'image': "http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/blog/news_2.jpg"
    },
    {
        'title': 'Gayrimenkulünüzü Tamamen Sallamanın 7 Basit Sırrı',
        'category': 'Emlak',
        'day': '21',
        'date': 'Mart 2019',
        'image': "http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/blog/news_3.jpg"
    },
    {
        'title': 'Bakış Açınızı Değiştirebilecek 10 Kiralama Avantajı',
        'category': 'Reklam',
        'day': '28',
        'date': 'Eylül 2018',
        'image': "http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/blog/news_1.jpg"
    },
    {
        'title': 'Eviniz Için En Ilham Verici Iç Tasarım',
        'category': 'Apartman',
        'day': '28',
        'date': 'Eylül 2018',
        'image': "http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/blog/news_2.jpg"
    },
    {
        'title': 'Gayrimenkulünüzü Tamamen Sallamanın 7 Basit Sırrı',
        'category': 'Emlak',
        'day': '21',
        'date': 'Mart 2019',
        'image': "http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/blog/news_3.jpg"
    },
    {
        'title': 'Bakış Açınızı Değiştirebilecek 10 Kiralama Avantajı',
        'category': 'Reklam',
        'day': '28',
        'date': 'Eylül 2018',
        'image': "http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/blog/news_1.jpg"
    }
];

const categories = [
    {"label": "Emlak","count":"9"},
    {"label": "İşletme" ,"count":"15"},
    {"label": "Apartman","count":"10"}
]
const tags = [
    {"label":"Villa"},
    {"label":"Apartman"},
    {"label":"Emlak"}
]

const BlogListPage = (props) => {
    return (
        <section className={styles.blogPage__list_section}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div id="blog__filter">
                            <div className="mb-5">
                                <h3>Kategoriler</h3>
                                <hr/>
                                <div>
                                    <List
                                        size="small"

                                        dataSource={categories}
                                        renderItem={(item ,index)=> <List.Item key={index}  className="d-block">
                                            <Link href="/" >
                                                <a className="d-flex justify-content-between">
                                                <span><BiChevronRight
                                                    size={19}/>{item.label}</span>
                                                    <span>({item.count})</span>
                                                </a>
                                            </Link>
                                        </List.Item>}
                                    />
                                </div>
                            </div>
                            <div>
                                <h3>Etiketler</h3>
                                <hr/>
                                <div className="d-flex">
                                    {
                                        tags.map((item, index) => (
                                            <Button key={index} margin="5px" border="#888" textColor="#888" setValue={item.label}/>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {
                                datas.map((item, index) => (
                                    <BlogCard key={index} classAttr="col-4 mb-4" data={item}/>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogListPage;
