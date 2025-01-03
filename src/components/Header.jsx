import React, { useState, useEffect } from 'react';

const Header = () => {
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
      setIsHeaderVisible((prevState) => !prevState);
    }
    setLastTouchTime(currentTime);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouch);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouch);
    };
  }, [lastScrollTop, lastTouchTime]);

  if (!isHeaderVisible) return null;

  return (
    <div className="header">
      <div>
        <button>A+</button>
        <button>A-</button>
      </div>
      <div>
        <button>Download</button>
        <button>Noturno</button>
      </div>
    </div>
  );
};

export default Header;
