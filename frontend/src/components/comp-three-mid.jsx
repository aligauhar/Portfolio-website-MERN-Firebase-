import React, { useState, useEffect } from 'react';
import data from '../restApi.json';
import './css/comp-three.css';
import MyCarousal from "./carousal"

const Component3m = () => {
    return (
        <>
            <div id='portfolio' className="custom-container-wrapper about-padding">
                <div className="row">
                    <div className="col-md-12 main-text">
                        <h2 className='header-data wrapper-2'>Portfolio</h2>
                    </div>
                </div>
            </div>

            <div className='col-md-12'>
                <MyCarousal/>

            </div>

        </>
    );
};

export default Component3m;
