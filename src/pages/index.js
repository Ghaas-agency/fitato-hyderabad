import React from 'react'
import Layout from '../components/index'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'

import '../css/offer.css'

const displayBlock = {
  display: 'block'
}

const displayNone = {
  display: 'none'
}

class OffersPage extends React.Component {
  state = {
    /* modalToggle: false,
    passesLeft: '95', */
    showFloatingButton: false
  }

  /* handleClick = e => {
    if(e.target.className === 'workplace-modalbg' || e.target.className === 'modal-close') {
      this.setState({
        modalToggle: false
      });
    } else {
      this.setState({
        modalToggle: true
      });
    }
  } */

  handleScroll = () => {
    let y = 0;
    y = !(typeof(window) === "undefined") ? window.scrollY : '';
    if (y >= 300) {
      this.setState({showFloatingButton: true});
    } else {
      this.setState({showFloatingButton: false});
    }
  }

  componentDidMount() {
    if(!(typeof(window) === "undefined")) {
      window.addEventListener('scroll', this.handleScroll);
    }

    /* const oneHour = 60*60*1000;
    const current = new Date();
    const ends = new Date(2018, 9, 18);
    
    const hoursLeft = Math.round(Math.abs((current.getTime() - ends.getTime())/(oneHour)));
    
    // Change the number every twelve hours
    const passesLeftCalc = (hoursLeft / 650) * 100;
    
    if(current.getMonth() >= 10 && current.getDate() >= 16) {
      this.setState({passesLeft: '11'});
    } else {
      this.setState({passesLeft: Math.round(passesLeftCalc)});
    } */
  }

