import styles from "./blogCart.module.css"
import BlogCard from "./BlogCard";
import {Form} from "reactstrap";
import Select from 'react-dropdown-select';

const datas = [
    {'title':'Eviniz Için En Ilham Verici Iç Tasarım','category':'Apartman', 'day': '28','date':'Eylül 2018', 'image':"http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/blog/news_2.jpg"},
    {'title':'Gayrimenkulünüzü Tamamen Sallamanın 7 Basit Sırrı','category':'Emlak','day': '21', 'date':'Mart 2019', 'image':"http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/blog/news_3.jpg"},
    {'title':'Bakış Açınızı Değiştirebilecek 10 Kiralama Avantajı','category':'Reklam','day': '28', 'date':'Eylül 2018', 'image':"http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/blog/news_1.jpg"},
    {'title':'Eviniz Için En Ilham Verici Iç Tasarım','category':'Apartman', 'day': '28','date':'Eylül 2018', 'image':"http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/blog/news_2.jpg"},
    {'title':'Gayrimenkulünüzü Tamamen Sallamanın 7 Basit Sırrı','category':'Emlak','day': '21', 'date':'Mart 2019', 'image':"http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/blog/news_3.jpg"},
    {'title':'Bakış Açınızı Değiştirebilecek 10 Kiralama Avantajı','category':'Reklam','day': '28', 'date':'Eylül 2018', 'image':"http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/blog/news_1.jpg"}
];

const Countries = [
    { label: "Türkiye", value: 90 },
    { label: "Argentina", value: 54 },
    { label: "Austria", value: 43 },
    { label: "Cocos Islands", value: 61 },
    { label: "Kuwait", value: 965 },
    { label: "Sweden", value: 46 },
    { label: "Venezuela", value: 58 }
];

const PropertyStatus =[
    { label: "Tümü", value: "Tümü" },
    { label: "Kiralık", value: "Kiralık" },
    { label: "Satılık", value: "Satılık" },
]

const BlogListPage = (props) => {
    return (
        <section className={styles.blogPage__list_section}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Form id="blog__filter">
                            <Select className="mb-4"
                                options={Countries}
                                values={[{ label: "Türkiye", value: 90 }]}
                                onChange={(value) => console.log(value)}
                            />
                            <Select
                                options={PropertyStatus}
                                values={[{
                                    value: 'Tümü',
                                    label: 'Tümü'
                                }]}
                                onChange={(value) => console.log(value)}
                            />
                        </Form>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {
                                datas.map((item, index) =>(
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
