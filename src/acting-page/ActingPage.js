import React, { Component } from 'react';
import './ActingPage.css';
import NavMenu from '../nav-menu/NavMenu';

import { Row, Col } from 'antd';

import ImageToggle from './imageToggle/ImageToggle';

class ActingPage extends Component {
  constructor() {
    super();
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: true,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return(
      <div id="acting-container">
        <div className="acting-color-underlay"></div>
        <Col sm={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 2 }}>
          <NavMenu/>
        </Col>
        <Col md={{ span: 16 }} xl={{ span: 14 }} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <Row>
            <ImageToggle maskedImage={require("../assets/images/celine-1-mask.png")} image={require("../assets/images/celine-1.png")}></ImageToggle>
          </Row>
          <Col span={12}>
            <ImageToggle maskedImage={require("../assets/images/celine-2-mask.png")} image={require("../assets/images/celine-2.png")}></ImageToggle>
          </Col>
          <Col span={12}>
            <ImageToggle maskedImage={require("../assets/images/celine-3-mask.png")} image={require("../assets/images/celine-3.png")}></ImageToggle>
          </Col>
        </Col>
        <Col span={12} offset={6}>
          <Row>
            <div className="reel-box"/>
            <div className="video-wrapper reel">
              <iframe title="music-video" src="https://www.youtube.com/embed/96ayQ3GsfrE?rel=0?theme=light&color=white&mute=1&autoplay=1" frameBorder="0" gesture="media"
                allow="encrypted-media" allowFullScreen></iframe>
            </div>
          </Row>
        </Col>
      </div>
    )
  }
};

export default ActingPage;