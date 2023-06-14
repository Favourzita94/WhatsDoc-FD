import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewRating = () => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const fetchReviews = async () => {
          try {
            const response = await axios.get('/api/reviews');
            setReviews(response.data.reviews);
          } catch (error) {
            console.error('Failed to fetch reviews:', error);
          }
        };
    
        fetchReviews();
      }, []);
  
    const handleReviewSubmit = async (event) => {
      event.preventDefault();
  
      // Create the review object
      const newReviewData = {
        review: newReview,
        rating: rating,
      };
  
      try {
        // Send the review data to the backend API for storage
        const response = await axios.post('/api/reviews', newReviewData);
        // Update the reviews state with the newly created review
        setReviews([...reviews, response.data.review]);
        // Reset form fields
        setNewReview('');
        setRating(0);
      } catch (error) {
        console.error('Failed to create review:', error);
      }
    };
  
    return (
      <div>
        <h3>Review and Rating</h3>
        <form onSubmit={handleReviewSubmit}>
          <label>
            Review:
            <textarea value={newReview} onChange={(e) => setNewReview(e.target.value)} />
          </label>
          <label>
            Rating:
            <input type="number" value={rating} min="1" max="5" onChange={(e) => setRating(e.target.value)} />
          </label>
          <button type="submit">Submit Review</button>
        </form>
  
        <h4>Reviews:</h4>
        {reviews.map((review, index) => (
          <div key={index}>
            <p>Review: {review.review}</p>
            <p>Rating: {review.rating}</p>
          </div>
        ))}
      </div>
    );
  };

  export default ReviewRating;