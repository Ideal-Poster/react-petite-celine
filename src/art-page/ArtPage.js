import React, { Component } from 'react';
import './ArtPage.css';

import 'react-photoswipe/lib/photoswipe.css';

import {PhotoSwipeGallery} from 'react-photoswipe';
import { Col } from 'antd';

let items = [

  {
    src: require('../assets/gallery-images/Green Invasion - Light Only.jpg'),
    thumbnail: require('../assets/gallery-images/Green Invasion - Light Only.jpg'),
    w: 900,
    h: 900,
    description: 'Image 1'
  },
  {
    src: require('../assets/gallery-images/Green Invasion - Light.jpg'),
    thumbnail: require('../assets/gallery-images/Green Invasion - Light.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 2'
  },
  {
    src: require('../assets/gallery-images/Green Invasion.jpg'),
    thumbnail: require('../assets/gallery-images/Green Invasion.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 3'
  },
  {
    src: require('../assets/gallery-images/GypsyLynx - Light Only.jpg'),
    thumbnail: require('../assets/gallery-images/GypsyLynx - Light Only.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 4'
  },
  {
    src: require('../assets/gallery-images/GypsyLynx - Light.jpg'),
    thumbnail: require('../assets/gallery-images/GypsyLynx - Light.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 5'
  },
  {
    src: require('../assets/gallery-images/GypsyLynx in Smoke -Light.jpg'),
    thumbnail: require('../assets/gallery-images/GypsyLynx in Smoke -Light.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 6'
  },
  {
    src: require('../assets/gallery-images/GypsyLynx in Smoke- Light Only.jpg'),
    thumbnail: require('../assets/gallery-images/GypsyLynx in Smoke- Light Only.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 7'
  },
  {
    src: require('../assets/gallery-images/GypsyLynx in Smoke.jpg'),
    thumbnail: require('../assets/gallery-images/GypsyLynx in Smoke.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 8'
  },
     {
    src: require('../assets/gallery-images/GypsyLynx in Space - Light Only.jpg'),
    thumbnail: require('../assets/gallery-images/GypsyLynx in Space - Light Only.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 9'
  },
  {
    src: require('../assets/gallery-images/GypsyLynx in Space - Light.jpg'),
    thumbnail: require('../assets/gallery-images/GypsyLynx in Space - Light.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 10'
  },
  {
    src: require('../assets/gallery-images/GypsyLynx in Space.jpg'),
    thumbnail: require('../assets/gallery-images/GypsyLynx in Space.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 11'
  },
  {
    src: require('../assets/gallery-images/GypsyLynx.jpg'),
    thumbnail: require('../assets/gallery-images/GypsyLynx.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 12'
  },
  {
    src: require('../assets/gallery-images/Eclipse - Light.png'),
    thumbnail: require('../assets/gallery-images/Eclipse - Light.png'),
    w: 900,
    h: 1200,
    description: 'Image 13'
  },
  {
    src: require('../assets/gallery-images/Eclipse.png'),
    thumbnail: require('../assets/gallery-images/Eclipse.png'),
    w: 900,
    h: 1200,
    description: 'Image 14'
  },
  {
    src: require('../assets/gallery-images/Healing Hands - Glow Only.jpg'),
    thumbnail: require('../assets/gallery-images/Healing Hands - Glow Only.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 15'
  },
  {
    src: require('../assets/gallery-images/Healing Hands - Light Only.jpg'),
    thumbnail: require('../assets/gallery-images/Healing Hands - Light Only.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 16'
  },
     {
    src: require('../assets/gallery-images/Healing Hands - Light.jpg'),
    thumbnail: require('../assets/gallery-images/Healing Hands - Light.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 17'
  },
  {
    src: require('../assets/gallery-images/Healing Hands.jpg'),
    thumbnail: require('../assets/gallery-images/Healing Hands.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 18'
  },
  {
    src: require('../assets/gallery-images/Portal - Light Only.jpg'),
    thumbnail: require('../assets/gallery-images/Portal - Light Only.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 19'
  },
  {
    src: require('../assets/gallery-images/Portal - Light.jpg'),
    thumbnail: require('../assets/gallery-images/Portal - Light.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 20'
  },
  {
    src: require('../assets/gallery-images/Portal.jpg'),
    thumbnail: require('../assets/gallery-images/Portal.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 21'
  },
     {
    src: require('../assets/gallery-images/Tulips - Light Only_.jpg'),
    thumbnail: require('../assets/gallery-images/Tulips - Light Only_.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 22'
  },
  {
    src: require('../assets/gallery-images/Tulips - Light.jpg'),
    thumbnail: require('../assets/gallery-images/Tulips - Light.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 23'
  },
  {
    src: require('../assets/gallery-images/Tulips.jpg'),
    thumbnail: require('../assets/gallery-images/Tulips.jpg'),
    w: 900,
    h: 1200,
    description: 'Image 24'
  },
];

// let items = [
//   {
//     src: require('../assets/gallery-images/GypsyLynx - Light Only.jpg'),
//     thumbnail: require('../assets/gallery-images/GypsyLynx - Light Only.jpg'),
//     w: 900,
//     h: 1200,
//     title: 'Image 1'
//   },
//   {
//     src: 'http://lorempixel.com/1200/900/sports/2',
//     thumbnail: 'http://lorempixel.com/1200/900/sports/2',
//     w: 1200,
//     h: 900,
//     title: 'Image 2'
//   },
//   {
//     src: 'http://lorempixel.com/1200/900/sports/1',
//     thumbnail: 'http://lorempixel.com/1200/900/sports/1',
//     w: 1200,
//     h: 900,
//     title: 'Image 3'
//   },
//   {
//     src: 'http://lorempixel.com/1200/900/sports/1',
//     thumbnail: 'http://lorempixel.com/1200/900/sports/1',
//     w: 1200,
//     h: 900,
//     title: 'Image 4'
//   }
// ];

let options = {
  //http://photoswipe.com/documentation/options.html
};

class ArtPage extends Component {
  getThumbnailContent = (item) => {
    return (
      // <Col span={20} style={{background: 'brown'}}>
        <img src={item.thumbnail} width={120} height={90}/>

        // <p>hello</p>
      // </Col>
    );
  }

  render() {
    return (
      <Col span={16} style={{background: 'brown'}}>
        <div className='background-color'>hello</div>
        <PhotoSwipeGallery items={items} options={options} thumbnailContent={this.getThumbnailContent}/>
      </Col>
    )
  }
}


export default ArtPage;
