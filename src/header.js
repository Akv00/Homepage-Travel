import './App.css';
import { Link } from 'react-scroll';

function Header() {
  return (
    <div >
      <header className="App-header h-24 grid-cols-6">
      <Link to="home" smooth={true} duration={500} className="scroll-link text-2xl font-semibold hover:scale-125 transition-transform col-span-1 flex items-center justify-center h-full">Home</Link>
      <Link to="ticket-booking" smooth={true} duration={500} className="scroll-link text-2xl font-semibold hover:scale-125 transition-transform col-span-1 flex items-center justify-center h-full">Ticket Booking</Link>
      <Link to="visa-booking" smooth={true} duration={500} className="scroll-link text-2xl font-semibold hover:scale-125 transition-transform col-span-1 flex items-center justify-center h-full">Visa Booking</Link>
      <Link to="hotel-booking" smooth={true} duration={500} className="scroll-link text-2xl font-semibold hover:scale-125 transition-transform col-span-1 flex items-center justify-center h-full">Hotel Booking</Link>
      <Link to="travel-insurance" smooth={true} duration={500} className="scroll-link text-2xl font-semibold hover:scale-125 transition-transform col-span-1 flex items-center justify-center h-full">Travel Insurance</Link>
      <Link to="contact" smooth={true} duration={500} className="scroll-link text-2xl font-semibold hover:scale-125 transition-transform col-span-1 flex items-center justify-center h-full">Contact Us</Link>
    </header>
    </div>
  );
}

export default Header;