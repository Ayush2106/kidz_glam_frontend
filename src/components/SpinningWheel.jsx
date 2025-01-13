import React, { useState } from 'react';
import samplespinimage from "./../images/spinwheel1.png";

const SpinningWheel = () => {
    const [showWheel, setShowWheel] = useState(true);

    const handleClose = () => {
        setShowWheel(false);
    };


    return (
        <div className={`spinning-wheel-container ${showWheel ? 'show' : 'hide'}`}>
            {showWheel && (
                <>
                    <span className='closebtnspinnserspann'>   <button className="close-button" onClick={handleClose}>X</button>  </span>
                    <img src={samplespinimage} alt="samplespin" className="spinning-wheel-img" />
                </>
            )}
        </div>
    );
};

export default SpinningWheel;
