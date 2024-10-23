import React from "react";

export default function GridView() {
  const images = [
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
  ];
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <div className="relative grid grid-cols-4 gap-2  overflow-hidden   ">
        {images.map((src, index) => (
          <img
          
            key={index}
            src={src}
            alt={`image-${index}`}
            className="w-full h-auto rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
