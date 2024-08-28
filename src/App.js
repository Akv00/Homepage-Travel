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
      <div id="card" className="card">
         
        <Card
                id="ticket-booking"
                imageSrc="https://okcredit-blog-images-prod.storage.googleapis.com/2021/09/gstonairtickets1.jpg"
                title="Ticket Booking"
                description="Book your "
                linkUrl="https://example.com"
                linkText="Book Now"
                position="left"
            />
        <Card
                id="visa-booking"
                imageSrc="https://media.cntraveler.com/photos/6488c0ef4c5fe8af9fb0e801/4:3/w_2652,h_1989,c_limit/Is-Your-Passport-Too-Torn-Up-to-Use_spencer-davis-0QcSnCM0aMc-unsplash.jpg"
                title="Card Title 1"
                description="This is some text over the card image."
                linkUrl="#"
                linkText="Book Now"
                position="right"
            />
        <Card
                id="hotel-booking"
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKN4wL0OVMx2QzZtO1-rrZO-Sn1o8-pK7H6A&s"
                title="Card Title 1"
                description="This is some text over the card image."
                linkUrl="https://example.com"
                linkText="Book Now"
                position="left"
            />
        <Card
                id="travel-insurance"
                imageSrc="https://s28126.pcdn.co/blogs/ask-experian/wp-content/uploads/Southwest-Rapid-Rewards%C2%AE-Plus-Credit-Card-When-All-You-Need-Are-the-Basics-1400x933-1.jpg.optimal.jpg"
                title="Card Title 2"
                description="Another example of text over a different image."
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
