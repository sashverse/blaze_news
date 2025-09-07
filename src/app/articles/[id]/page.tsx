/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useArticles } from "@/store/articlesContext";
import config from "../../../api/config.json";
import NewsCard from "@/components/NewsCard";

const ArticlePage: React.FC = () => {
  const params = useParams();
  const { articles } = useArticles();

  const id = params?.id as string | undefined;
  const article = articles.find((a: any) => a._id === id);

  if (!article) {
    return <div className="p-6 text-center text-gray-500">Article not found</div>;
  }

  // Other articles (excluding current one) → take max 4
  const otherArticles = articles
    .filter((a: any) => a._id !== id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-5 gap-8 mt-21">
      {/* Main Article (80%) */}
      <article className="lg:col-span-4 bg-white shadow-lg rounded-2xl p-6">
        {article.image && (
          <img
            src={`${config.backendURl}/${article.image}`}
            alt={article.title}
            className="w-full h-80 object-cover rounded-xl mb-6"
          />
        )}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">{article.text}</p>
        {article.video && (
          <video controls className="w-full rounded-xl mt-4">
            <source src={`${config.backendURl}/${article.video}`} type="video/mp4" />
          </video>
        )}
      </article>

      {/* Sidebar (20%) */}
      <aside className="lg:col-span-1 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">More News</h2>
        {otherArticles.length > 0 ? (
          otherArticles.map((item: any) => (
            <NewsCard
              key={item._id}
              image={item.image}
              video={item.video}
              title={item.title}
              description={item.text}
              link={`/articles/${item._id}`}
            />
          ))
        ) : (
          <p className="text-gray-500 text-sm">No more articles</p>
        )}
      </aside>
    </div>
  );
};

export default ArticlePage;
