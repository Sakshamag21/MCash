import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'High Performance',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Flat Design',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Simplified Workflow',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
        
        </div>
        <div className="contentHolder">
          <p>mCash is the Best Money Earning App in India.You will get ₹10 for free just for logging in to the app consecutively for the very first seven days.Do some simple new user tasks in the app and get further Coins.
            Withdraw Wallet Cash to your account after completing 3 simple tasks through India's best money Earning app.
            You earn big cash rewards by inviting friends on mCash. On inviting your first friend you get ₹5 as soon as your friend logs in. On completing “Various Tasks", users can earn money and withdraw rewards immediately.
            Our app is an entertainment app and we provide a wholesome experience for our users. We've integrated various games, tasks and activities on the application to make the user experience better and enhanced</p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;