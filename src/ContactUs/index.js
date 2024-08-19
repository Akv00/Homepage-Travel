import React from "react";
import styles from './styles.module.css';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";
import { Link } from "react-scroll";

function ContactUs() {
  return (
    <div className={styles.contactUs}>
        <div className={styles.intro}>
        <div className={styles.company}>Let's Plan Your Travel Journey Now With <br></br><span style={{ color: '#CCB0FF' }}>Tavel Agency Name</span></div>
        <div className={styles.social_media}><span>Follow us on</span> <div className={styles.icon}><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaInstagram  style={{ color: 'white'}}/>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaFacebook style={{ color: 'white'}}/>
          </a>
          </div>
        </div>
        </div>
        <div className={styles.navigations}> 
        <span style={{ color:'#CCB0FF' , fontWeight: '600' }}>Navigations</span>
        <Link to="home" smooth={true} duration={500} className={styles.scroll_link}>Home</Link>
        <Link to="ticket-booking" smooth={true} duration={500} className={styles.scroll_link}>Ticket Booking</Link>
        <Link to="visa-booking" smooth={true} duration={500} className={styles.scroll_link}>Visa Booking</Link>
        <Link to="hotel-booking" smooth={true} duration={500} className={styles.scroll_link}>Hotel Booking</Link>
        <Link to="travel-insurance" smooth={true} duration={500} className={styles.scroll_link}>Travel Insurance</Link>
        <Link to="contact" smooth={true} duration={500} className={styles.scroll_link}>Contact Us</Link>

        </div>
        <div className={styles.contact}>
            <div className={styles.header}>
            <span style={{fontWeight: '600'}}>Contact Info</span>
            <div className={styles.contactItem}>
            <FaPhone className={styles.icon} />
            <span>phone no.</span>
            </div>
            <div className={styles.contactItem}>
                <FaEnvelope className={styles.icon} />
                <span>emailhere@gmail.com</span>
            </div>
            </div>
            <div className={styles.footer}> <FaMapMarker className={styles.icon} />
        <span>1234 Travel St, Wanderlust City, TX 12345</span></div>
        </div>
        

    </div>
  );
}

export default ContactUs;
