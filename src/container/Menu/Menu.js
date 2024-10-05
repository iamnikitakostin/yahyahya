import React from 'react'

import "./Menu.css"
import { useTranslation } from 'react-i18next';

import images from '../../constants/images';
import { Carousel } from 'react-responsive-carousel';

import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";
import { GiCrossedAirFlows } from 'react-icons/gi';

import menuText from "../../constants/menuText.json";
import { Helmet } from 'react-helmet';

function Menu() {
  const [t] = useTranslation(["global"]);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [imagesLoaded, setImagesLoaded] = React.useState(false);

  const handleImageClick = (e) => {
    const imgSrc = e.target.lastChild.src
    setSelectedImage(imgSrc);
    document.body.style.overflow = 'hidden';
    
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  const handleImageLoad = () => {
    setImagesLoaded(true);
  }

  return (
    <div className='app__menu section__padding app__wrapper app__bg' id="menu">
      <Helmet>
        <title>Menu - Yah-Yah-Ya Ramen</title>
        <meta name="description" content="Explore the Yah-Yah-Ya Ramen menu including Iekei ramen, tsukemen, vegan options, and more. Find your favorite dish at the best ramen shop in Richmond."/>
        <meta name="keywords" content="menu, ramen menu, yah-yah-ya ramen, tsukemen, vegan ramen, best ramen in richmond, japanese ramen dishes, richmond ramen shop"/>
      </Helmet>
      <h1 className='headtext__tenor'>{t("navbar.menu")}</h1>
      
      <div className='app__menu-inventory'>
        <Carousel
            infiniteLoop={true} 
            dynamicHeight={true}
            emulateTouch={true} 
            showThumbs={false} 
            showStatus={true} 
            showIndicators={false}
            preventMovementUntilSwipeScrollTolerance={true}
            className='inventory-carousel'
        >
          <div className="inventory-item" onClick={(e) => handleImageClick(e)} onLoad={() => handleImageLoad()}>
            <img src={images.menu_front} alt="menu" loading='lazy' decoding='async'/>
          </div>
          <div className="inventory-item" onClick={(e) => handleImageClick(e)} onLoad={() => handleImageLoad()}>
            <img src={images.menu_back} alt="menu" loading='lazy' decoding='async'/>
          </div>
          <div className='inventory-item' onClick={(e) =>  handleImageLoad()}>
        <img src={images.menu_summer} alt="menu" loading='lazy' decoding='async'/>
      </div>
      </Carousel>

    

      
      </div>
      {!imagesLoaded && (
        <div className='app__menu-text'>
        <h2 className='p__tenor'>Ramen</h2>
        <div className='scrollable-container'>
          {menuText[0].map((item, index) => (
            <div key={index} className='menu-item'>
              <h3 className='p__tenor'>{item.name}</h3>
              <p>{item.description}</p>
              <div className='menu-sizes'>
                {item.sizes.map((size, i) => (
                  <p key={i}>
                    {size.size}: {size.price}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      
        <h2 className='p__tenor'>Sides</h2>
        <div className='scrollable-container'>
          {menuText[1].map((item, index) => (
            <div key={index} className='menu-item'>
              <p>{item.name}: {item.price}</p>
            </div>
          ))}
        </div>
      
        <h2 className='p__tenor'>Drinks</h2>
        <div className='scrollable-container'>
          {menuText[2].map((item, index) => (
            <div key={index} className='menu-item'>
              <h3 className='p__tenor'>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
       )}
      {selectedImage && (
        <div className="modal slide-bottom">
            <GiCrossedAirFlows
              fontSize={27}
              className='overlay__close'
              onClick={() => closeModal()}
              />
            <TransformWrapper initialScale={1}>
          {({ ...rest }) => (
          <TransformComponent>
              <img src={selectedImage} alt="menu" />
              </TransformComponent>
            )}
          </TransformWrapper>
          <div className="modal-overlay" onClick={closeModal}/>
        </div>
    
      )}

    </div>
  )
}

export default Menu