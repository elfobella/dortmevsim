import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Reviews = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/get-reviews?placeId=${placeId}`
        );
        const data = await response.json();
        setReviews(data); // Yorumları state'e atıyoruz
        setLoading(false);
      } catch {
        setError("Yorumları alırken bir hata oluştu.");
        setLoading(false);
      }
    };

    fetchReviews();
  }, [placeId]);

  if (loading) return <div>Yorumlar yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section id="comments">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-6xl font-bold py-12">Yorumlar</h2>
          <ul className="grid grid-cols-1 mb-12 md:grid-cols-3 gap-4 px-4 md:px-0">
            {reviews.map((review, index) => (
              <li className="flex flex-col gap-2" key={index}>
                <div>
                  <ReviewStars rating={review.rating} />
                  <strong className="text-xl">{review.author_name}</strong>
                </div>
                <p className="line-clamp-2">{review.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react/prop-types
const Star = ({ filled }) => (
  <span
    className={`text-yellow-500 ${
      filled ? "text-yellow-500" : "text-gray-300"
    }`}
  >
    ★
  </span>
);

const ReviewStars = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-xl ${
            i < rating ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Reviews;
