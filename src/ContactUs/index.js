import React from "react";
import styles from './styles.module.css';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";
import { Link } from "react-scroll";

function ContactUs() {
  return (
    <div className="flex justify-between bg-[#090d4a] text-white p-3 md:p-16">
        <div className="flex flex-col justify-between">
        <div className="font-semibold text-sm md:text-lg ">Let's Plan Your Travel Journey Now With <div><img 
    src={`${process.env.PUBLIC_URL}/logo.png`} 
    alt="Travel Agency Logo" 
    className="w-full h-8 md:h-16 mt-5  md:mt-0 md:mb-0 mb-16" 
  /></div></div>
        <div className={`${styles.social_media} text-sm md:text-5xl`}><span className="text-base  md:text-3xl">Follow us on</span> <div className={styles.icon}><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaInstagram  style={{ color: 'white'}}/>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaFacebook style={{ color: 'white'}}/>
          </a>
          </div>
        </div>
        </div>
        <div className={`hidden flex-col md:flex lg:visible text-xl font-semibold gap-6`}> 
        <span style={{ color:'#CCB0FF' , fontWeight: '700' }} className="text-3xl font-bold">Navigations</span>
        <Link to="home" smooth={true} duration={500} className={styles.scroll_link}>Home</Link>
        <Link to="ticket-booking" smooth={true} duration={500} className={styles.scroll_link}>Ticket Booking</Link>
        <Link to="visa-booking" smooth={true} duration={500} className={styles.scroll_link}>Visa Booking</Link>
        <Link to="hotel-booking" smooth={true} duration={500} className={styles.scroll_link}>Hotel Booking</Link>
        <Link to="travel-insurance" smooth={true} duration={500} className={styles.scroll_link}>Travel Insurance</Link>
        <Link to="contact" smooth={true} duration={500} className={styles.scroll_link}>Contact Us</Link>

        </div>
        <div className="ml-8 flex flex-col justify-between gap-2">
            <div className="">
            <span style={{fontWeight: '600'}} className="flex content-center text-base  md:text-3xl mb-5">Contact Info</span>
            <div className="flex flex-row content-center text-base  md:text-3xl">
            <FaPhone className="mt-1 mr-2 md:mr-4 text-base md:text-3xl md:mb-4" />
            <span>7428857621 / 9810099767</span>
            </div>
            <div className="flex flex-row content-center text-base  md:text-3xl">
                <FaEnvelope className="mt-1 mr-2 md:mr-4 text-base md:text-3xl" />
                <span>asmservices5@asm5.co.in</span>
            </div>
            </div>
            <div className={styles.footer}> <FaMapMarker className="mt-1 mr-2 md:mr-4 text-2xl md:text-3xl md:pb-2" />
        <span className="mr-2 md:mr-4 text-md md:text-xl">23A- 23B DDA FLATS MANSAROVER PARK DELHI 110032</span></div>
        </div>
        

    </div>
  );
}

export default ContactUs;
