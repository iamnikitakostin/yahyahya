import React from 'react'
import video from "../assets/promo_video.mp4"
import { AboutUs, FindUs, Header, Menu } from '../container';
import News from '../container/News/News';
import Gallery from '../container/Gallery/Gallery';
import { NavBar } from '../components';
import { Helmet } from 'react-helmet';

function Home({setLoading, handleChangeLanguage}) {
    return (
        <div>
          <Helmet>
            <title>Yah-Yah-Ya - Most Authentic Iekei Ramen in Richmond, BC</title>
            <meta name="description" content="Discover the best iekei ramen in Richmond, BC at Yah-Yah-Ya Ramen near Aberdeen Centre. Explore our delicious ramen menu including vegan options, tsukemen, and more. Read reviews, view photos, and visit the top ramen shop in Richmond. 家家家, 味千拉面, and more."/>
            <meta name="keywords" content="ramen shop, best ramen in richmond bc, yah-yah-ya ramen richmond reviews, 味千拉面, yayaya, 味千拉麵, ramen places richmond, ya, food near me, ya ya ya, 家家家 ラーメン, ramenya menu, best ramen in richmond, ya ramen, yah-yah-ya ramen, yaya ramen richmond, raman ya, best ramen richmond bc, yah-yah-ya ramen richmond photos, ya ya yah, 家家家拉面, ramen yah, ramen, yaya, vegan ramen richmond, raman richmond, ya ya ramen, yah-yah-ya ramen menu, yah ya, yah yah ya ramen richmond, ramen in richmond bc, ramen place richmond, yah yah, japanese ramen richmond, 家家家 richmond, ramen richmond bc, ya ya yah ramen, yaya ramen, best ramen richmond, tsukemen richmond, 家家家拉麵, yah, yah yah ya, yah yah ramen, yahyahya menu, yah yah yah, yah-yah-ya ramen richmond menu, ramen ya, ramen near me, richmond ramen, ramen ya menu, yahyahya, ramen in richmond, yah-yah-ya ramen richmond, 家家家, yah yah ya ramen, ya ya ya ramen, yayaya ramen, yah yah yah ramen, ramen richmond, ramen shop, best ramen in richmond bc, yah-yah-ya ramen richmond reviews, 味千拉面, yayaya, 味千拉麵, ramen places richmond, ya, food near me, ya ya ya, 家家家 ラーメン, ramenya menu, best ramen in richmond, ya ramen, yah-yah-ya ramen, yaya ramen richmond, raman ya, best ramen richmond bc, yah-yah-ya ramen richmond photos, ya ya yah, 家家家拉面, ramen yah, ramen, yaya, vegan ramen richmond, raman richmond, ya ya ramen, yah-yah-ya ramen menu, yah ya, yah yah ya ramen richmond, ramen in richmond bc, ramen place richmond, yah yah, japanese ramen richmond, 家家家 richmond, ramen richmond bc, ya ya yah ramen, yaya ramen, best ramen richmond, tsukemen richmond, 家家家拉麵, yah, yah yah ya, yah yah ramen, yahyahya menu, yah yah yah, yah-yah-ya ramen richmond menu, ramen ya, ramen near me, richmond ramen, ramen ya menu, yahyahya, ramen in richmond, yah-yah-ya ramen richmond, 家家家, yah yah ya ramen, ya ya ya ramen, yayaya ramen, yah yah yah ramen, ramen richmond"/>
          </Helmet>
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