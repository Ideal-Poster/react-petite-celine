import React from "react";
import './Events.css';

import { Col, Row } from 'antd';

const Events = () => (
  <div style={{border: "10px solid #1C1820"}}>
    <div className="events-section">
      <Row>
        <Col sm={{ offset: 2 }} md={{ offset:0,  span: 6 }}>
          <h3 className="events-banner">EVENTS</h3>
        </Col>
        <Col span={16} style={{ background: 'grey' }}>
          <p>hello</p>
        </Col>
      </Row>
    </div>
  </div>
);

export default Events;