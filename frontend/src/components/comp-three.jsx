import React, { useState, useEffect } from 'react';
import data from '../restApi.json';
import { FaCode, FaFileCode, FaFileExcel, FaFly, FaQuoteLeft, FaQuoteRight, FaServer } from 'react-icons/fa';
import './css/comp-three.css';


const Component2 = () => {
    return (
        <>
            <div id='experties' className="custom-container-wrapper about-padding">
                <div className="row">
                    <div className="col-md-12 main-text">
                        <h2 className='header-data wrapper-2'>My Experties</h2>
                        <h4 className='header-data quote-data'> <FaQuoteLeft /> Tailored solutions for you <FaQuoteRight /></h4>

                    </div>
                </div>
            </div>

            <div className='experties-div'>
                <div class="card-group">

                        <div className="col-md-2">

                        </div>
                    <div class="card col-md-2">
                        <div class="card-body">
                            <FaFileCode />
                            <h5 class="card-title">Full Stack Developemnt</h5>
                            <p class="card-text">As a technology-driven developer, I leverage the latest tools and frameworks such as MERN Stack, Django and Flask to develop highly scalable and performant web applications.</p>
                        </div>
                    </div>
                    <div className="col-md-1">

                    </div>
                    <div class="card col-md-2">
                        <div class="card-body">
                            <FaFileExcel />
                            <h5 class="card-title">Data Science</h5>
                            <p class="card-text">As a Data Scientist, I specialize in exploratory data analysis and predictive modeling, with extensive experience in TensorFlow for deep learning and expertise in Transformer models for NLP tasks.</p>
                        </div>
                    </div>
                    <div className="col-md-1">

                    </div>
                    
                    <div class="card col-md-2">
                        <div class="card-body">
                            <FaServer />
                            <h5 class="card-title">Serverless</h5>
                            <p class="card-text">I leverage Firebase's serverless architecture to deploy scalable and efficient data processing pipelines, enabling real-time analytics and machine learning applications with seamless integration.</p>
                        </div>
                    </div>
                    <div className="col-md-2">

                    </div>
                </div>
                

            </div>

        </>
    );
};

export default Component2;
