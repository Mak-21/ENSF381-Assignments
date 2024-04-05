// src/components/HomeMainSection.js
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import reviews from '../data/reviews';

function HomeMainSection() {
  const [selectedReviews, setSelectedReviews] = useState([]);

  useEffect(() => {
    const shuffled = reviews.sort(() => 0.5 - Math.random());
    setSelectedReviews(shuffled.slice(0, 2));
  }, []);

  return (
    <main>
      <section>
        <h2>About Us</h2>
        <p>Company’s mission and vision...</p>
        <button onClick={() => {window.location.href = "./ProductPage"}}>Shop Now</button>
    

                        
      </section>
      <section>
        <h2>Customer Reviews</h2>
        {selectedReviews.map((review, index) => (
          <div key={index}>
            <h3>{review.customerName}</h3>
            <p>{review.reviewContent}</p>
            <p>{"⭐".repeat(review.stars)}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default HomeMainSection;
