import React from 'react';
import RealEstateCard from "./RealEstateCard";

const RealEstateWrapper = (props) => {
    return (
        <>
            <RealEstateCard column="col-6 mb-4"/>
            <RealEstateCard column="col-6 mb-4"/>
            <RealEstateCard column="col-4 mb-4"/>
            <RealEstateCard column="col-4 mb-4"/>
            <RealEstateCard column="col-4 mb-4"/>
        </>
    );
};

RealEstateWrapper.propTypes = {};
RealEstateWrapper.defaultProps = {};

export default RealEstateWrapper;
