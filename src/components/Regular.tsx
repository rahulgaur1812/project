"use client";

import * as React from "react";

const Regular: React.FC = () => {
  return (
    <figure className="w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/14c843e6d858e4bff54aba54161547b2a25d16a1a2f768e62fde76b92cbb005a?placeholderIfAbsent=true&apiKey=f2bde199fdfb464fae2ac1c4c007e4d7"
        alt="Regular component image"
        className="object-contain w-full aspect-[0.48]"
        onError={(e) => {
          const img = e.target as HTMLImageElement;
          img.style.display = "none";
        }}
      />
    </figure>
  );
};

export default Regular;
