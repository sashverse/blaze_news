/* eslint-disable @next/next/no-img-element */
import React from "react";

type NewsCardProps = {
  type: "video" | "image";
  thumbnail: string;
  title: string;
  description: string;
  link: string;
  category?: string; // optional for news type/category
};

const NewsCard: React.FC<NewsCardProps> = ({
  type,
  thumbnail,
  title,
  description,
  link,
  category = "Breaking News",
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200">
      {/* Media */}
      <div className="relative">
        {type === "image" ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-56 object-cover"
          />
        ) : (
          <video
            controls
            className="w-full h-56 object-cover"
            poster={thumbnail}
          >
            <source src={thumbnail} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-serif font-bold text-gray-900 leading-snug mb-3">
          {title}
        </h3>
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{description}</p>
        <a
          href={link}
          className="inline-block text-red-600 font-semibold hover:text-red-700 transition-colors"
        >
          Read Full Article →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
