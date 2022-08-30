import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarosel } from "react-responsive-carousel";
import "./ReactCarousal.css";

const ReactCarousal = ({
  posts,
  infiniteLoop,
  showArrows,
  showStatus,
  showIndicators,
  showThumbs,
  autoPlay,
  interval,
}) => {
  return (
    <div className="carousalParent">
      <ReactCarosel
        infiniteLoop={infiniteLoop}
        showArrows={showArrows}
        showStatus={showStatus}
        showIndicators={showIndicators}
        showThumbs={showThumbs}
        autoPlay={autoPlay}
        interval={interval}
      >
        {posts?.map((post) => {
          return (
            <img
              src={post?.img}
              className="w-50 ml-0"
              style={{
                height: "20vh",
                objectFit: "cover",
              }}
            />
          );
        })}
      </ReactCarosel>
    </div>
  );
};

export default ReactCarousal;
