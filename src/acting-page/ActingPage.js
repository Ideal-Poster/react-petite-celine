import React from 'react';
import './ActingPage.css';
import NavMenu from '../nav-menu/NavMenu';

import { Row, Col } from 'antd';

const ActingPage = () => (
  <div id="acting-container">
    <Col sm={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 2 }}>
      <NavMenu/>
    </Col>
    <Col md={{ span: 16 }} xl={{ span: 14 }} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <Row>
        <img src={ require("../assets/images/celine-1-mask.png")} alt="Portrait of celine" style={{ width: '100%' }}/>
      </Row>
      <Col span={12}>
        <img src={ require("../assets/images/celine-2-mask.png")} alt="Portrait of celine" style={{ width: '100%' }}/>
      </Col>
      <Col span={12}>
        <img src={ require("../assets/images/celine-3-mask.png")} alt="Portrait of celine" style={{ width: '100%' }}/>
      </Col>
    </Col>
    {/* <Row> */}
    <Col span={12} offset={6}>

      <Row>
        <div className="reel-box"/>
        <div className="video-wrapper reel">
          <iframe title="music-video" src="https://www.youtube.com/embed/96ayQ3GsfrE?rel=0?theme=light&color=white&mute=1&autoplay=1" frameBorder="0" gesture="media"
            allow="encrypted-media" allowFullScreen></iframe>
        </div>
      </Row>
    </Col>
    {/* </Row> */}
  </div>
);

export default ActingPage;