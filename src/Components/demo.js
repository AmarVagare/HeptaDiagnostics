<div
  id="carouselExampleFade"
  className="carousel slide carousel-fade  container mt-4 data-interval=1000"
>
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <img
        src={require("../Images/slide1.jpg")}
        className="d-block w-100"
        alt="img1"
      />
    </div>
    <div className="carousel-item">
      <img
        src={require("../Images/slide2.jpg")}
        className="d-block w-100"
        alt="img2"
      />
    </div>
    <div className="carousel-item">
      <imgd
        src={require("../Images/slide3.jpg")}
        className="d-block w-100"
        alt="img3"
      />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="prev"
  >
    <span className="" aria-hidden="true">
      left
    </span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>;
