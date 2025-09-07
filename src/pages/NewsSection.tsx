/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import NewsCard from "@/components/NewsCard";
import { useArticles } from "@/store/articlesContext";

type NewsItem = {
  _id: string;
  text: string;
  title: string;
  image?: string;
  video?: string;
  postedBy?: string;
  scheduledAt?: string;
};

const NewsSection: React.FC = () => {
  const { articles } = useArticles();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-21">
      {articles.length > 0 ? (
        articles.map((item:any) => (
          <NewsCard
            key={item._id}
            image={item.image}
            video={item.video}
            title={item.title}
            description={item.text}
            link={`/articles/${item._id}`} // 👈 dynamic article page
          />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">No news found.</p>
      )}
    </div>
  );
};

export default NewsSection;
