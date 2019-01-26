import React, { Component } from 'react';
import './ArtPage.css';

import 'react-photoswipe/lib/photoswipe.css';
import {PhotoSwipeGallery} from 'react-photoswipe';
import { Row, Col, Button } from 'antd';
import items from './GalleryApi';


let options = {
  //http://photoswipe.com/documentation/options.html
};

class ArtPage extends Component {
  getThumbnailContent = (item) => {
    return (
      <img src={item.thumbnail} width={120} height={90}/>
    );
  }

  render() {
    return (
      <div>
            {/* <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col> */}


        <Col sm={24} md={16}>
          <div className='background-color'/>
          <Button className="etsy-button" type="primary" size="large">Etsy Store</Button>
          <PhotoSwipeGallery items={items} options={options} thumbnailContent={this.getThumbnailContent}/>
        </Col>

      </div>
    )
  }
}


export default ArtPage;
