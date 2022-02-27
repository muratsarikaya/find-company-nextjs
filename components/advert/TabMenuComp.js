import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from './advert.module.css'
import Card from './Card'
import Button from "../common/Button";
import TitleSection from "../common/TitleSection";

const tabMenu = [
    {'title': 'All Property'},
    {'title': 'For Sale'},
    {'title': 'For Rent'}
];
const TabMenuComp = (props) => {
    return (
        <section className={styles.trending__places}>
            <div className="container">

                <div className="featured__title">
                    <TitleSection statusClass="text-center" title1="Popüler Mülkleri Keşfedin" title2="Her yerde kiralık mülk bulun"/>
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
                                    <Card key={index}/>
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
