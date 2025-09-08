/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import NewsCard from "@/components/NewsCard";
import axios from "axios";
import config from "../api/config.json";
import FullArtcle from "@/components/FullArtcle";

const NewsSection: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [readFullArticle, setReadFullArticle] = useState<{ ui: boolean; id: string }>({
    ui: false,
    id: "",
  });

  const fetchData = async () => {
    try {
      const res: any = await axios.get(`${config.backendURl}/api/social`);
      const sortedData = (res?.data?.data || []).sort(
        (a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setArticles(sortedData);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Find the selected article
  const selectedArticle = articles.find((a) => a._id === readFullArticle.id);

  return (
    <div className="p-6">
      {readFullArticle.ui && selectedArticle ? (
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          {/* Left Side - Full Article */}
          <div className="lg:col-span-7">
            <FullArtcle article={selectedArticle} />
          </div>

          {/* Right Side - 3 News Cards */}
          <div className="lg:col-span-3 space-y-6">
            {articles.slice(0, 3).map((item: any) => (
              <NewsCard
                key={item._id}
                id={item._id}
                image={item.image}
                video={item.video}
                title={item.title}
                description={item.text}
                setReadFullArticle={setReadFullArticle}
              />
            ))}
          </div>
        </div>
      ) : (
        // Default Grid of News Cards
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.length > 0 ? (
            articles.map((item: any) => (
              <NewsCard
                key={item._id}
                id={item._id}
                image={item.image}
                video={item.video}
                title={item.title}
                description={item.text}
                setReadFullArticle={setReadFullArticle}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No news found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsSection;
