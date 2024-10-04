import './App.css';
import React from 'react';

import { AboutUs, FindUs,  Menu } from './container';
import { NavBar } from './components';
import { useTranslation } from 'react-i18next';
import News from './container/News/News';
import Gallery from './container/Gallery/Gallery';
import video from "./assets/promo_video.mp4"
import ClipLoader from "react-spinners/ClipLoader";

import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const [loading, setLoading] = React.useState(true);
  const [showLoader, setShowLoader] = React.useState(true);
// eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const location = useLocation();
  console.log('Current location:', location.pathname);

  React.useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        document.body.style.overflow = '';
        setTimeout(() => {
          setShowLoader(false);
        }, 1250);
      }, 250);
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [loading]);

  return (
    <>
      {showLoader && (
        <div className={`loading ${!loading ? 'fade-out' : ''}`}>
          <ClipLoader
            color="#CFB483"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <div className="app__top">
        {location.pathname !== "/" && <NavBar handleChangeLanguage={handleChangeLanguage} />}
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
          <div className='app__top-video_overlay flex__center' />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home setLoading={setLoading} handleChangeLanguage={handleChangeLanguage}/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<FindUs />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

function WrappedApp() {
  return (
    <Router basename="">
      <App />
    </Router>
  );
}

export default WrappedApp;
