import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const WebsiteAnalysis = () => {
  const [likes, setLikes] = useState(0);
  const [pageViews, setPageViews] = useState(0);
  const [review, setReview] = useState(0);

  useEffect(() => {
    const likes = 30000;
    const pageViews = 60000;
    const happyClient = 15000;

    const interval = setInterval(() => {
      setLikes((prevLikes) => {
        const newLikes = prevLikes + 500;
        if (newLikes >= likes) {
          clearInterval(interval); // Stop the count
          return likes; // Set likes to the desired number
        }
        return newLikes;
      });

      setPageViews((prevPageViews) => {
        const newPageViews = prevPageViews + 1000;
        if (newPageViews >= pageViews) {
          clearInterval(interval); // Stop the count
          return pageViews; // Set page views to the desired number
        }
        return newPageViews;
      });

      setReview((prevReview) => {
        const newReview = prevReview + 250;
        if (newReview >= happyClient) {
          clearInterval(interval); // Stop the count
          return happyClient; // Set delivery to the desired number
        }
        return newReview;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center my-12">
      <div className="shadow-2xl rounded-lg py-6 bg-white grid lg:grid-cols-3 grid-cols-1">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewPort={{ once: false, amount: 0.3 }}
          className="py-8 text-center lg:border-r border-purple-900"
        >
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title font-mono font-bold text-[#454242]">
            Total Likes
          </div>
          <div className="stat-value text-primary mb-2">{likes}</div>
          <div className="stat-desc font-mono text-[#454242] font-bold">
            21% more than last month
          </div>
        </motion.div>

        <motion.div
          // variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewPort={{ once: false, amount: 0.3 }}
          className="py-8 text-center lg:border-r border-purple-900"
        >
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title font-mono font-bold text-[#454242]">
            Page Views
          </div>
          <div className="stat-value text-secondary mb-2">{pageViews}</div>
          <div className="stat-desc font-mono text-[#454242] font-bold">
            18% more than last month
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewPort={{ once: false, amount: 0.3 }}
          className="py-8 text-center"
        >
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title font-mono font-bold text-[#454242]">
            Review
          </div>

          <div className="stat-value mb-2 ">{review}</div>
          <div className="stat-desc font-mono text-[#454242] font-bold">
            Total Review
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebsiteAnalysis;
