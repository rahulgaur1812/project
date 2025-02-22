"use client";

import * as React from "react";

interface Image61Props {
  className?: string;
}

const Image61: React.FC<Image61Props> = ({ className = "" }) => {
  return (
    <figure className="w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7efc9c40dd64b56d77ef5448730a97c09e91965d08fbd9f632841bdb68facaf?placeholderIfAbsent=true&apiKey=f2bde199fdfb464fae2ac1c4c007e4d7"
        alt="Decorative image"
        className={`object-contain w-full aspect-[0.66] ${className}`}
      />
    </figure>
  );
};

export default Image61;
