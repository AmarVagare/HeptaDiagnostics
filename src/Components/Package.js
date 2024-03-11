import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";

export default function Package() {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3.
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="container">
        <h1 className="packagesHeading">Our best packages </h1>
        <Carousel responsive={responsive}>
          <div className="mCarausel"> 
            <p className="mHeading">complete Package - Wellness</p>

          </div>
          <div className="mCarausel"> 
            <p className="mHeading">complete Package - Wellness</p>
            
          </div>
          <div className="mCarausel"> 
            <p className="mHeading">complete Package - Wellness</p>
            
          </div>
          <div className="mCarausel"> 
            <p className="mHeading">complete Package - Wellness</p>
            
          </div>
          <div className="mCarausel"> 
            <p className="mHeading">complete Package - Wellness</p>
            
          </div>
        </Carousel>
      </div>
    </>
  );
}
