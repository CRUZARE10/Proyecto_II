import React from 'react';
import {Nav} from './nav';

export const T_0002 = () => {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <article>
        <h3>Vital Balance</h3>
        <h4>$399.00</h4>
        <img src="./imagesSlider/Vitalbalance.png" alt='Imagen de producto'/>
        <p className='Bene'>Beneficios:
          <ul>
            <li>Aporta nutrientes esenciales.</li>
            <li>Apoya la salud genera.</li>
            <li>Fortalece el sistema inmunológico.</li>
          </ul>
        </p>
        <p className='Ingre'>Ingredientes:
          <ul>
            <li>Vitaminas A, C, D y E</li>
            <li>Complejo B</li>
            <li>Zinc</li>
            <li>Hierro</li>
            <li>Calcio</li>
            <li>Magnesio</li>
          </ul>
        </p>
        <p className='Calif'>
          <span class="material-icons">star_rate</span>
          <span class="material-icons">star_rate</span>
          <span class="material-icons">star_rate</span>
          <span class="material-icons">star_rate</span>
          <span class="material-icons">star_rate</span>
        </p>
        <p className='Reco'>
          "Muy buen producto, me ha ayudado en mi dia a dia." <span><strong>Por: </strong>Amalia Roa.</span></p>
          
      </article>

      <article>
        <h3>Enervital</h3>
        <h4>$399.00</h4>
        <img src="./imagesSlider/Enervital.png" alt='Imagen de producto'/>
        <p className='Bene'>Beneficios:
          <ul>
            <li>Aumenta la energía y la vitalidad.</li>
            <li>Mejora el rendimiento físico y menta.</li>
            <li>Combate la fatiga.</li>
          </ul>
        </p>
        <p className='Ingre'>Ingredientes:
          <ul>
            <li>Ginseng</li>
            <li>Guaraná</li>
            <li>Vitamina B12</li>
            <li>Hierro</li>
          </ul>
        </p>
        <p className='Calif'>
          <span class="material-icons">star_rate</span>
          <span class="material-icons">star_rate</span>
          <span class="material-icons">star_rate</span>
          <span class="material-icons">star_rate</span>
        </p>
        <p className='Reco'>
          "Este producto me ha ayudado e tener mejor energia."<span><strong>Por: </strong>Lorena R.</span></p>
          
      </article>
      <button>Comprar</button>
    </div>
  );
}