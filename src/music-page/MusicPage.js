import React, { Component } from 'react';
import { Col } from 'antd';
import './MusicPage.css';

import MusicPlayer from '../music-player/MusicPlayer';
import Events from '../events/Events';

const playlist = [
  {
    url: 'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
    cover: 'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    title: 'Despacito',
    artist: [
      'Luis Fonsi',
      'Daddy Yankee'
    ]
  },
  {
    url: 'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
    cover: 'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
    title: 'Bedtime Stories',
    artist: [
      'Jay Chou'
    ]
  },
  {
    url: 'http://res.cloudinary.com/alick/video/upload/v1502444212/Actor_ud8ccw.mp3',
    cover: 'http://res.cloudinary.com/alick/image/upload/v1502444304/actor_umzdur.jpg',
    title: '演员',
    artist: [
      '薛之谦'
    ]
  },
  {
    url: 'http://res.cloudinary.com/alick/video/upload/v1502444215/Bridge_of_Fate_aaksg1.mp3',
    cover: 'http://res.cloudinary.com/alick/image/upload/v1502444306/Bridge_of_Fate_o36rem.jpg',
    title: 'Bridge of Fate',
    artist: [
      '王力宏',
      '谭维维'
    ]
  },
  {
    url: 'http://res.cloudinary.com/alick/video/upload/v1502444222/Goodbye_byaom5.mp3',
    cover: 'http://res.cloudinary.com/alick/image/upload/v1502444310/Goodbye_hpubmk.jpg',
    title: 'Goodbye',
    artist: [
      'G.E.M.'
    ]
  }
]

class MusicPage extends Component {
  render() {
    return(
      <div className="music-page-container">
        <div class="background">
          <Col xs={{ offset: 2, span: 20 }} md={{ offset: 5, span: 10 }} lg={{ offset: 8, span: 7 }}
            // style={{ background: 'purple' }}
          >

            <h2 class="album-title">Young Soldier</h2>
            <ul>
              {playlist.map(el =>
                <li style={{listStyleType: 'none'}}>{ el.title }</li>
              )}
            </ul>

            <h2 class="video-title">“No No More”</h2>
            <div class="video-wrapper">
              <iframe id="myVideo" class="music-video" src="https://www.youtube.com/embed/pnojhQrQsOE?rel=0&loop=1;showinfo=0?theme=light&color=white"
                frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
            </div>

          </Col>
          {/* <MusicPlayer playlist={playlist} /> */}
        </div>

        <Events/>

      </div>
    );
  }
}

export default MusicPage;