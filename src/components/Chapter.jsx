import React, { useEffect } from 'react';
import DOMPurify from 'dompurify';
import chapters from '../control/chapters';
import Header from '../components/Header';
import Navigation from './Navigation';

const Chapter = ({ chapterNumber, onNext, goToSummary, goToCover, goToContents }) => {
  const { title: chapterTitle, chap: chapterRoman, img: image, texts: chapterTexts } = chapters[chapterNumber];

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
      <Header />
      <div className="chapter_head">
        <span className="chapter_subtitle">Chapter {chapterRoman}</span>
        <h2 className="chapter_title">{chapterTitle}</h2>
        <img className="chapter_img_abertura" src={image} alt="" loading="lazy" />
      </div>

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
