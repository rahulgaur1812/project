"use client";

import * as React from "react";

interface Image57Props {
  className?: string;
}

const Image57: React.FC<Image57Props> = ({ className = "" }) => {
  const [error, setError] = React.useState(false);

  const handleError = () => {
    setError(true);
  };

  if (error) {
    return (
      <div className="w-full aspect-[0.48] bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Image failed to load</span>
      </div>
    );
  }

  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b5c65317a247d029193aebdd78ffae74eb100e97f39a9a1301c765ad7762322?placeholderIfAbsent=true&apiKey=f2bde199fdfb464fae2ac1c4c007e4d7"
      className={`object-contain w-full aspect-[0.48] ${className}`}
      alt="Decorative image content"
      onError={handleError}
    />
  );
};

export default Image57;
