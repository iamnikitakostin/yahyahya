import React from 'react'

import "./Header.css"

import images from '../../constants/images';
import { useTranslation } from 'react-i18next';

function Header() {
  const [t] = useTranslation("global");
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <h1 className="app__header-h1">{t("banner.title")}</h1>
        <p className="p__opensans" style={{ margin: "0 0 1rem 0"}}>{t("banner.subtitle")}</p>
        <button type="button" className="custom__button"><a href="#menu">{t("banner.button")}</a></button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.header01} alt="ramen header" />
      </div>
    </div>
  )
}

export default Header