import React from 'react';

import { Button, Modal } from 'antd';

class AppWorks extends React.Component {
  state = { visible: false };

  

  render() {
    return (
      <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h1>Games</h1>
            <p>Play and Win Coins</p>
          </div>
          <div className="contentHolder">
            <Button size="large"><i className="fas fa-play"></i></Button>
          </div>
          
        </div>
      </div>
    );
  }
}

export default AppWorks;