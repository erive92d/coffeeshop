import React from 'react';

const BackgroundImage = ({ imageUrl, children }) => {
    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

    };

    return (
        <div className={`min-h-screen`} style={backgroundStyle}>
            {children}
        </div>
    );
};

export default BackgroundImage;