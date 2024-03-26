import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaRocket } from 'react-icons/fa';

function MyCarousel() {
    return (
        <Carousel>
            <Carousel.Item>

                <h3 className='carousal-heading'>Defi Quant - Decentralized Investor Plateform <br/>( MERN + SERN + Firebase ) </h3>

                <div class="card-deck">
                    <div class="card col-md-3">
                        <img className='carousal-img' src="Quant-1.PNG" alt="" />
                    </div>
                    <div className="col-md-1">

                    </div>
                    <div class="card col-md-3">
                        <img className='carousal-img' src="Quant-2.PNG" alt="" />
                    </div>
                    <div className="col-md-1">

                    </div>
                    <div class="card col-md-3">
                        <img className='carousal-img' src="Quant-3.PNG" alt="" />
                    </div>
                </div>

                <p>This projects is based on a business idea of attracting client to rent bots show casing the Quant Trading bot strategies and success history,
                    allowing them to register credentials and sending them to bots copiers, the user can buy portfolio management on his investment by paying some fees, 
                    the user will have to open the forex or crypto account and give the API or credentials, through API account data will be sent to the software where bots
                    are being running to copy the trades of bots, Currently working on it (components left:  data sending to financial bots with API, payment through different 
                    option), Functionalities done: google auth, Getting user choice for bot’s selection in DB, Getting, data secrets from backend securely, restricting to frontend 
                    URL, Beautiful Frontend.
                </p>

                  <a href="https://quant-trading-bots-mern.vercel.app/" target='_blank'>
                <button>
                     Check it Out <FaRocket/>
                </button>
                </a>
            </Carousel.Item>
            <Carousel.Item>

                <h3 className='carousal-heading'>Ai Law Assistant <br/> ( Django + SQLite )</h3>
                
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
                
                <p>
                    Laws Guidance website for user legal scenarios utilizing Large Language model (Bert), The feedback is taken from the user after prediction
                    until the user didn’t gets the right answer, Questions are saved in the yes or no columns against the laws that help in better prediction 
                    (reinforcement), Utilizing thread, it automatically retrains the model every 4th hour on new feedbacks making it more better, This projects
                    aims to first launch among the Lawyers that make it learn through feedbacks and then to the public.
                </p>
                  <a href="http://54.183.204.221/chat.html" target='_blank'>
                <button>
                     Check it Out <FaRocket/>
                </button>
                </a>
            </Carousel.Item>
            <Carousel.Item>

                <h3 className='carousal-heading'>DS Templet Share for Automation <br/> ( Flask + SQLAlchemy )</h3>
                
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
                
                <p>Project aims to automate the data science regular tasks like EDA, Feature Extraction, Model Selection to save time, Website has all the 4 steps of Data Science
                    Automated to some extinct which can be operated by just giving some answers about dataset user want to use and automatically do EDA, feature Engineering or 
                    Model Selection
                </p>
                <a href="https://dsprojecttempletshare.pythonanywhere.com/" target='_blank'>
                <button>
                     Check it Out <FaRocket/>
                </button>
                </a>
            </Carousel.Item>
            <Carousel.Item>


                <h3 className='carousal-heading'>Expense Tracker <br/> ( Laravel + MySQL ) </h3>
                
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
                
                <p>
                This project aims to help keep record of the user expenses to do money management User first make account in order to utilize the features, add his expenses
                    and categories, can generate the monthly weekly and daily report category wise and also set the limit to monthly limit
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
