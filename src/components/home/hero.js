import React from 'react';
import { Button } from 'antd';


import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Daily Rewards',
    content: 'Log in daily to claim free coins!',
    button: 'CLAIM PRIZE',
    image:'https://www.clipartmax.com/png/middle/125-1253076_04-rewards-icon.png'
  },
  {
    key: '2',
    title: 'Spin and Win',
    content: 'Spin the Wheel of rewards and win big!',
    button: 'SPIN THE WHEEL',
    image:'https://raw.githubusercontent.com/herudi/antd-button-color/master/screenshot_1.png',
  },
  {
    key: '3',
    title: 'Challenges',
    content: 'Complete challenges to earn extra rewards',
    button: 'SEE CHALLENGES',
    image:'https://raw.githubusercontent.com/herudi/antd-button-color/master/screenshot_1.png',

  },
]

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel autoplay>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h1>{item.title}</h1>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">{item.button}</Button>
                  {/* <Button size="large"><i className="fas fa-desktop"></i> Watch a Demo</Button> */}
                </div>
                {/* <img src='https://raw.githubusercontent.com/herudi/antd-button-color/master/s'></img> */}
              </div>
              {/* <img src={item.image} ></img> */}
              
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;