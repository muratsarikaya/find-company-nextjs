import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from './advert.module.css'
import Card from './Card'
import Button from "../common/Button";

const tabMenu = [
    {'title': 'All Property'},
    {'title': 'For Sale'},
    {'title': 'For Rent'}
];
const TabMenuComp = (props) => {
    return (
        <section className={styles.trending__places}>
            <h4 className="text-center">Her yerde kiralık mülk bulun</h4>
            <h2 className="text-center">Popüler Mülkleri Keşfedin</h2>
            <Tabs>
                <TabList className={styles.tab__title}>
                    {
                        tabMenu.map(item => (
                            <Tab>{item.title}</Tab>
                        ))
                    }

                </TabList>
                {
                    tabMenu.map((item, index) => (
                        <TabPanel className="mt-4">
                            <div className="row">
                                <Card key={index}/>
                            </div>

                        </TabPanel>
                    ))
                }
            </Tabs>
            <div className="text-center">
                <Button primary="#888" setValue="Daha Fazla" textColor="#fff"/>
            </div>

        </section>
    );
};


export default TabMenuComp;
