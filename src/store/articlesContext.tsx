"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import config from "../api/config.json";

type Article = {
  _id: string;
  text: string;
  title: string;
  image?: string;
  video?: string;
};

type ArticlesContextType = {
  articles: Article[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
};

const ArticlesContext = createContext<ArticlesContextType | undefined>(undefined);

export const ArticlesProvider = ({ children }: { children: React.ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get(`${config.backendURl}/api/social`)
      .then((res) => setArticles(res.data.data))
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles, setArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticles = () => {
  const ctx = useContext(ArticlesContext);
  if (!ctx) throw new Error("useArticles must be used within ArticlesProvider");
  return ctx;
};
