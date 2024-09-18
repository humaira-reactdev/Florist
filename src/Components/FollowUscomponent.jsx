import { FaInstagram } from 'react-icons/fa';

const FollowUscomponent = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-between overflow-hidden mt-[30px] mb-[30px] space-x-4">
          {['insta-1.jpg', 'insta-2.jpg', 'insta-3.jpg', 'insta-4.jpg', 'insta-5.jpg'].map((imgSrc, index) => (
            <div 
              key={index} 
              className="relative w-[236px] h-[360px] group cursor-pointer rounded-md overflow-hidden"
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
    </>
  )
}

export default FollowUscomponent;
