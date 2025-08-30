import React from "react";
import { Facebook, Twitter, Youtube } from "lucide-react";

type SocialFollowCardProps = {
  platform: "facebook" | "twitter" | "youtube";
  link: string;
};

const icons = {
  facebook: <Facebook className="w-6 h-6 text-blue-600" />,
  twitter: <Twitter className="w-6 h-6 text-sky-500" />,
  youtube: <Youtube className="w-6 h-6 text-red-600" />,
};

const platformNames: Record<"facebook" | "twitter" | "youtube", string> = {
  facebook: "Follow us on Facebook",
  twitter: "Follow us on Twitter",
  youtube: "Subscribe on YouTube",
};

const SocialFollowCard: React.FC<SocialFollowCardProps> = ({ platform, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-white shadow rounded-xl p-4 hover:shadow-lg transition"
    >
      {icons[platform]}
      <span className="font-semibold text-gray-800">{platformNames[platform]}</span>
    </a>
  );
};

export default SocialFollowCard;
