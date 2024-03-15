import React, { useState, useEffect } from 'react';
import data from '../restApi.json';
import { FaFly, FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import './css/comp-two.css';


const Component1 = () => {
    return (
        <>
        <div className="custom-container-wrapper about-padding">
            <div className="row">
                <div className="col-md-12 main-text">
                    <h2 className='header-data wrapper-2'>About Me</h2>
                    <h4 className='header-data quote-data'> <FaQuoteLeft/> A Glimps of Who I am <FaQuoteRight/></h4>
                    <p className='paragraph-data'>
                    My tech prowess spans Full Stack Web Development, where frameworks like Django and Flask shine. NodeJS and Laravel add to the melody, crafting robust applications. On the frontend, React orchestrates captivating user interfaces. In the database realm, PostgreSQL and MongoDB play pivotal roles, with SQLAlchemy adding a touch of finesse.
                    </p>
                </div>
            </div>
        </div>
        
    </>
    );
};

export default Component1;
