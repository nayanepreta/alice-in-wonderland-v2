import React, { useEffect } from 'react';
import chapters from '../control/chapters';
import Navigation from './Navigation';

const Contents = ({ 
  goToChapter, 
  onPrev, 
  onNext, 
  goToCover,
  goToSummary,
  goToContents }) => {

  const chapterTitle = "Table of Contents";

      useEffect(() => {
        const bookTitleT = chapters[0].titulo; 
        document.title = `${chapterTitle} • ${bookTitleT}`;
        return () => {
          document.title = chapters[0].titulo; 
        };
      }, [chapterTitle]);

  return (
    <div 
      className="page menu">
      <img 
        className="icone_cabeco" 
        src="https://via.placeholder.com/25" 
        alt="Imagem Placeholder" loading="lazy"/>

    <table 
      className="menu_tabela">
      <tbody>
        <tr>
          <td 
            className="lista_topico">0</td>
          <td>
            <button 
              className="lista-item" 
              onClick={() => goToChapter(0)}>
              Capa
            </button>
          </td>
        </tr>

        {Object.entries(chapters).slice(1).map(([chapterNumber, chapterData], index) => (
          <tr key={chapterNumber}>
            <td 
              className="lista_topico">
                {chapterData.chap}
            </td>
            <td>
              <button 
                className="lista-item" 
                onClick={() => goToChapter(Number(chapterNumber) + 2)}>
                  {chapterData.title}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <Navigation 
        goToCover={goToCover} 
        onNext={onNext} 
        goToSummary={goToSummary} 
        goToContents={goToContents}/>
    </div>
  );
};

export default Contents;