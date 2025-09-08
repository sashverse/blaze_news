/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import config from "../api/config.json";

const FullArtcle = ({ article }: any) => {
  if (!article) return null;

  return (
    <article className="bg-white rounded-xl shadow-lg p-6">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4 leading-snug">
        {article.title}
      </h1>

      {/* Meta Info */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <span>{new Date(article.createdAt).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}</span>
        <span className="mx-2">•</span>
        <span>By BlazeNews Reporter</span>
      </div>

      {/* Video / Image */}
      <div className="mb-6 rounded-xl overflow-hidden shadow-md">
        {article.video ? (
          <video
            src={`${config.backendURl}/${article.video}`}
            controls
            className="w-full rounded-xl"
          />
        ) : (
          article.image && (
            <img
              src={`${config.backendURl}/${article.image}`}
              alt={article.title}
              className="w-full rounded-xl object-cover"
            />
          )
        )}
      </div>

      {/* Description / Text */}
      <div className="prose prose-lg max-w-none text-gray-800">
        <p>{article.text}</p>
      </div>
    </article>
  );
};

export default FullArtcle;
