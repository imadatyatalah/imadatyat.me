import React from "react";

import { baseUrl } from "@/lib/constants";
import TwitterIcon from "@/icons/TwitterIcon";

const ShareViaTwitter = ({ title, slug }: { title: string; slug: string }) => {
  const tweetShareURL = `https://twitter.com/intent/tweet?text=Check out: ${title}&url=${baseUrl}/blog/${slug}%0D%0A&via=ImadAtyat`;

  return (
    <a
      href={tweetShareURL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex text-sm items-center text-fuchsia-500 fill-[#D946EF]"
    >
      <TwitterIcon width={22} height={22} />

      <span className="ml-2 hover:underline">Share via Twitter</span>
    </a>
  );
};

export default ShareViaTwitter;
