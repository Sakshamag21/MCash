import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

function AppFeature() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h1>Key Offers and Benefits</h1>
          
        </div>
        <div class="cards">
          
          <div className="card card-1">
      <div className="card__icon"><i className="fas fa-tasks"></i></div>
      
      <h1 className="card__title">Task Offers</h1>
      <p className="card__apply">
        <a className="card__link" href="#">Apply Now <i className="fas fa-arrow-right"></i></a>
      </p>
    </div>
          
          
          <div className="card card-2">
      <div className="card__icon"><i className="fas fa-bolt"></i></div>
      
      <h1 className="card__title">Buzz Offers</h1>
      <p className="card__apply">
        <a className="card__link" href="#">Apply Now <i className="fas fa-arrow-right"></i></a>
      </p>
    </div>
          
          
          <div className="card card-3">
      <div className="card__icon"><i className="fas fa-tasks"></i></div>
      
      <h1 className="card__title">Limited Offers</h1>
      <p className="card__apply">
        <a className="card__link" href="#">Apply Now <i className="fas fa-arrow-right"></i></a>
      </p>
    </div>
          
          
          <div className="card card-4">
      <div className="card__icon"><i className="fas fa-play"></i></div>
      
      <h1 className="card__title">Adscend Offers</h1>
      <p className="card__apply">
        <a className="card__link" href="#">Apply Now <i className="fas fa-arrow-right"></i></a>
      </p>
    </div>
          
          
          <div className="card card-5">
      <div className="card__icon"><i className="fas fa-plus"></i></div>
      
      <h1 className="card__title">Adgate Offers</h1>
      <p className="card__apply">
        <a className="card__link" href="#">Apply Now <i className="fas fa-arrow-right"></i></a>
      </p>
    </div>
          
          
          
          
        </div>
      </div>
    </div>
  );
}

export default AppFeature;