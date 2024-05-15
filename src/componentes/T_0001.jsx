import React from 'react';
import '../estilos/Cards.css';

export const T_0001 = () => {
  return (
    <div>
      <article>
        <h3>Vita relax</h3>
        <h4>$399.00</h4>
        <img src="./imagesSlider/Vitarelax.png" alt='Imagen de producto'/>
        <p className='Bene'>Beneficios:
          <ul>
            <li>Reduce el estrés y la ansiedad.</li>
            <li>Mejora la calidad del sueño.</li>
            <li>Promueve la relajación muscular.</li>
          </ul>
        </p>
        <p className='Ingre'>Ingredientes:
          <ul>
            <li>L-teanina</li>
            <li>Valeriana</li>
            <li>Pasiflora</li>
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
          "Este producto me agrado mucho porque me ayudo a mejorar mi ansiedad." <span><strong>Por: </strong>Lorena R.</span></p>
          
      </article>
      <button>Comprar</button>
    </div>
  );
}