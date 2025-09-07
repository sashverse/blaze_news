import VideoHighlights from "@/components/VideoHighlights";
import NewsSection from "@/pages/NewsSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>Blaze News Hyderabad | Breaking Crime & Investigations</title>
        <meta
          name="description"
          content="Blaze News Hyderabad brings you the latest crime, investigations, politics, and breaking updates across the city. Real-time Hyderabad crime alerts."
        />
        <meta
          name="keywords"
          content="Hyderabad Crime News, Hyderabad Breaking News, Blaze News Hyderabad, Telangana Investigations, Hyderabad Police News"
        />
        <meta name="author" content="Blaze News Hyderabad" />
        <meta property="og:title" content="Blaze News Hyderabad | Breaking Crime & Investigations" />
        <meta
          property="og:description"
          content="Hyderabad’s No.1 Crime & Investigation News Platform – Blaze News brings you real-time local and global updates."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
      </Head>
      <div className=" mt-21">
      <NewsSection/>

      </div>

      {/* ✅ Hero Section (Hyderabad Breaking News) */}
      <section className="relative bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto mt-8 px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-red-500 drop-shadow-lg">
            Blaze News Hyderabad
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Real-Time Hyderabad Crime & Investigation Updates, Politics, and Local Breaking News.
          </p>

          {/* Featured Hyderabad Headline */}
          <div className="mt-8 bg-black/80 rounded-2xl p-6 inline-block max-w-2xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              🔥 Hyderabad Police Bust ₹300 Crore Real-Estate Fraud
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-300">
              The Economic Offences Wing uncovered a massive scam involving multiple real-estate firms in Hyderabad.
              Dozens of arrests made and assets seized.
            </p>
            <button className="mt-4 bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-lg font-semibold">
              Read Full Report
            </button>
          </div>

          {/* Local Quick Headlines */}
          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 p-4 rounded-lg shadow-md hover:bg-white/20 transition">
              <h3 className="font-bold text-lg">🚔 Cyberabad Police Arrest Gang in ATM Skimming Case</h3>
              <p className="text-sm text-gray-300 mt-2">
                Over 200 citizens duped; gang used foreign tech to clone cards.
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg shadow-md hover:bg-white/20 transition">
              <h3 className="font-bold text-lg">⚖️ High Court Orders Probe into Land Grabbing</h3>
              <p className="text-sm text-gray-300 mt-2">
                Special task force formed to investigate Hyderabad’s biggest land scam in recent years.
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg shadow-md hover:bg-white/20 transition">
              <h3 className="font-bold text-lg">🚨 Drugs Worth ₹50 Lakh Seized in Banjara Hills</h3>
              <p className="text-sm text-gray-300 mt-2">
                Police raid luxury apartments, uncovering major peddler network targeting youth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Video Highlights Section */}
      <VideoHighlights />
    </>
  );
}
