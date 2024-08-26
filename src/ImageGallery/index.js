import React from 'react';
import styles from './styles.module.css';

function ImageGallery({ imageUrls }) {
    return (
        <div className="w-full h-40 md:h-[400px] overflow-clip relative">
            <div className={styles.carousel_inner}>
                {imageUrls.map((url, index) => (
                <img key={index} src={url} alt={`Carousel Image ${index + 1}`} className={styles.image} />
                ))}
                {imageUrls.map((url, index) => (
                <img key={`duplicate-${index}`} src={url} alt={`Carousel Image ${index + 1}`} className={styles.image} />
                ))}
            </div>
        </div>
    );
}

export default ImageGallery;
