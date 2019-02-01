import React, { Component } from 'react';
import { Col } from 'antd';
import './MusicPage.css';

import MusicPlayer from '../music-player/MusicPlayer';
import Events from '../events/Events';
import NavMenu from '../nav-menu/NavMenu';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faSpotify, faGooglePlay, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import playlist from './PlaylistAPI';

library.add(faApple, faSpotify, faGooglePlay, faSoundcloud);

class MusicPage extends Component {


  constructor() {
    super();
    this.state = {
      showComponent: false
    };
    this._onTrackClick = this._onTrackClick.bind(this);
    console.log(this._onTrackClick);
    }

  _onTrackClick() {
    this.setState({
      showComponent: true,
    });
  }

  componentDidMount() {
    this.init();
  }

  init() {
    let tracks = Array.prototype.slice.call( document.getElementsByClassName("track") )
    tracks.forEach((track, i) => {
      track.addEventListener('click', () => {
        setTimeout(() => {

          this.musicPlayer._playMusic(i)
        }, 100);
        tracks.forEach(element => {
          if (element.classList.contains('active')) {
            element.classList.remove('active')
          }
        });
        tracks[i].classList.add('active');
      });
    });
  }

  render() {
    return(
      <div className="music-page-container">
        <div className="music-color-underlay"></div>
        <div className="background">
          <Col sm={{ span: 4, offset: 1 }} xl={{ span: 4, offset: 2 }} id="nav-menu">
            <NavMenu></NavMenu>
          </Col>
          <Col sm={{ offset: 2, span: 20 }} md={{ offset: 8, span: 10 }} lg={{ offset: 10, span: 8 }} xl={{ offset: 10, span: 6 }}>
            <div className="title-container-1">
              <div className="rectangle"/>
              <h2 className="album-title">Young Soldier</h2>
            </div>
            <ul>
              {playlist.map((el, i) =>
                <li onClick={this._onTrackClick} className={`track track-${i}`} key={i} style={{listStyleType: 'none'}}>{ el.title }</li>
              )}
            </ul>
            <div className="title-container-2">
              <div className="rectangle"/>
              <h2 className="video-title">“No No More”</h2>
            </div>
            <div className="video-wrapper">
              <iframe title="musicVideo" id="myVideo" className="music-video" src="https://www.youtube.com/embed/pnojhQrQsOE?rel=0&loop=1;showinfo=0?theme=light&color=white"
                frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
            </div>
            <div style={{width:'330px'}}>
              <p className="purchase">Purchase Here</p>
              <div className="icons">
              <a href="https://itunes.apple.com/us/album/words/1371314381?i=1371314384" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="apple" icon={ faApple } />
              </a>
              <a href="https://open.spotify.com/album/0xKZdHbA8Ftrrry0V24wyV" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="spotify" icon={ faSpotify } />
              </a>
              <a href="https://play.google.com/store/music/album/Petite_Celine_Young_Soldier?id=Blkqdzvkjjvonb4bfnjz5vvfjd4" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="googlePlay" icon={ faGooglePlay } />
              </a>
              <a href="https://soundcloud.com/petite-celine/sets/young-soldier" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="soundcloud" icon={ faSoundcloud } />
              </a>
              </div>
            </div>
          </Col>
        </div>
        {this.state.showComponent &&
          <MusicPlayer playlist={playlist} ref={musicPlayer => (this.musicPlayer = musicPlayer)}/>
        }
        <Events/>
      </div>
    );
  }
}

export default MusicPage;