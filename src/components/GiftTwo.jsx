import { useEffect } from "react";

const images = [
  { src: "/1.jpg", shape: "circle" },
  { src: "/2.jpg", shape: "rect" },
  { src: "/3.jpg", shape: "tall" },
  { src: "/4.jpg", shape: "wide" },
  { src: "/5.jpg", shape: "circle" },
  { src: "/6.jpg", shape: "square" },
];

export default function GiftTwo({ back, mark }) {
  useEffect(() => mark(), []);

  return (
    <div className="memory-wall">
      {images.map((img, i) => (
        <img key={i} src={img.src} className={img.shape} />
      ))}
      <button className="close" onClick={back}>✕</button>
    </div>
  );
}
