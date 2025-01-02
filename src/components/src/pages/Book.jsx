import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable'; 

import '../control/copy';
import '../styles/ebook.css';

import Cover from '../components/Cover';
import Infos from '../components/Infos';
import Summary from '../components/Summary';
import Chapter1 from '../chapters/Chapter1';
import Chapter2 from '../chapters/Chapter2';
import Contents from '../components/Contents';

const Book = () => {

  const [currentPage, setCurrentPage] = useState(0);

  const setCurrentPageAndSave = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      localStorage.setItem('currentPage', page); 
    }
  };
  
  const pages = [

    <Cover 
      goToSummary={() => setCurrentPageAndSave(2)}
      onNext={() => setCurrentPageAndSave(1)} 
      goToContents={() => setCurrentPageAndSave('menu')} />,

    <Infos // 1
      onNext={() => setCurrentPageAndSave(2)} 
      goToCover={() => setCurrentPageAndSave(0)}
      goToSummary={() => setCurrentPageAndSave(2)}
      goToContents={() => setCurrentPageAndSave('menu')} />,

    <Summary />,

    <Chapter1 // 3
      onNext={() => setCurrentPageAndSave(4)} 
      goToContents={() => setCurrentPageAndSave('menu')} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(2)}/>,
      
    <Chapter2 // 4
      //onNext={() => setCurrentPageAndSave(7)} 
      goToContents={() => setCurrentPageAndSave('menu')} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(2)}/>,

    // Continue adicionando os capítulos na ordem desejada
  ];

    // salvar a páginas
  //useEffect(() => {
    //const savedPage = localStorage.getItem('currentPage');
    //if (savedPage) {
      //setCurrentPage(savedPage === 'menu' ? 'menu' : parseInt(savedPage, 10));
    //}
  //}, []);

  const handleSwipeLeft = () => {
    if (currentPage !== 'menu' && currentPage < pages.length - 1) {
      setCurrentPageAndSave(currentPage + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentPage !== 'menu' && currentPage > 0) {
      setCurrentPageAndSave(currentPage - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      {currentPage === 'menu' ? (
        <Contents 
          goToChapter={(pageIndex) => setCurrentPageAndSave(pageIndex)}
        />
      ) : (
        <div {...swipeHandlers}>
          {pages[currentPage]}
        </div>
      )}
    </>
  );
};

export default Book;
