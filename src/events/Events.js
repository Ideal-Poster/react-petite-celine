import React from "react";
import './Events.css';

import { Col, Row, Button } from 'antd';

const Events = () => (
  <div style={{border: "10px solid #1C1820"}}>
    <div className="events-section">
      <Row>
        <Col sm={{ offset: 2 }} md={{ offset:0,  span: 6 }}>
          <h3 className="events-banner">EVENTS</h3>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 22, offset: 2 }} md={{span:18, offset:0}}>
          <Row style={{ display: 'flex', paddingBottom: '40px' }}>
            <Col xs={24} sm={16}>
              <div className="event event01">
                <div className="date">
                  <p>Sat, January 19th 2019 - 10pm</p>
                </div>
                <div className="venue">
                  <p>The Delancey</p>
                </div>
                <div className="location">
                  <p>168 Delancey St New York, NY 10002 - $10 Cover Charge</p>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div className="vertical-center">
                <a href="">
                  <Button
                    className="button"
                    size={'large'}>
                    Primary
                  </Button>
                </a>
              </div>
            </Col>
          </Row>

          <Button
            className="mobile-button"
            size={'large'}>
            Primary
          </Button>
        </Col>
      </Row>
    </div>
  </div>
);

export default Events;