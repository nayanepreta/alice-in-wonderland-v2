import React, { useEffect } from 'react';
import DOMPurify from 'dompurify';
import chapters from '../control/chapters';
import Navigation from './Navigation';
import Header from '../components/Header';

const Chapter = ({ chapterNumber, onNext, goToSummary, goToCover, goToContents }) => {
  const { title: chapterTitle, chap: chapterRoman, img: image, texts: chapterTexts } = chapters[chapterNumber];

  useEffect(() => {
    const bookTitleT = chapters[0].titulo;
    document.title = `${chapterTitle} • ${bookTitleT}`;
    return () => {
      document.title = chapters[0].titulo;
    };
  }, [chapterTitle]);

  return (
    <div className="page chapter_page">
      <Header  />
      <span className="chapter_subtitle">Capítulo {chapterRoman}</span>
      <h2 className="chapter_title">{chapterTitle}</h2>
      <img className="chapter_img_abertura" src={image} alt="" loading="lazy"/>

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
        goToContents={goToContents}/>
    </div>
  );
};

export default Chapter;
