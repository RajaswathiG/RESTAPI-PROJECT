import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Advertisement.css';
const Advertisement = () =>  {
    // Define the desired height for the carousel (e.g., 300px)
    
  return (
    <div >
   
    <Carousel  className="custom-carousel" >    
    
      <Carousel.Item className="custom-image">
        <img
        
          src="https://media.istockphoto.com/id/589415708/photo/fresh-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=aBFGUU-98pnoht73co8r2TZIKF3MDtBBu9KSxtxK_C0="
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="custom-image">

        <img
          
          src="https://img.freepik.com/free-photo/fruit-basket-holds-abundance-healthy-variety-generated-by-ai_188544-13371.jpg?size=626&ext=jpg/500x400"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="custom-image">
   <img
         
          src="https://img.freepik.com/free-photo/fruit-plate-with-watermelon-greengage-plum-grape-peach-apricot-strawberry-melon-cherry_141793-2242.jpg?size=626&ext=jpg&ga=GA1.2.1241305548.1693888692&semt=ais"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="custom-image">
        <img
          
          src="https://img.freepik.com/free-photo/top-view-delicious-fruit-salad-inside-plate-with-fresh-fruits-gray-tropical-fruit-tree-exotic-ripe-diet-photo_140725-109951.jpg?size=626&ext=jpg&ga=GA1.2.1241305548.1693888692&semt=ais"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Item components for additional slides */}
    </Carousel>
    </div>
  );
};

export default Advertisement;
