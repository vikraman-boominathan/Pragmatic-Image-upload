import React from "react";

export default function GridView({images}) {
  
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <div className="relative grid grid-cols-4 gap-2  overflow-hidden   ">
        {images.map((img, index) => (
          <img
          
            key={index}
            src={img.dataUrl}
            alt={`image-${img.name}`}
            className="w-full h-auto   rounded-lg "
          />
          
        ))}
      </div>
    </div>
  );
}
