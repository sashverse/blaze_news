import React from "react";

const VideoHighlights = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-red-500">
            🔥 Blaze News Video Highlights
          </h2>
          <p className="mt-3 text-lg text-gray-300">
            Watch exclusive crime reports, live investigations, and breaking stories.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Video 1 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ScMzIvxBSi4"
                title="Crime Report 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-5 bg-black/80 group-hover:bg-red-600 transition duration-300">
              <h3 className="text-xl font-bold">🚨 Major Crime Investigation in Hyderabad</h3>
              <p className="mt-2 text-sm text-gray-300 group-hover:text-white transition">
                Exclusive footage from the scene as police uncover a massive drug operation 
                spanning multiple states.
              </p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Crime Report 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-5 bg-black/80 group-hover:bg-red-600 transition duration-300">
              <h3 className="text-xl font-bold">⚖️ Landmark Verdict in Corruption Case</h3>
              <p className="mt-2 text-sm text-gray-300 group-hover:text-white transition">
                Court delivers historic judgment convicting high-profile individuals 
                involved in a ₹200 crore scam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHighlights;
