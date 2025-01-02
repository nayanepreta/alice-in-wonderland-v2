import React, { useState } from "react";

const Navigation = ({ onNext, goToSummary, goToContents, goToCover }) => {
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

  const handleFirstButtonClick = () => {
    setShowAdditionalButtons(!showAdditionalButtons);
  };

  return (
    <div className={`navigation ${showAdditionalButtons ? "show-extra-buttons" : ""}`}>
      {/* First Button */}
      <button onClick={handleFirstButtonClick}>
        <img
          src="https://raw.githubusercontent.com/nayanesenhorinha/abelhinha/refs/heads/main/src/assets/menu.png"
          alt="More Options"
          className="nav-icon"
          loading="lazy"
        />
      </button>

      {/* Additional Buttons */}
      <div
        className={`additional-buttons ${showAdditionalButtons ? "visible" : ""}`}
      >
        {goToSummary && <button onClick={goToSummary}>S</button>}
        {goToContents && <button onClick={goToContents}>C</button>}
      </div>

      {/* Cover Button */}
      {goToCover && (
        <button onClick={goToCover}>
          <img
            src="https://raw.githubusercontent.com/nayanesenhorinha/abelhinha/refs/heads/main/src/assets/casa.png"
            alt="Cover"
            className="nav-icon"
            loading="lazy"
          />
        </button>
      )}

      {/* Next Button */}
      {onNext && (
        <button onClick={onNext}>
          <img
            src="https://raw.githubusercontent.com/nayanesenhorinha/abelhinha/refs/heads/main/src/assets/depois.png"
            alt="Next"
            className="nav-icon"
            loading="lazy"
          />
        </button>
      )}
    </div>
  );
};

export default Navigation;
