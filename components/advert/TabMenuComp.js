import {Tab, Tabs, TabList, TabPanel,resetIdCounter } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from './advert.module.css'
import Card from './Card'
import Button from "../common/Button";
import TitleSection from "../common/TitleSection";
import img from "../../public/images/advert/property_7.jpg";

const tabMenu = [
    {'title': 'All Property'},
    {'title': 'For Sale'},
    {'title': 'For Rent'}
];
const dataItems = [
    {
        "belong": "Carmen Properties",
        "title": "Villa on Sunbury",
        'address': '39 Casey Ave, Sunbury, VIC 3429',
        'roomNumber': '5 Bedrooms',
        'bath': '4 Bath',
        'garage': ' 2 Garage',
        'area': '2048 sq ft',
        'price': '$9200',
        'unit': 'Mont',
        'rating': "5",
        'advertStatus': ['Featured', 'For Rent'],
        'image': img
    },
    {
        "belong": "Carmen Properties",
        "title": "Villa on Sunbury",
        'address': '39 Casey Ave, Sunbury, VIC 3429',
        'roomNumber': '5 Bedrooms',
        'bath': '4 Bath',
        'garage': ' 2 Garage',
        'area': '2048 sq ft',
        'price': '$9200',
        'unit': 'Mont',
        'rating': "5",
        'advertStatus': ['Featured', 'For Rent'],
        'image': img
    },
    {
        "belong": "Carmen Properties",
        "title": "Villa on Sunbury",
        'address': '39 Casey Ave, Sunbury, VIC 3429',
        'roomNumber': '5 Bedrooms',
        'bath': '4 Bath',
        'garage': ' 2 Garage',
        'area': '2048 sq ft',
        'price': '$9200',
        'unit': 'Mont',
        'rating': "5",
        'advertStatus': ['Featured', 'For Rent'],
        'image': img
    }
];

const TabMenuComp = (props) => {
    resetIdCounter();
    return (
        <section className={styles.trending__places}>
            <div className="container">

                <div className="featured__title">
                    <TitleSection statusClass="text-center" title1="Popüler Mülkleri Keşfedin"
                                  title2="Her yerde kiralık mülk bulun"/>
                </div>
                <Tabs>
                    <TabList className={styles.tab__title}>
                        {
                            tabMenu.map((item, index) => (
                                <Tab key={index}>{item.title}</Tab>
                            ))
                        }

                    </TabList>
                    {
                        tabMenu.map((item, index) => (
                            <TabPanel key={index} className="mt-4">
                                <div className="row">
                                    {
                                        dataItems.map((item, index) => (
                                            <Card classAttr="col-4" key={index} data={item}/>
                                        ))
                                    }
                                </div>
                            </TabPanel>
                        ))
                    }
                </Tabs>
                <div className="text-center">
                    <Button primary="#888" textColor="#fff" setValue="Daha Fazla"/>
                </div>
            </div>


        </section>
    );
};


export default TabMenuComp;
