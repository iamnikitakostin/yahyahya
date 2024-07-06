import React from 'react';
import "./NewsModal.css"; // Add styles for the modal here
import { GiCrossedAirFlows } from 'react-icons/gi';
import { Carousel } from 'react-responsive-carousel';
import YouTube from 'react-youtube';

const importImages = (imageFilenames) => {
  return imageFilenames.map(filename => ({
    file: require(`../../assets/news_pictures/${filename}`),
    alt: filename.split('.')[0]
  }));
};

const NewsModal = ({ newsItem, onClose }) => {
  const gallery = newsItem.images ? importImages(newsItem.images) : [];
  console.log(newsItem)
  return (
    <div className="modal__container slide-bottom">
       <GiCrossedAirFlows
              fontSize={27}
              className='overlay__close'
              onClick={onClose}
              color='white'
              />
      <div className="modal__content">
        <h1 className='p__tenor'>{newsItem.title}</h1>
        <p className='p__opensans'>{newsItem.date}</p>
        <p className='p__opensans' style={{whiteSpace: "pre-line"}}>{newsItem.content}</p>
        {newsItem.images && (
          <Carousel 
              infiniteLoop={true} 
              dynamicHeight={false}
              emulateTouch={true} 
              showThumbs={false} 
              showStatus={true} 
              showIndicators={false}
              preventMovementUntilSwipeScrollTolerance={true}
              className='modal__gallery'
          >
          {gallery.map((picture, index) => (
              <div className='gallery__item' key={index}>
                  <div className="gallery__item-img">
                      <img src={picture.file} alt={picture.alt} loading='lazy' decoding='async'/>
                  </div>
              </div>
          ))}
          
          </Carousel>
        )}
        {newsItem.video && (<YouTube videoId={newsItem.video} className='youtube'/>)}
      </div>
    </div>
  );
};

export default NewsModal;
