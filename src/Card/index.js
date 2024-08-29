import React,{useEffect,useState,useRef} from "react";
import styles from './styles.module.css';
import 'intersection-observer';

function Card({ id,imageSrc, title, description ,linkUrl,linkText,position}) {
     const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    console.log('IntersectionObserver supported:', 'IntersectionObserver' in window);

    
    useEffect(() => {
        console.log('useEffect ran');
        console.log('cardRef.current:', cardRef.current);
        const observer = new IntersectionObserver(([entry]) => {
            console.log('Intersection Observer:', entry.isIntersecting);
            setIsVisible(entry.isIntersecting);
        }, { threshold: 0.1 });

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);
    const cardClass= position==='left' ? styles.card_left:styles.card_right;
    const imageClass = isVisible ? 
        (position === 'left' ? styles.animate_right : styles.animate_left) : '';
        console.log(isVisible);
    return (
        <div id= {id} className={`${styles.card} ${cardClass}`} ref={cardRef}>
            <div>
                
            <img src={imageSrc} alt="Card image" className={styles.card_image} /></div>
            <div className={styles.card_text}>
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
