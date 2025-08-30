import React from "react";

type InstaNewsCardProps = {
  thumbnail: string;
  title: string;
  description: string;
  link: string;
};

const InstaNewsCard: React.FC<InstaNewsCardProps> = ({
  thumbnail,
  title,
  description,
  link,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6 hover:shadow-xl transition-all">
      <img src={thumbnail} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{description}</p>
        <a
          href={link}
          className="inline-block text-red-600 font-semibold hover:underline"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default InstaNewsCard;
