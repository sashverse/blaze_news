import InstaNewsCard from "@/components/news/InstaNewsCard";
import SocialFollowCard from "@/components/news/SocialFollowCard";
import React from "react";

const NewsFeed = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-10 px-4">
      {/* Left / Instagram-like Cards */}
      <div className="col-span-2">
        <InstaNewsCard
          thumbnail="/hyderabad-crime.jpg"
          title="🚨 Major Cybercrime Raid in Hyderabad"
          description="Hyderabad police arrested 15 suspects in a midnight raid uncovering a multi-crore cyber scam."
          link="/articles/hyderabad-cybercrime"
        />
        <InstaNewsCard
          thumbnail="/drug-bust.jpg"
          title="🚔 Drugs Worth ₹50 Lakh Seized in Jubilee Hills"
          description="A luxury apartment in Jubilee Hills was raided, uncovering a large peddler network."
          link="/articles/jubilee-hills-drug-bust"
        />
      </div>

      {/* Right / Facebook-like Follow Cards */}
      <aside className="space-y-4">
        <SocialFollowCard platform="facebook" link="https://facebook.com/blazenews" />
        <SocialFollowCard platform="twitter" link="https://twitter.com/blazenews" />
        <SocialFollowCard platform="youtube" link="https://youtube.com/blazenews" />
      </aside>
    </div>
  );
};

export default NewsFeed;
