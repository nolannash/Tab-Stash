import React, { useState } from "react";
import './popup.css';

const PlaceholderComponent = ({ quadrant, onBackClick }) => {
    return (
        <div className={`quadrant expanded`}>
            <button className="back-button" onClick={onBackClick}>Back</button>
            <p className="placeholder-text">Quadrant {quadrant}</p>
        </div>
    );
};

const Popup = () => {
    const [expandedQuadrant, setExpandedQuadrant] = useState(null);

    const handleQuadrantClick = (quadrant) => {
        setExpandedQuadrant(quadrant);
    };

    const handleBackClick = (event) => {
        event.stopPropagation();
        setExpandedQuadrant(null);
    };

    return (
        <div className="popup-container">
            {Array.from({ length: 4 }).map((_, index) => (
                <div
                    className={`quadrant quadrant-${index + 1} ${expandedQuadrant === index + 1 ? 'expanded' : ''}`}
                    key={index}
                    onClick={() => handleQuadrantClick(index + 1)}
                >
                    {expandedQuadrant === index + 1 ? (
                        <PlaceholderComponent quadrant={index + 1} onBackClick={handleBackClick} />
                    ) : (
                        <button className="quadrant-button">Quadrant {index + 1}</button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Popup;
