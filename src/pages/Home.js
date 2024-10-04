import React from 'react'
import video from "../assets/promo_video.mp4"
import { AboutUs, FindUs, Header, Menu } from '../container';
import News from '../container/News/News';
import Gallery from '../container/Gallery/Gallery';
import { NavBar } from '../components';

function Home({setLoading, handleChangeLanguage}) {
    return (
        <div>
          <div className="app__top">
            <NavBar handleChangeLanguage={handleChangeLanguage}/>
            <Header />
            <div className='app__top-video flex__center'>
              <video
              src={video}
              type="video/mp4"
              muted
              loop
              controls={false}
              autoPlay
              playsInline
              onLoadedData={() => setLoading(false)}
              />
              <div className='app__top-video_overlay flex__center'/>
            </div>
          </div>
    
          <AboutUs />
          <Menu />
          <News />
          <Gallery />
          <FindUs />
        </div>
      );
}

export default Home