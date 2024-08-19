import React from 'react';
import styles from './styles.module.css';

function ImageGallery({ imageUrls }) {
    return (
        <div className={styles.carousel}>
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
