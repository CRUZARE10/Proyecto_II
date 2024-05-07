import React from 'react';
import '../estilos/Slider.css';

export const Slider = () => {
  return(
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./imagesSlider/Picture1.png" alt="Tratamiento Opción 1"/>
            <button>Comprar</button>
          </div>
          <div className="carousel-item">
            <img src="./imagesSlider/Picture2.png" alt="Tratamiento Opción 2"/>
            <button>Comprar</button>
          </div>
          <div className="carousel-item">
            <img src="./imagesSlider/Picture3.png" alt="Tratamiento Opción 3"/>
            <button>Comprar</button>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}