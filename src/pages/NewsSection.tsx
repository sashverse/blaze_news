import NewsCard from "@/components/NewsCard";
import React from "react";

const NewsSection: React.FC = () => {
  const newsData = [
    {
      type: "image" as const,
      thumbnail: "https://ik.imagekit.io/jugmmckgf/images.jpeg?updatedAt=1756228670347",
      title: "Breaking: Major Crime Incident",
      description: "Police have reported a major incident in the city today...",
      link: "/articles/crime-incident",
    },
     {
      type: "image" as const,
      thumbnail: "https://ik.imagekit.io/jugmmckgf/pexels-nappy-935979.jpg?updatedAt=1756228442972",
      title: "Breaking: Major Crime Incident",
      description: "Police have reported a major incident in the city today...",
      link: "/articles/crime-incident",
    },
     {
      type: "image" as const,
      thumbnail: "https://ik.imagekit.io/jugmmckgf/pic2.jpeg?updatedAt=1756228670425",
      title: "Breaking: Major Crime Incident",
      description: "Police have reported a major incident in the city today...",
      link: "/articles/crime-incident",
    },
     {
      type: "video" as const,
      thumbnail: "https://ik.imagekit.io/jugmmckgf/1476255_People_3840x2160.mp4?updatedAt=1756228679729",
      title: "Breaking: Major Crime Incident",
      description: "Police have reported a major incident in the city today...",
      link: "/articles/crime-incident",
    },
     {
      type: "video" as const,
      thumbnail: "https://ik.imagekit.io/jugmmckgf/sample-video.mp4?updatedAt=1756228325756",
      title: "Breaking: Major Crime Incident",
      description: "Police have reported a major incident in the city today...",
      link: "/articles/crime-incident",
    },
     {
      type: "image" as const,
      thumbnail:"https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JpbWV8ZW58MHx8MHx8fDA%3D",
      title: "Breaking: Major Crime Incident",
      description: "Police have reported a major incident in the city today...",
      link: "/articles/crime-incident",
    },

    {
      type: "image" as const,
      thumbnail: "https://www.livelaw.in/cms/wp-content/uploads/2016/05/Homelessness-and-Crime.jpg",
      title: "Live Coverage: Investigation Updates",
      description:
        "Watch the latest updates on the ongoing criminal investigation...",
      link: "/articles/live-updates",
    },
     {
      type: "image" as const,
      thumbnail: "https://ik.imagekit.io/jugmmckgf/images.jpeg?updatedAt=1756228670347",
      title: "Breaking: Major Crime Incident",
      description: "Police have reported a major incident in the city today...",
      link: "/articles/crime-incident",
    },
     {
      type: "image" as const,
      thumbnail: "https://opencity.in/wp-content/uploads/2023/12/Crime-in-india-featured-image.jpeg",
      title: "Breaking: Major Crime Incident",
      description: "Police have reported a major incident in the city today...",
      link: "/articles/crime-incident",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {newsData.map((item, index) => (
        <NewsCard key={index} {...item} />
      ))}
    </div>
  );
};

export default NewsSection;
