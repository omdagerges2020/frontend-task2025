"use client";

import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const Rating = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Sample data
  const overallRating = 4.5;
  const totalReviews = 3000;
  const ratingDistribution = [
    { stars: 5, percentage: 67 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 6 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 9 },
  ];

  const reviews = [
    {
      id: 1,
      author: "Alex Daewn",
      rating: 4,
      date: "4 months ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    },
    {
      id: 2,
      author: "Alex Daewn",
      rating: 4,
      date: "4 months ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    },
    {
      id: 3,
      author: "Alex Daewn",
      rating: 4,
      date: "4 months ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    },
    {
      id: 4,
      author: "Alex Daewn",
      rating: 4,
      date: "4 months ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    },
  ];

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 4);

  const StarIcon = ({ filled }) => (
    <svg
      className={`w-5 h-5 ${filled ? "text-[#BE968E]" : "text-gray-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const RatingStars = ({ rating, maxStars = 5 }) => (
    <div className="flex gap-1">
      {[...Array(maxStars)].map((_, index) => (
        <StarIcon key={index} filled={index < rating} />
      ))}
    </div>
  );
  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Rating & Reviews</h2>
        <div className="w-12 h-1 bg-[#BE968E] mt-2"></div>
      </div>

      {/* Rating Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Overall Rating */}
        <div className="text-7xl font-bold text-gray-900 mb-2">
          <span className="text-[120px] font-medium text-[#020202]">
            {overallRating.toFixed(1)}
          </span>
          <span className="text-[24px] font-medium text-[#B0B0B0]">/5</span>
        </div>

        {/* Rating Distribution */}
        <div className="flex flex-col justify-center space-y-2">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-3">
              <div className="flex items-center gap-1 w-12">
                <StarIcon filled={true} />
                <span className="text-sm text-gray-600">{item.stars}</span>
              </div>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#BE968E] rounded-full transition-all duration-300"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 w-12 text-right">
                %{item.percentage}
              </span>
            </div>
          ))}
        </div>

        {/* Total Reviews & Add Comment */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-center">
            <p className="text-[16px] font-normal text-[#545454] mb-1">
              Total Reviews
            </p>
            <p className="text-[60px] font-semibold text-[#020202]">
              {(totalReviews / 1000).toFixed(1)}K
            </p>
          </div>
          <Button className="flex shadow-none hover:shadow-none items-center justify-center gap-2 px-6 py-2.5 bg-[#BE968E] w-[186px] text-white rounded-xl">
            <span className="text-[#FFFFFF] font-medium capitalize text-[16px]">
              Add Comment
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M13 3H11C6.02944 3 2 7.02944 2 12V17C2 19.2091 3.79086 21 6 21H13C17.9706 21 22 16.9706 22 12C22 7.02944 17.9706 3 13 3Z"
                fill="white"
              />
              <circle cx="12" cy="12" r="1" fill="white" />
              <circle cx="16" cy="12" r="1" fill="white" />
              <circle cx="8" cy="12" r="1" fill="white" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {displayedReviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-gray-200 pb-6 last:border-b-0"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex gap-3  items-center justify-center">
                <h3 className="font-semibold text-[20px] text-gray-900 mb-2">
                  {review.author}
                </h3>
                <RatingStars rating={review.rating} />
              </div>
              <span className="text-sm font-medium text-[#545454]">
                {review.date}
              </span>
            </div>
            <p className="text-[#020202] text-[16px] font-normal leading-relaxed">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
      {/* View More Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowAllReviews(true)}
          className="py-2.5 rounded-xl w-[207px] bg-[#F5F5F5] text-[14px] font-semibold text-[#BE968E]"
        >
          View More Comments
        </button>
      </div>
    </div>
  );
};

export default Rating;
