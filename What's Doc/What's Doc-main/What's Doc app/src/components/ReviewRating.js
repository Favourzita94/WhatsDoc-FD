import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import styles from './reviewRating.module.css';

const ReviewRating = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const handleReview = () => {
    navigate('/');
  };
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
    <div className={styles.reviewRatingContainer}>
      <h3>Review and Rating</h3>
      <form onSubmit={handleReviewSubmit} className={styles.reviewForm}>
        <label>
          Review:
          <textarea value={newReview} onChange={(e) => setNewReview(e.target.value)} className={styles.reviewTextarea} />
        </label>
        <label>
          Rating:
          <input
            type="number"
            value={rating}
            min="1"
            max="5"
            onChange={(e) => setRating(e.target.value)}
            className={styles.ratingInput}
          />
        </label>
        <button type="submit" className={styles.submitButton} onClick={handleReview}>Submit Review</button>
      </form>

      <h4>Overall Experience Reviews:</h4>
      {reviews.map((review, index) => (
        <div key={index} className={styles.reviewItem}>
          <p>Review: {review.review}</p>
          <p>Rating: {review.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewRating;
