import React from "react";
import NewsCard from "../NewsCard";

type ArticlePageProps = {
  title: string;
  content: string;
  coverImage?: string;
  related: {
    type: "video" | "image";
    thumbnail: string;
    title: string;
    description: string;
    link: string;
  }[];
};

const ArticlePage: React.FC<ArticlePageProps> = ({
  title,
  content,
  coverImage,
  related,
}) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
      {/* Main Article */}
      <div className="col-span-2 bg-white p-6 rounded-2xl shadow">
        {coverImage && (
          <img
            src={coverImage}
            alt={title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        )}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <div className="prose max-w-none text-gray-700 leading-relaxed">
          {content}
        </div>
      </div>

      {/* Sidebar - Related Articles */}
      <aside className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
          More Articles
        </h2>
        {related.map((item, idx) => (
          <NewsCard key={idx} {...item} />
        ))}
      </aside>
    </div>
  );
};

export default ArticlePage;
