import React from 'react'
import { withPrefix } from 'gatsby'
import AppIcons from './AppIcons';

const Plans = (props) => (
  <div className="partial-plans" style={{backgroundImage: 'url(' + withPrefix('/static/gradient-bg.png') + ')'}}>
    <div className="container">
      {(props.tag == 'h1') ? <h1>Choose Your Plan</h1> : <h2>Choose Your Plan</h2>}
      <p className="offer"><a href="http://rakhi.fitato.fit">Check out exclusive offer</a></p>
      <div className="partial-plans__items">
        <div className="partial-plans__item">
          <h3>Fitato Quarterly<br /><small>(3 months)</small></h3>
          <p>Purchase the Fitato Quarterly pass and get unlimited access to every Fitato partner facility for 3 months!</p>
          <p style={{fontSize: '34px'}}>&#8377;4399</p>
          <small>Original: &#8377;5499<br />Get Cashback: &#8377;879</small>
          <br />
          <a href="https://imjo.in/DRd942" target="_blank" rel="noopener" className="button-inverted button-fluid" style={{marginTop: '30px'}}>Buy Now</a>
        </div>
        <div className="partial-plans__item">
          <h3>Fitato Bi-Monthly<br /><small>(2 months)</small></h3>
          <p>Purchase the Fitato Bi-Monthly pass and get unlimited  access to every Fitato partner facility for 2 months!</p>
          <p style={{fontSize: '34px'}}>&#8377;3119</p>
          <small>Original: &#8377;3899<br />Get Cashback: &#8377;624</small>
          <br />
          <a href="https://imjo.in/Zb6DhY" target="_blank" rel="noopener" className="button-inverted button-fluid" style={{marginTop: '30px'}}>Buy Now</a>
        </div>
        <div className="partial-plans__item">
          <h3>Fitato Monthly<br /><small>(1 month)</small></h3>
          <p>Purchase the Fitato Monthly pass and get unlimited access to every Fitato partner facility for  1 month!</p>
          <p style={{fontSize: '34px'}}>&#8377;1759</p>
          <small>Original: &#8377;2199<br />Get Cashback: &#8377;351</small>
          <br />
          <a href="https://imjo.in/KNt8SX" target="_blank" rel="noopener" className="button-inverted button-fluid" style={{marginTop: '30px'}}>Buy Now</a>
        </div>
      </div>
      <div className="partial-plans__speak">
        <p>You'll receive a confirmation call and email as soon as your payment is processed. Need recommendations or a crafted plan, please reach out to us at <a href="tel:+919607800533" style={{color: '#ffffff'}}>+91 9607800533</a>.</p>
        <AppIcons />
      </div>
    </div>
  </div>
)

export default Plans
