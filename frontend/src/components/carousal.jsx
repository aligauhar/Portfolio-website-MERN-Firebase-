import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaRocket } from 'react-icons/fa';

function MyCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <div class="card-deck">
                    <div class="card col-md-3">
                        <img className='carousal-img' src="law-assistant1.PNG" alt="" />
                    </div>
                    <div className="col-md-1">

                    </div>
                    <div class="card col-md-3">
                        <img className='carousal-img' src="law-assistant2.PNG" alt="" />
                    </div>
                    <div className="col-md-1">

                    </div>
                    <div class="card col-md-3">
                        <img className='carousal-img' src="law-assistant3.PNG" alt="" />
                    </div>
                </div>





                <h3 className='carousal-heading'>Defi Quant - Decentralized Investor Plateform</h3>
                <p>A projects is based on a business idea of show casing the Quant Trading bot strategies and history The website aims to show the historic success and profit made by the financial bots and attract user investment The user can buy portfolio management on his investment by paying some fees, payment integration Is being done The user will have to open the forex or crypto account and give the API or credentials  Through API account data will be sent to the software where bots are being running to copy the trades of bots</p>

                  <a href="https://quant-trading-bots-mern-ft79/" target='_blank'>
                <button>
                     Check it Out <FaRocket/>
                </button>
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <div class="card-deck">
                    <div class="card col-md-3">
                        <img className='carousal-img' src="law-assistant1.PNG" alt="" />
                    </div>
                    <div className="col-md-1">

                    </div>
                    <div class="card col-md-3">
                        <img className='carousal-img' src="law-assistant2.PNG" alt="" />
                    </div>
                    <div className="col-md-1">

                    </div>
                    <div class="card col-md-3">
                        <img className='carousal-img' src="law-assistant3.PNG" alt="" />
                    </div>
                </div>





                <h3 className='carousal-heading'>Ai Law Assistant</h3>
                <p>
                    Laws Guidance website for user legal scenarios utilizing Large Language model (Bert). The feedback is taken from the user after prediction until the user didn’t gets the right answer Questions are saved in the yes or no columns against the laws that help in better prediction (reinforcement) Utilizing thread, it automatically retrains the model every 4th hour on new feedbacks making it more better This projects aims to first launch among the Lawyers that make it learn through feedbacks and then to the public
                </p>
                  <a href="http://54.151.2.29/" target='_blank'>
                <button>
                     Check it Out <FaRocket/>
                </button>
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <div class="card-deck">
                    <div class="card col-md-3">
                        <img className='carousal-img' src="ds-templet1.PNG" alt="" />
                    </div>
                    <div className="col-md-1">

                    </div>
                    <div class="card col-md-3">
                        <img className='carousal-img' src="ds-templet2.PNG" alt="" />
                    </div>
                    <div className="col-md-1">

                    </div>
                    <div class="card col-md-3">
                        <img className='carousal-img' src="ds-templet3.PNG" alt="" />
                    </div>
                </div>





                <h3 className='carousal-heading'>DS Templet Share for Automation</h3>
                <p>Project aims to automate the data science regular tasks like EDA, Feature Extraction, Model Selection to save time Website has all the 4 steps of Data Science Automated to some extinct which can be operated by just giving some answers about dataset user want to use and automatically do EDA, feature Engineering or Model Selection</p>
                <a href="https://dsprojecttempletshare.pythonanywhere.com/" target='_blank'>
                <button>
                     Check it Out <FaRocket/>
                </button>
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <div class="card-deck">
                    <div class="card col-md-3">
                        <img className='carousal-img' src="expense-tracker-img1.png" alt="" />
                    </div>
                    <div className="col-md-1">

                    </div>
                    <div class="card col-md-3">
                        <img className='carousal-img' src="expense-tracker-img2.png" alt="" />
                    </div>
                    <div className="col-md-1">

                    </div>
                    <div class="card col-md-3">
                        <img className='carousal-img' src="expense-tracker-img3.png" alt="" />
                    </div>
                </div>





                <h3 className='carousal-heading'>Expense Tracker</h3>
                <p>
                    This project aims to help keep record of the user expenses to do money management User first make account in order to utilize the features, add his expenses and categories Can generate the monthly weekly and daily report category wise and also set the limit to monthly limit
                </p>
                <a href="https://expensetrackeragk.000webhostapp.com/" target='_blank'>
                <button>
                     Check it Out <FaRocket/>
                </button>
                </a>
            </Carousel.Item>        
        
      
        </Carousel>
    );
}

export default MyCarousel;
