// ReviewPage.js
import { useState } from 'react';
import { useSelector } from 'react-redux';
import HeadingComponent from './HeadingComponent';
import { useNavigate } from 'react-router-dom';

const ReviewComponent = () => {
  // Getting data from Redux 
  const productSlice = useSelector((state) => state.counter.value);
  const [reviews, setReviews]     = useState([]); // Local state for reviews
  const [newReview, setNewReview] = useState({ name: '', rating: 1, comment: '' }); // Local state for new review


  // use navigaete 
  const navigate = useNavigate();


  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews((prev) => [
      ...prev,
      { id: prev.length + 1, ...newReview },
    ]);
    setNewReview({ name: '', rating: 1, comment: '' }); // Reset the form
  };
  
   // dispatch to the details page
   const handleReview = () => {
    navigate('/review');
  };

  return ( 
    <>
    <HeadingComponent headingText="Reviews" pageText="Reviews" />
      <div className="container mx-auto p-8">
      

      {/* Existing Reviews */}
      <div className="mb-8">
        {reviews.map((review) => (
          <div key={review.id} className="border p-4 mb-4 rounded shadow">
            <h3 className="font-bold">{review.name} - {review.rating} Stars</h3>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      {/* New Review Form */}
      <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-pink-500 focus:border-pink-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <select
            name="rating"
            value={newReview.rating}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-pink-500 focus:border-pink-500"
          >
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Comment</label>
          <textarea
            name="comment"
            value={newReview.comment}
            onChange={handleInputChange}
            required
            rows="4"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-pink-500 focus:border-pink-500"
          />
        </div>
        <button
          onClick={handleReview}
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-200"
        >
          Submit Review
        </button>
      </form>
    </div>
    </>
    
  );
};

export default ReviewComponent;
