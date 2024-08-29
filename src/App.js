import './App.css';
import Header from './header';
import HomePage from './HomePage';
import Card from './Card';
import ContactUs from './ContactUs';
import ImageGallery from './ImageGallery';

const imageUrls = [
  'https://ik.imgkit.net/3vlqs5axxjf/TW/ik-seo/uploadedImages/Art/2023/0403/T0403TOOTBUS1_C_HR/Day-tours-bounce-back-in-big-cities-but-recovery-i.jpg?tr=w-780%2Ch-440%2Cfo-auto',

  'https://i.insider.com/5eac5a5d204ad316ae653b38?width=1200&format=jpeg',
  'https://media.cntraveler.com/photos/5fc6818f3cfe1de2cab79372/16:9/w_4496,h_2529,c_limit/Amsterdam-GettyImages-840603854.jpg',
  'https://travelphotodiscovery.com/wp-content/uploads/2020/06/Kenting-National-Park.jpg',
  'https://media.tacdn.com/media/attractions-splice-spp-674x446/12/5d/7f/ed.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJQKYAFKEbpQmgqv8mWkvDMD7RrvydYx7Z-A&s',
  'https://thumbor.bigedition.com/london/bfn8dpGEzcfGb4f1Iu7TcV9xIG4=/800x600/filters:format(webp):quality(80)/granite-web-prod/0f/65/0f65b5cea14d4695a6ecc4e2a8328e34.jpeg',
  'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/05/20163239/london-3.jpeg?tr=w-480,f-jpg,pr-true',
  'https://vietnamembassy-turkey.org/wp-content/uploads/2023/10/a-travel-guide-to-visit-vietnam-in-october-65276d434cfaa.jpg',
  'https://www.motorindiaonline.in/wp-content/uploads/2014/01/BRT-intro-1.jpg',
  'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/newscms/2016_41/1746356/161011brooklyn-bridge-walk-jsw-137p.jpg'

];


function App() {
  return (
    <div className="App bg-gradient-to-r from-cyan-400">
      <Header /> 
      <div id="home"><HomePage /></div>
      <div className="services font-serif text-5xl font-bold mb-5">Our Services</div>
      <div id="card" className="card ">
        <Card
                id="ticket-booking"
                imageSrc="https://okcredit-blog-images-prod.storage.googleapis.com/2021/09/gstonairtickets1.jpg"
                title="Ticket Booking"
                description="Book your tickets effortlessly with our user-friendly platform. Choose from a wide range of destinations and secure your seat in just a few clicks. Your journey starts here! "
                linkUrl="https://example.com"
                linkText="Book Now"
                position="left"
            />
        <Card
                id="visa-booking"
                imageSrc="https://media.cntraveler.com/photos/6488c0ef4c5fe8af9fb0e801/4:3/w_2652,h_1989,c_limit/Is-Your-Passport-Too-Torn-Up-to-Use_spencer-davis-0QcSnCM0aMc-unsplash.jpg"
                title="Visa Booking"
                description="Apply for your visa hassle-free with our streamlined online process. Get expert guidance, track your application status, and ensure a smooth approval journey. Simplify your travel plans today!"
                linkUrl="#"
                linkText="Book Now"
                position="right"
            />
        <Card
                id="hotel-booking"
                imageSrc="https://press.sripanwa.com/assets/uploads/data_img/8cf6c-01_01_phuket-thai-food-restaurant-baba-top01-soul-food-restaurant-phuket-thailand-hi-picture-restaurant.jpg"
                title="Hotel Booking"
                description="Find your perfect stay with our easy-to-use hotel booking platform. Explore a wide range of accommodations, compare prices, and secure the best deals. Book now for a comfortable and convenient experience!"
                linkUrl="https://example.com"
                linkText="Book Now"
                position="left"
            />
        <Card
                id="travel-insurance"
                imageSrc="https://img.freepik.com/premium-photo/traveler-insurance-concept-with-toy-airplane_102583-3094.jpg"
                title="Travel Insurance"
                description="Protect your journey with our comprehensive travel insurance plans. Enjoy peace of mind with coverage for medical emergencies, trip cancellations, and more. Secure your travel today with flexible and affordable options!"
                linkUrl="https://example.com"
                linkText="Get Now"
                position="right"
        />
        </div>
        <ImageGallery imageUrls={imageUrls}></ImageGallery>
        <div id="contact"><ContactUs></ContactUs></div>
        
      
    </div>
  );
}

export default App;
