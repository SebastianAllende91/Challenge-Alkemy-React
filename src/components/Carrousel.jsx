import React from "react";
import img2 from "../assets/recipe2.jpg";
import img3 from "../assets/recipe3.jpg";
import img5 from "../assets/recipe5.jpg";

const Carrousel = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval={10000}>
          <img
            src={img3}
            className="d-block w-100 img-fluid"
            alt="img1"
            height={100}
          />
          <div className="carousel-caption d-none d-md-block">
            <h4> Food with history.</h4>
            <p>¡Come and meet us!</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval={2000}>
          <img src={img2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h4>The best recipes for our customers to enjoy.</h4>
            <p>A wide variety of dishes.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img5} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h4>We take care of your food, we take care of you.</h4>
            <p>The flavors that will make you feel good.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrousel;
