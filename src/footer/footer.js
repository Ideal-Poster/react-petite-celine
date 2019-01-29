import React from 'react';
import './footer.css';
import { Row, Col } from 'antd';

const Footer = () => (
  <Row>
    <Col span={24}>
      <footer className="footer footer-copyright">
      <p>© 2018 Copyright: Petite Celine</p>
      </footer>
    </Col>
  </Row>
);

export default Footer;