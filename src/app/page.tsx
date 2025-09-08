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
      <div className=" mt-12">
      <NewsSection/>

      </div>

      {/* ✅ Video Highlights Section */}
      <VideoHighlights />
    </>
  );
}
