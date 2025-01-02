import React from 'react';
import chapters from '../control/chapters';


const Cover = ({ 
  onNext, 
  }) => {

    const { 
      titulo: titulo, 
      autor: autor,
      editora: editora} = chapters[0]; 

  return (
    <div className="cover">
    <img className="capa" src="https://raw.githubusercontent.com/nayanepreta/alice-in-wonderland/refs/heads/main/src/assets/capa.png" alt="" />

      <h1 className="cover_titulo">{titulo}</h1>

      <p className="cover_nome_autor">{autor}</p>

      <img 
        className="cover_logo_editora" 
        src="https://via.placeholder.com/25" 
        alt={editora} loading="lazy"/>
      <div className="navigation">
      
      <button onClick={onNext}>
          <img
            src="https://raw.githubusercontent.com/nayanesenhorinha/abelhinha/refs/heads/main/src/assets/depois.png"
            alt="Next"
            className="nav-icon"
            loading="lazy"
          />
        </button>
      </div>
      
    </div>
  );
};

export default Cover;
