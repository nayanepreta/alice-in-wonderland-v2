import React from 'react';

const Header = () => {
  return (
    <header className="header">

      <button
        className="header-button header-button-summary"
      >
    Sumário
      </button>
      <button
        className="header-button header-button-nightmode"
        onClick={() => {
          console.log("Botão Modo Noturno clicado!");
        }}
      >
        Noturno
      </button>

      
    </header>
  );
};

export default Header;
