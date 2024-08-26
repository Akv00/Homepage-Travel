import React from "react";
import styles from './styles.module.css';

function Card({ id,imageSrc, title, description ,linkUrl,linkText,position}) {
    const cardClass= position==='left' ? styles.card_left:styles.card_right;
    return (
        <div id= {id} className={`flex content-center bg-white rounded-lg mb-5 h-[220px] md:h-[80vh]  ${cardClass}`}>
            <div>
            <img src={imageSrc} alt="Card image" className="w-[50vw] h-[220px] md:h-[80vh]" /></div>
            <div className="flex flex-col w-[50vw] justify-center">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.card_link_box}>
                    <button
                        className={styles.card_button}
                        onClick={() => window.location.href = linkUrl}
                    >
                        {linkText}
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default Card;
