import React from 'react';
import "./FindUs.css";
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import { SiDoordash } from "react-icons/si";
import { TbCircleLetterF } from "react-icons/tb";

import images from '../../constants/images';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';


function FindUs() {
  const [t] = useTranslation("global");

  return (
    <div className='app__findUs app__wrapper section__padding' id="contact">
      <Helmet>
        <title>Contact Us - Yah-Yah-Ya Ramen</title>
        <meta name="description" content="Get in touch with Yah-Yah-Ya Ramen in Richmond, BC. Find our contact details, location, and hours of operation."/>
        <meta name="keywords" content="contact us, yah-yah-ya ramen, ramen shop contact, richmond ramen location, ramen restaurant address, ramen hours of operation"/>
      </Helmet>
      <div className="app__findUs-info">
        <h1 className='headtext__tenor'>{t("contact.title")}</h1>
        <div className='findUs__location'>
          <h2>{t("contact.address.title")}</h2>
          <p className='p__opensans'>8388 Capstan Way #1423, Richmond, BC V6X 4B6</p>
        </div>
        <div className='findUs__hours'>
          <h2>{t("contact.hours.openHours")}</h2>
          <ul>
            <li className='p__opensans' style={{whiteSpace: "pre-line"}}>{t("contact.hours.hoursInfo.open")}</li>
            <li className='p__opensans'>{t("contact.hours.hoursInfo.closed")}</li>
          </ul>
        </div>
        <div className="findUs__contacts">
        <h2>{t("contact.callUs")}</h2>
          <p className='p__opensans'>+1 (604) 285-5113</p>
        </div>
        <div className='horizontal__divider'/>
        <div className='findUs__identity-social'>
          <a href='https://www.instagram.com/yah_yah_yaramen/' target='_blank' rel="noreferrer"><div aria-label='instagram'><BsInstagram size="1.5rem" color='#aa2fb7'/></div></a>
          <a href='https://www.facebook.com/richmondyahyahya/' target='_blank' rel="noreferrer"><div aria-label='facebook'><BsFacebook size="1.5rem" color='#0765ff'/></div></a>
          <a href='https://www.doordash.com/en-CA/store/yah-yah-ya-ramen-richmond-576879/' target='_blank' rel="noreferrer"><div aria-label='doordash'><SiDoordash size="1.5rem" color='#eb1600'/></div></a>
          <a href='https://www.fantuanorder.com/store/yah-yah-ya-ramen/ca-5202/' target='_blank' rel="noreferrer"><div aria-label='fantuan'><TbCircleLetterF size="1.5rem" color='#15c2c2'/></div></a>
        </div>
      </div>
      <div className="app__findUs-identity">
        <div className="identity-logo">
          <img src={images.logo} alt="logo" decoding='async' loading='lazy'/>
        </div>
        <div className='identity-map'>
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.6952126915376!2d-123.128834!3d49.1873699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867520db6844a5%3A0x50ea8bc941932225!2sYah-Yah-Ya%20Ramen%20Richmond!5e0!3m2!1sen!2sca!4v1702835385846!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        <div className='app__developer' style={{marginTop: "1rem"}}>
          <p className='p__opensans'>Developed by <a href='https://nikitakostin.com' target='_blank' rel="noreferrer" style={{textDecoration: "underline"}}>Nikita Kostin</a></p>
        </div>
      </div>

    </div>
  )
}

export default FindUs