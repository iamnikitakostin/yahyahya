import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiCrossedAirFlows } from 'react-icons/gi';

import images from '../../constants/images';

import "./NavBar.css"
import { useTranslation } from 'react-i18next';
import { FaLanguage } from "react-icons/fa6";

function NavBar({handleChangeLanguage}) {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [t] = useTranslation("global");

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-top">
        <div className="app__navbar-logo">
          <a href='/yahyahya/#'><img src={images.logo} alt="logo" decoding='async'/></a>
        </div>
        <ul className='app__navbar-links'>
          <li className="p__opensans"><a href='/yahyahya/#'>{t("navbar.home")}</a></li>
          <li className="p__opensans"><a href='/yahyahya/#about'>{t("navbar.about")}</a></li>
          <li className="p__opensans"><a href='/yahyahya/#menu'>{t("navbar.menu")}</a></li>
          <li className="p__opensans"><a href='/yahyahya/#news'>{t("navbar.news")}</a></li>
          <li className="p__opensans"><a href='/yahyahya/#gallery'>{t("navbar.gallery")}</a></li>
          <li className="p__opensans"><a href='/yahyahya/#contact'>{t("navbar.contact")}</a></li>
        </ul>
        <div className="app__navbar-lang">
          <div className="dropdown">
              <button className="dropdown-button" aria-label='Language Change'><FaLanguage size={32} /></button>
              <div className="dropdown-content">
                  <button onClick={(e) => handleChangeLanguage((e.target.innerText).toLowerCase())}>EN</button>
                  <button onClick={(e) => handleChangeLanguage((e.target.innerText).toLowerCase())}>JA</button>
                  <button onClick={(e) => handleChangeLanguage(("zh").toLowerCase())}>CN</button>
              </div>
          </div>
        </div>
        <div className='app__navbar-order'>
          <a href='https://www.doordash.com/en-CA/store/yah-yah-ya-ramen-richmond-576879/' className='p__opensans' target='_blank' rel="noreferrer">Doordash</a>
          <div/>
          <a href='https://www.fantuanorder.com/store/yah-yah-ya-ramen/ca-5202/' className='p__opensans' target='_blank' rel="noreferrer">Fantuan</a>
        </div>
      </div>
      <div className="app__navbar-bottom">
        <div className="app__navbar-lang">
          <div className="dropdown">
              <button className="dropdown-button" aria-label='Language Change'><FaLanguage size={32} /></button>
              <div className="dropdown-content">
                  <button onClick={(e) => handleChangeLanguage((e.target.innerText).toLowerCase())}>EN</button>
                  <button onClick={(e) => handleChangeLanguage((e.target.innerText).toLowerCase())}>JA</button>
                  <button onClick={(e) => handleChangeLanguage(("zh").toLowerCase())}>CN</button>
              </div>
          </div>
        </div>
        <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <GiCrossedAirFlows
              fontSize={27}
              className='overlay__close'
              onClick={() => setToggleMenu(false)}
              />
            <ul className='app__navbar-smallscreen_links'>
              <li className="p__opensans"><a href='/yahyahya/#' onClick={() => setToggleMenu(false)}>{t("navbar.home")}</a></li>
              <li className="p__opensans"><a href='/yahyahya/#about' onClick={() => setToggleMenu(false)}>{t("navbar.about")}</a></li>
              <li className="p__opensans"><a href='/yahyahya/#menu' onClick={() => setToggleMenu(false)}>{t("navbar.menu")}</a></li>
              <li className="p__opensans"><a href='/yahyahya/#news' onClick={() => setToggleMenu(false)}>{t("navbar.news")}</a></li>
              <li className="p__opensans"><a href='/yahyahya/#gallery' onClick={() => setToggleMenu(false)}>{t("navbar.gallery")}</a></li>
              <li className="p__opensans"><a href='/yahyahya/#contact' onClick={() => setToggleMenu(false)}>{t("navbar.contact")}</a></li>
              <li className='app__navbar-order p__opensans'>
                <a href='https://www.doordash.com/en-CA/store/yah-yah-ya-ramen-richmond-576879/' onClick={() => setToggleMenu(false)} className='p__opensans' target='_blank' rel="noreferrer">Doordash</a>
                <div/>
                <a href='https://www.fantuanorder.com/store/yah-yah-ya-ramen/ca-5202/' onClick={() => setToggleMenu(false)} className='p__opensans' target='_blank' rel="noreferrer">Fantuan</a>
            </li>
            </ul>
          </div>
        )}
      </div>
      </div>
     
    </nav>
  )
}

export default NavBar