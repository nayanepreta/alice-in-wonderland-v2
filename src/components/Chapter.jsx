import React, { useState, useEffect } from "react";
import DOMPurify from 'dompurify';
import chapters from '../control/chapters';
import Header from '../components/Header';
import Navigation from './Navigation';

const Chapter = ({ chapterNumber, onNext, goToSummary, goToCover, goToContents }) => {
  const { title: chapterTitle, chap: chapterRoman, img: image, texts: chapterTexts } = chapters[chapterNumber];
  
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [lastTouchTime, setLastTouchTime] = useState(0);

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop < lastScrollTop) {
      setIsHeaderVisible(true);
    } else {
      setIsHeaderVisible(false);
    }

    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); 
  };

  const handleTouch = (e) => {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastTouchTime;

    if (timeDifference < 300) { 
      setIsHeaderVisible(prevState => !prevState);
    }
    setLastTouchTime(currentTime); 
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouch);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [lastScrollTop, lastTouchTime]);

  useEffect(() => {
    const bookTitleT = chapters[0].titulo;
    document.title = `${chapterTitle} | ${bookTitleT}`;
    window.scrollTo(0, 0);
    return () => {
      document.title = chapters[0].titulo;
    };
  }, [chapterTitle]);

  return (
    <div className="page chapter_page">
      {isHeaderVisible && <Header />}

      <span className="chapter_subtitle">Capítulo {chapterRoman}</span>
      <h2 className="chapter_title">{chapterTitle}</h2>
      <img className="chapter_img_abertura" src={image} alt="" loading="lazy" />

      <div className="chapter_content">
        {chapterTexts.map((paragraph, index) => (
          <p
            className={paragraph.className}
            key={index}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(paragraph.text) }}
          ></p>
        ))}
      </div>

      <Navigation 
        goToCover={goToCover} 
        onNext={onNext} 
        goToSummary={goToSummary} 
        goToContents={goToContents}
      />
    </div>
  );
};

export default Chapter;
