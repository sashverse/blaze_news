/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import config from "../api/config.json";

type NewsCardProps = {
  id:string,
  image?: string;
  video?: string;
  title: string;
  description: string;
  setReadFullArticle:any;
  category?: string;
};

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  id,
  video,
  title,
  description,
  setReadFullArticle,
  category = "Breaking News",
}) => {
  const renderMedia = () => {
    if (image) {
      return (
        <img
          src={`${config.backendURl}/${image}`}
          alt={title}
          className="w-full h-56 object-cover"
        />
      );
    } else if (video) {
      return (
        <video
          controls
          className="w-full h-56 object-cover"
          poster={`${config.backendURl}/${video}`}
        >
          <source src={`${config.backendURl}/${video}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <div className="w-full h-56 flex items-center justify-center bg-gray-200 text-gray-500 text-sm">
          No Media Available
        </div>
      );
    }
  };

  return (
    <div className="mt-8 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200">
      {/* Media */}
      <div className="relative">
        {renderMedia()}

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
          onClick={()=>setReadFullArticle({ui:true, id:id})}
          className="cursor-pointer inline-block text-red-600 font-semibold hover:text-red-700 transition-colors"
        >
          Read Full Article →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
