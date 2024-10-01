import { useNavigate } from "react-router-dom";

const HeadingComponent = ({ headingText, pageText }) => {
  // useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // Function to navigate to the home page
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div 
      // Container with background image and responsive height
      className="relative w-full h-48 flex items-center justify-center bg-cover bg-center md:h-60 lg:h-72" 
      style={{ backgroundImage: `url('/images/breadcrumb-bg.jpg')` }}
    >
      {/* Flex container to center content with responsive padding */}
      <div className="flex items-center space-x-4 px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Heading text with responsive font size */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            {headingText}
          </h1>
          
          {/* Breadcrumb navigation with responsive text size */}
          <div className="flex items-center text-sm md:text-base space-x-2 mt-2">
            {/* Home link that triggers navigation */}
            <span onClick={goToHome} className="text-pink-500 cursor-pointer">
              HOME
            </span>
            {/* Separator */}
            <span>|</span>
            {/* Current page text */}
            <span>{pageText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingComponent;