  componentWillUnmount() {
    if(!(typeof(window) === "undefined")) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  render() {
    return (
      <Layout>
        <div className="offers-page">
          <Helmet
            title="Fitato: Your Fitness Freedom Now In Hyderabad"
          />

            <div className="header-wrapper"></div>
            
            <div className="offers-page-hero" style={{backgroundImage: 'url(' + withPrefix('/static/Fitato-Hyderbad-Launch.svg') + ')' }}>
              <div className="container">
                <div className="offers-page-hero__wrapper">
                  <h1>NAMASKARAM HYDERABAD!</h1>
                  <p>The Most Flexible, All-Access Fitness Membership is in Hyderabad!</p>
                  <a href="#buy-now" className="button-inverted" style={{marginLeft: '0', marginTop: '20px'}}>Buy Now</a>
                </div>
              </div>
            </div>

            <div className="offers-page-one-pass">
              <div className="container">
                <div className="offers-page-one-pass__left">
                  <img src={withPrefix('/static/vector/fitato-mobile-hyderabad.jpg')} width="300" alt="fitato app"/>
                </div>
                <div className="offers-page-one-pass__right">
                  <h3>One Pass To Access Them All</h3>
                  <div className="offers-page-one-pass__items">
                    <div className="offers-page-one-pass__item">
                      <img src={withPrefix('/static/vector/Spinning.svg')} width="auto" alt="Spinning"/>
                      <p>Spinning</p>
                    </div>
                    <div className="offers-page-one-pass__item">
                      <img src={withPrefix('/static/vector/Gym.svg')} alt="Gym"/>
                      <p>Gym</p>
                    </div>
                    <div className="offers-page-one-pass__item">
                      <img src={withPrefix('/static/vector/Yoga.svg')} alt="Yoga"/>
                      <p>Yoga</p>
                    </div>
                    <div className="offers-page-one-pass__item">
                      <img src={withPrefix('/static/vector/Meditation.svg')} alt="Meditation"/>
                      <p>Meditation</p>
                    </div>
                  </div>
                  <div className="white-line"></div>
                  <div className="offers-page-one-pass__items">
                    <div className="offers-page-one-pass__item">
                      <img src={withPrefix('/static/vector/Commuity-events.svg')} alt="Commuity events"/>
                      <p>Community Events</p>
                    </div>
                    <div className="offers-page-one-pass__item">
                      <img src={withPrefix('/static/vector/Swimming.svg')} alt="Swimming"/>
                      <p>Swimming</p>
                    </div>
                    <div className="offers-page-one-pass__item">
                      <img src={withPrefix('/static/vector/Zumba.svg')} alt="Zumba"/>
                      <p>Zumba</p>
                    </div>
                    <div className="offers-page-one-pass__item">
                      <img src={withPrefix('/static/vector/MMA.svg')} alt="MMA"/>
                      <p>MMA</p>
                    </div>
                  </div>
                  <p className="offers-page-one-pass__more">and many more...</p>
                </div>
              </div>
            </div>

            <div className="offers-page-advantages">
              <div className="container">
                <h2>The Most Flexible Fitness Membership Ever</h2>
                <div className="offers-page-advantages__items">
                  <div className="offers-page-advantages__item">
                    <img src={withPrefix('/static/wherever.svg')} alt="wherever"/>
                    <h3>Workout Wherever You Want</h3>
                    <p>Not getting the time to hit the gym after work? Use your Fitato Pass to workout near your home, college or on the way. Find a gym near you with your Fitato Pass.</p>
                  </div>
                  <div className="offers-page-advantages__item">
                    <img src={withPrefix('/static/Whenever.svg')} alt="whenever"/>
                    <h3>Workout Whenever You Want</h3>
                    <p>Missed your favourite Yoga class? Overslept? Sudden meetings? Overextended client calls? Don't worry we've got your back. With Fitato you'll always have options regardless of the time!</p>
                  </div>
                  <div className="offers-page-advantages__item">
                    <img src={withPrefix('/static/way-you-want.svg')} alt="way-you-want"/>
                    <h3>Workout The Way You Want</h3>
                    <p>Spice Up Your Fitness Routine! Pump iron today at the gym, do Zumba tomorrow and get some well-deserved relaxation over the weekend with yoga or a swimming class.</p>
                  </div>
                </div>
                <div className="offers-page-advantages__join">
                  <img src={withPrefix('/static/Community.svg')} alt="fitato community"/>
                  <h3>Be A Part Of Our Community</h3>
                  <p>When we’re not at the gym, we make sure we go out and have fun. Our community events are bound to liven up your weekends and put a smile on your face.</p>
                  <p>Join us on treks, camping trips, karaoke nights, musical and comedy events, health and fitness workshops, and plenty more.</p>
                </div>
              </div>
            </div>
    
            <div id="buy-now" className="offers-page-intro" style={{backgroundImage: 'url(' + withPrefix('/static/fitness-bg.png') + ')' }}>
              <div className="container">
                
                {/* <div className="offer-page-intro__wrapper">

                  <div className="offer-page-intro__left">
                    <p className="offer-title-highlight">Hyderabad Pre-Launch Special Offer</p>
                    <h2>First 100 Subscribers Get Flat 50% Off</h2>
                    <p>Only 0 Early Bird Passes Left</p>
                    <small><em>(Offer valid for Hyderabad citizens only.)</em></small>
                  </div>

                  <div className="offer-page-intro__right">
                    <div className="offers-page-plans__items">
                      <div className="offers-page-plans__item offer-closed">
                        <div className="offers-page-plans__item--title">
                          <h3>Fitato Monthly</h3>
                        </div>
                        <div className="offers-page-plans__item--body">
                          <p>Purchase the Fitato Monthly pass and get unlimited access to every Fitato partner facility.</p>
                          <p><strike>&#8377;2,199</strike></p>
                          <p className="offers-page-plans__item--price">&#8377;1,099</p>
                          <span className="button button-fluid button-greyed">SOLD OUT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="offer-page-last-chance">
                  <h2>Choose Your Membership Plan</h2>
                  <div className="offers-page-plans__items">
                    <div className="offers-page-plans__item">
                      <div className="offers-page-plans__item--title">
                        <h3>Fitato Quaterly</h3>
                      </div>
                      <div className="offers-page-plans__item--body">
                        <p>Purchase the Fitato Quaterly pass and get unlimited access to every Fitato partner facility for three months.</p>
                        <p className="offers-page-plans__item--price">&#8377;5,499</p>
                        <a href="https://imjo.in/RXuDNp" target="_blank" rel="noreferrer noopener">
                          <span className="button button-fluid">Buy Now</span>
                        </a>
                        {/* <p style={{marginTop: '20px'}}>{
                          (this.state.passesLeft <= 1) ? 2 : this.state.passesLeft
                        } passes left</p> */}
                      </div>
                    </div>
                    <div className="offers-page-plans__item">
                      <div className="offers-page-plans__item--title">
                        <h3>Fitato Bi-Monthly</h3>
                      </div>
                      <div className="offers-page-plans__item--body">
                        <p>Purchase the Fitato Bi-Monthly pass and get unlimited access to every Fitato partner facility for two months.</p>
                        <p className="offers-page-plans__item--price">&#8377;3,899</p>
                        <a href="https://imjo.in/qN4Z2K" target="_blank" rel="noreferrer noopener">
                          <span className="button button-fluid">Buy Now</span>
                        </a>
                        {/* <p style={{marginTop: '20px'}}>{
                          (this.state.passesLeft + 3 <= 1) ? 2 : this.state.passesLeft + 3
                        } passes left</p> */}
                      </div>
                    </div>
                    <div className="offers-page-plans__item">
                      <div className="offers-page-plans__item--title">
                        <h3>Fitato Monthly</h3>
                      </div>
                      <div className="offers-page-plans__item--body">
                        <p>Purchase the Fitato Monthly pass and get unlimited access to every Fitato partner facility for one month.</p>
                        <p className="offers-page-plans__item--price">&#8377;2,199</p>
                        <a href="https://imjo.in/ekB8Fn" target="_blank" rel="noreferrer noopener">
                          <span className="button button-fluid">Buy Now</span>
                        </a>
                        {/* <p style={{marginTop: '20px'}}>{
                          (this.state.passesLeft - 5 <= 1) ? 2 : this.state.passesLeft - 5
                        } passes left</p> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="offers-page-facilities">
                  <h3>Our Featured Partner Facilities</h3>
                  <div className="offers-pafe-facilities__items">
                    <div className="offers-pafe-facilities__item">
                      <img src={withPrefix('/static/facilities/dtp.jpg')} width="50" alt="DTP the gym"/>
                      <p>DTP The Gym</p>
                    </div>
                    <div className="offers-pafe-facilities__item">
                      <img src={withPrefix('/static/facilities/fitness-freak-studio.png')} width="120" alt="fitness freak studio"/>
                      <p>Fitness Freak Studio</p>
                    </div>
                    <div className="offers-pafe-facilities__item">
                      <img src={withPrefix('/static/facilities/house-of-champions.png')} width="50" alt="house of champions"/>
                      <p>House of Champions</p>
                    </div>
                    <div className="offers-pafe-facilities__item">
                      <img src={withPrefix('/static/facilities/360-fitness.png')} width="70" alt="360 fitness"/>
                      <p>360° Fitness</p>
                    </div>
                    <div className="offers-pafe-facilities__item">
                      <img src={withPrefix('/static/facilities/hy-dance-studios.png')} width="50" alt="hy dance studios"/>
                      <p>HY Dance Studios</p>
                    </div>
                  </div>
                  <p className="red">and many more...</p>
                </div>
                
              </div>
            </div>
    
            <a href="#buy-now" 
              className="button pre-book-float-btn"
              style={(this.state.showFloatingButton) ? displayBlock : displayNone}  
            >Buy your pass now</a>

            {/* <div className="offers-page-share">
              <div className="container">
                <h2>Share</h2>
                <button data-sharer="twitter" data-title="Checkout Sharer.js!" data-url="https://hyderabad.fitato.fit">Share on Twitter</button>
              </div>
            </div> */}
    
        </div>
        

        {/* <div className="workplace-modalbg" 
          style={(this.state.modalToggle) ? displayBlock : displayNone} onClick={this.handleClick}>
          <div className="workplace-modal">
            <div className="workplace-modal__title">
              <h3>Learn More About the Exclusive Offer</h3>
            </div>
            <span className="modal-close" onClick={this.handleClick}>X</span>
            <div className="workplace-modal__form">
              <small>Please fill out this form, and we&apos;ll get in touch shortly.</small>
              <form action="https://formspree.io/pooja.ahuja@fitato.fit" method="POST" className="contact-form">
                <div><input type="text" name="name" placeholder="Your Name" required /></div>
                <div><input type="tel" name="phone" placeholder="Your Phone Number" required /></div>
                <div><input type="email" name="_replyto" placeholder="Your Email" required /></div>
                <input type="hidden" name="_subject" value="offers form submission" />
                <input type="hidden" name="_cc" value="murada@fitato.fit" />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div> */}
      </Layout>
    )
  }
} 

export default OffersPage
