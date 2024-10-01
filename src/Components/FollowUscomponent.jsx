import { FaInstagram } from 'react-icons/fa';

const FollowUscomponent = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8 mb-8">
        {['insta-1.jpg', 'insta-2.jpg', 'insta-3.jpg', 'insta-4.jpg', 'insta-5.jpg'].map((imgSrc, index) => (
          <div 
            key={index} 
            className="relative w-full h-[300px] sm:h-[360px] group cursor-pointer rounded-md overflow-hidden"
          >
            {/* Image */}
            <img className="w-full h-full object-cover" src={`./images/${imgSrc}`} alt="insta" />
            
            {/* Hover Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 rounded-md">
              <FaInstagram className="text-white text-4xl mb-2" />
              <p className="text-white text-lg">Follow us @florist</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FollowUscomponent;
