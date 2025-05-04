import React, { useState } from "react";
import axios from "axios";

const ReviewForm = ({ restaurantId, onReviewSubmitted }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // You may need to adjust the API endpoint and headers (e.g., add auth token)
      await axios.post(
        `/api/reviews`,
        {
          restaurant: restaurantId,
          rating,
          comment,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${token}` // Uncomment and provide token if needed
          },
        }
      );
      setSuccess(true);
      setComment("");
      setRating(5);
      if (onReviewSubmitted) onReviewSubmitted();
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to submit review. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded shadow mt-8">
      <h3 className="text-lg font-semibold mb-2">Leave a Review</h3>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      {success && <div className="text-green-600 mb-2">Review submitted!</div>}
      <div className="mb-3">
        <label className="block mb-1 font-medium">Rating</label>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="border rounded px-2 py-1"
        >
          {[5, 4, 3, 2, 1].map((num) => (
            <option key={num} value={num}>
              {num} Star{num > 1 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="block mb-1 font-medium">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border rounded px-2 py-1 w-full"
          rows={3}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
};

export default ReviewForm; 