import React, { useState } from "react";

const reviews = [
  {
    id: 1,
    author: "Sneha Patel",
    text:  "The clothing is true to size, fabrics are great and styles up to date and GREAT prices. Glad I took the chance, now I'm a happy returning customer.",
  },
  {
    id: 2,
    author: "Murli Rayini",
    text:  "I love the clothes from this website!! I am so glad I found them.....everything has been spot on, fits wonderfully, styles are trendy and lots to choose from!! Thanks for being here for us!!!",
  },
  {
    id: 3,
    author: "Ramesh Kumar",
    text: "This is my very first order through the site, and I am totally and completely satisfied! The fit is great and so are the prices. I will definitely return again and again...",
  },
  {
    id: 4,
    author: "Manish Jain",
    text: "I love these clothes!! I love the fit!!! I love the price!!! I am on my 3rd order from you!! ",
  },
  {
    id: 5,
    author: "Amit Jain",
    text: "I am so delighted in your clothing! It is absolutely gorgeous...everything I have ordered FITS PERFECTLY...",
  },
  {
    id: 6,
    author: "Sachin Jain",
    text: "I just wanted to let you know my opinion of your company. I normally have a rule that I never buy any clothes online... Ever. When I came across your store I really loved the styles that you offer.",
  },
  {
    id: 7,
    author: "Kunal Jain",
    text: "I love the way your website is done with the flip images and the catwalks. Makes it wonderful to shop online. Thank you. I'll be back again and again!",
  },
  {
    id: 8,
    author: "Thomas",
    text: "I absolutely adore the trendy styles this store offers. The clothes fit so well and they look amazing on a curvy figure. I really appreciate this option and the quality of the goods is so great that I will order product in the future. Thank you so much for making me feel beautiful!",
  },
  {
    id: 9,
    author: "Tukuna Patro",
    text: "Great service, Great clothes and FAST delivery!! Loved the shirt, now buying more! Happy! Happy!",
  },
  {
    id: 10,
    author: "Vishal Rathi",
    text: "I have ordered and received several items now, and I have to say, I am in love with this store!!!! Everything I have received fit perfectly, and is good quality. I ordered clothes in my size and they were true to size! I would not hesitate to shop this site again, and I tell all of my friends and family to shop this site too!",
  },
  {
    id: 2,
    author: "Jane Smith",
    text: "Excellent team. They went above and beyond my expectations.",
  },
  {
    id: 3,
    author: "Sam Johnson",
    text: "Professional and reliable. I would highly recommend them.",
  },
  {
    id: 1,
    author: "John Doe",
    text: "Great service! I'm very satisfied with the results.",
  },
  {
    id: 2,
    author: "Jane Smith",
    text: "Excellent team. They went above and beyond my expectations.",
  },
  {
    id: 3,
    author: "Sam Johnson",
    text: "Professional and reliable. I would highly recommend them.",
  },
  {
    id: 1,
    author: "John Doe",
    text: "Great service! I'm very satisfied with the results.",
  },
  {
    id: 2,
    author: "Jane Smith",
    text: "Excellent team. They went above and beyond my expectations.",
  },
  {
    id: 3,
    author: "Sam Johnson",
    text: "Professional and reliable. I would highly recommend them.",
  },
  {
    id: 1,
    author: "John Doe",
    text: "Great service! I'm very satisfied with the results.",
  },
  {
    id: 2,
    author: "Jane Smith",
    text: "Excellent team. They went above and beyond my expectations.",
  },
  {
    id: 3,
    author: "Sam Johnson",
    text: "Professional and reliable. I would highly recommend them.",
  },
  // Add more review objects if needed
];

const ReviewSlider = () => {
  const [activeReview, setActiveReview] = useState(0);

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="mb-32 text-center">
      <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.slice(activeReview, activeReview + 3).map((review) => (
          <div key={review.id} className="mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4 text-gray-600">{review.text}</p>
              <p className="text-gray-800 font-medium">{review.author}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={prevReview}
          className="px-4 py-2 text-sm text-white bg-gray-500 rounded-md"
        >
          Previous
        </button>
        <button
          onClick={nextReview}
          className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ReviewSlider;
