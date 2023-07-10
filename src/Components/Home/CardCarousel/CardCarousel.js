// import React, { useState, useEffect } from "react";
// import "./CardCarousel.css";

// const CardCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const divs = [
//     {
//       id: 1,
//       image: "https://i.ibb.co/pKFCGh7/gallery-2-jpg.webp",
//       title: "Shoes!",
//       description: "If a dog chews shoes whose shoes does he choose?",
//     },
//     {
//       id: 2,
//       image: "https://i.ibb.co/y6GQ4SF/1.jpg",
//       title: "jacket!",
//       description: "If a dog chews shoes whose shoes does he choose?",
//     },
//     {
//       id: 3,
//       image: "https://i.ibb.co/pKFCGh7/gallery-2-jpg.webp",
//       title: "hello!",
//       description: "If a dog chews shoes whose shoes does he choose?",
//     },
//     {
//       id: 4,
//       image: "https://i.ibb.co/y5V1Bf2/gallery-4-jpg.webp",
//       title: "rehad!",
//       description: "If a dog chews shoes whose shoes does he choose?",
//     },
//     {
//       id: 5,
//       image: "https://i.ibb.co/pKFCGh7/gallery-2-jpg.webp",
//       title: "abc",
//       description: "If a dog chews shoes whose shoes does he choose?",
//     },
//     {
//       id: 6,
//       image: "https://i.ibb.co/kBjLdx8/gallery-1-jpg.webp",
//       title: "kudus",
//       description: "If a dog chews shoes whose shoes does he choose?",
//     },
//     {
//       id: 7,
//       image: "https://i.ibb.co/pKFCGh7/gallery-2-jpg.webp",
//       title: "kaisa",
//       description: "If a dog chews shoes whose shoes does he choose?",
//     },
//     // Add more div objects here if needed
//   ];

//   const displayedDivs = divs.slice(currentIndex, currentIndex + 3);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 3) % divs.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [divs.length]);

//   return (
//     <div className="grid my-10 gap-5 md:lg:grid-cols-3">
//       {displayedDivs.map((div) => (
//         <div key={div.id} className="bg-base-100 shadow-xl">
//           <img className="h-[220px] w-full" src={div.image} alt="Shoes" />
//           <div className="card-body">
//             <h2 className="card-title">{div.title}</h2>
//             <p>{div.description}</p>
//             <div className="card-actions justify-end">
//               <button className="btn btn-primary">Buy Now</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardCarousel;

import React, { useState, useEffect } from "react";
import "./CardCarousel.css";

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const divs = [
    {
      id: 1,
      image: "https://i.ibb.co/pKFCGh7/gallery-2-jpg.webp",
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 2,
      image: "https://i.ibb.co/y6GQ4SF/1.jpg",
      title: "jacket!",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 3,
      image: "https://i.ibb.co/pKFCGh7/gallery-2-jpg.webp",
      title: "hello!",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 4,
      image: "https://i.ibb.co/y5V1Bf2/gallery-4-jpg.webp",
      title: "rehad!",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 5,
      image: "https://i.ibb.co/pKFCGh7/gallery-2-jpg.webp",
      title: "abc",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 6,
      image: "https://i.ibb.co/kBjLdx8/gallery-1-jpg.webp",
      title: "kudus",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 7,
      image: "https://i.ibb.co/pKFCGh7/gallery-2-jpg.webp",
      title: "kaisa",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
  ];

  const displayedDivs = divs.slice(currentIndex, currentIndex + 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % divs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [divs.length]);

  return (
    <div className="carousel-container">
      <div className="carousel gap-x-5">
        {divs.length > 3 ? (
          <>
            {displayedDivs.map((div) => (
              <div key={div.id} className="card text-center">
                <img className="w-full h-[300px]" src={div.image} alt="Shoes" />
                <div className="card-body">
                  <h2 className="card-title">{div.title}</h2>
                  <p>{div.description}</p>
                  <div className="">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {divs.map((div) => (
              <div key={div.id} className="card">
                <img className="card-image" src={div.image} alt="Shoes" />
                <div className="card-body">
                  <h2 className="card-title">{div.title}</h2>
                  <p>{div.description}</p>
                  <div className="">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CardCarousel;
