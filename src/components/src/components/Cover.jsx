import React from 'react';
import Navigation from './Navigation';

const Cover = ({ 
  onNext, 
  goToSummary }) => {

  return (
    <div className="page cover">
      <h1>Capa do E-book</h1>
      <Navigation 
        onNext={onNext} 
        goToSummary={goToSummary} />
    </div>
  );
};

export default Cover;
