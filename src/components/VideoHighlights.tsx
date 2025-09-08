import React from "react";

const VideoHighlights = () => {
  // ✅ Put all your YouTube links here
  const videos = [
    "0E72RT-Iw3g?si=OonA1F0N8MZAdGRv",
    "TOrQwVj8wwQ?si=zyioINYaOUwVCEJG",
    "-MRW8hWR2aw?si=Uu9pCjr3YHQ6FHDB",
    "i2Ql8o5Rr8A?si=6VTqzKVDwwvXpqC7",
    "cTBtCyDEi8U?si=E73gDK41S-QJ2_57",
    "1yCdG9-xMTg?si=RAM2eZvGI5cymV4M",
  ];

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-red-500">
            Blaze News Media
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((id, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${id}`}
                title={`Blaze News Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <a
            href="https://www.youtube.com/@Blazenewsmedia"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-xl text-lg font-bold shadow-lg hover:bg-red-700 transition"
          >
            📺 View More on YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoHighlights;
