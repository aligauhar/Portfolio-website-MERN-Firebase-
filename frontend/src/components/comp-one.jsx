import React, { useState, useEffect } from 'react';
import data from '../restApi.json';
import { FaHandPointDown, FaMapPin, FaPaperclip, FaPen, FaPinterest, FaRocket, FaThumbtack } from 'react-icons/fa';
import './css/comp-one.css';
import SocialMediaIcons from './social-link';

const Component1 = () => {
    const [line, setLine] = useState('');
    const textLines = [
        "Full Stack Development",
        "Data Science",
        "Serverless Development"

    ];

    useEffect(() => {
        const animateText = async (text, direction) => {
            let newText = '';
            for (let i = 0; i <= text.length; i++) {
                newText = direction === 'in' ? text.slice(0, i) : text.slice(0, text.length - i);
                setLine(newText);
                await new Promise(resolve => setTimeout(resolve, 50));
            }
        };

        const animateLines = async () => {
            while (true) {
                for (let i = 0; i < textLines.length; i++) {
                    await animateText(textLines[i], 'in');
                    await new Promise(resolve => setTimeout(resolve, 100)); // Adjust the delay between lines
                    await animateText(textLines[i], 'out');
                }
            }
        };


        animateLines();
    }, []);

    return (
        <div className="custom-container-wrapper image-scroller-mobile"

        >
            <div className="row">
            <div className="col-md-1">
                    <SocialMediaIcons/>
                </div>
                <div className="col-md-6">
                
                    <h2 className='header-data-top'>Hi I am </h2>
                    <h2 className='header-data-bottom'>Ali Gauhar </h2>
                    <h4>Experienced in <FaThumbtack /></h4>
                    <div>
                        <p className='typewriter'>{line}</p>
                    </div>
                    <p>Let me help you with your products so that they will stand out in the market.</p>
                    <div className="header-container">
                        <div className="header-toggle-buttons">
                            <button variant="light" className='connect-wallet-btn' >
                                <FaPaperclip className='FaRocket' />  Resume
                            </button>

                        </div>
                    </div>
                </div>
               
                <div className="col-md-5 ">
                    <img src="my-img.png" alt="my-img" className='my-img' />

                </div>


            </div>
        </div>
    );
};

export default Component1;
