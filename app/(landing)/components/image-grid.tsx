"use client";
import Image from "next/image";

const imageData = [
  { src: "/layout-2.png?", width: 250, height: 250 },
  { src: "/layout_1.png?", width: 427, height: 250 },
  { src: "/layout-3.png?", width: 200, height: 250 },
  { src: "/layout-4.png?", width: 250, height: 250 },
  { src: "/layout-5.png?", width: 250, height: 250 },
  { src: "/layout-6.png?", width: 250, height: 250 },
  { src: "/layout-7.png?", width: 250, height: 250 },
  { src: "/layout-8.png?", width: 250, height: 250 },
  { src: "/layout-9.png?", width: 446, height: 250 },
  { src: "/layout-11.png?", width: 200, height: 250 },
  { src: "/layout_1.png?", width: 427, height: 250 },
  { src: "/layout-3.png?", width: 200, height: 250 },
];

const ImageGrid = () => {
  return (
    <div className="container grid-layout">

      <div className="top-row">
        {imageData.slice(0, 6).map((img, index) => (
          <div key={index} className="image-wrapper" style={{ width: img.width, height: img.height }}>
            <Image src={img.src} alt={`Image ${index + 1}`} width={img.width} height={img.height} className="image" />
          </div>
        ))}
      </div>

      <div className="bottom-row">
        {imageData.slice(6).map((img, index) => (
          <div key={index} className="image-wrapper" style={{ width: img.width, height: img.height }}>
            <Image src={img.src} alt={`Image ${index + 1}`} width={img.width} height={img.height} className="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
