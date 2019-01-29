import React, { Component } from 'react';
import './ArtPage.css';

import 'react-photoswipe/lib/photoswipe.css';
import {PhotoSwipeGallery} from 'react-photoswipe';
import { Col, Button } from 'antd';
import items from './GalleryApi';
import NavMenu from '../nav-menu/NavMenu';


let options = {
  //http://photoswipe.com/documentation/options.html
};

class ArtPage extends Component {
  getThumbnailContent = (item) => {
    return (
      <img alt="Petite Celine artwork" src={item.thumbnail} width={120} height={90}/>
    );
  }

  render() {
    return (
      <div>
        <Col sm={{ span: 8, offset: 1 }} xl={{ span: 7, offset: 2 }}>
          <NavMenu/>
        </Col>

        <Col xs={24} md={{span: 15 }}>
          <div className='background-color'/>
          <Button className="etsy-button" type="primary" size="large">Etsy Store</Button>
          <PhotoSwipeGallery items={items} options={options} thumbnailContent={this.getThumbnailContent}/>
        </Col>
      </div>
    )
  }
}


export default ArtPage;
