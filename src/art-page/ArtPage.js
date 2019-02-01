import React, { Component } from 'react';
import './ArtPage.css';


import { Col } from 'antd';
import photos from './GalleryApi';
import NavMenu from '../nav-menu/NavMenu';

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

class ArtPage extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
      <div className="art-color-underlay"/>
      <Col sm={{ span: 8, offset: 1 }} xl={{ span: 7, offset: 2 }}>
          <NavMenu/>
        </Col>
        <Col xs={24} md={{span: 15 }} style={{zIndex: 1000}}>
          <div className='background-color'/>
          <Gallery photos={photos} onClick={this.openLightbox} />
          <Lightbox images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        </Col>
      </div>
    )
  }
}


export default ArtPage;
