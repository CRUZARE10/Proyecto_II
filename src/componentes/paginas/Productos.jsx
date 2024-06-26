import React from 'react';
import './Productos.css';
import {Nav} from '../nav';

const Producto1 = ({ name, cost, description, ingredients, benefits, presentation, usage, precautions, image }) => {
    const benefitsList = benefits ? benefits.map((benefit, index) => (
        <li key={index}>{benefit}</li>
    )) : null;

    const precautionsList = precautions ? precautions.map((precaution, index) => (
        <li key={index}>{precaution}</li>
    )) : null;

    return (
        <div className="producto-salud">
            <h2 className="name">{name}</h2>
            <p className="price">${cost}</p>
            <div className='image'><img src={image} alt='imagen'/></div>
            <p className="description">{description}</p>
            <ul className='ingredients'><strong>Ingredientes:</strong>
                <li> {ingredients}</li>
            </ul>
            <ul className='benefits'><strong>Beneficios:</strong>
                <li className='benefits'>{benefitsList}</li>
            </ul>            
        </div>
    );
};

const Productos = () => {
   
    const productosData = [
        { name: 'VitalRelax', cost: 399.00, description: 'Vitarelax es un suplemento integral que ayuda a reducir el estrés y promover la relajación mental y física', ingredients: 'L-teanina, valeriana, pasiflora, magnesio', image: './imagesSlider/Vitarelax.png', benefits: ['Reduce el estrés y la ansiedad', 'Mejora la calidad del sueño', 'Promueve la relajación muscular'],  presentation: 'Envase de plástico hermético; 6 x 6 x 8 cm; 30 cápsulas', usage: 'Tomar 2 cápsulas antes de dormir', precautions: ['No consumir durante el día con actividades físicas pesadas'] },
        { name: 'Vital Balance', cost: 399.00, description: 'Vitalbalance es un suplemento multivitamínico y mineral completo que ayuda a cubrir las necesidades nutricionales diarias.', image: './imagesSlider/Vitalbalance.png', ingredients: 'Vitalbalance es un suplemento multivitamínico y mineral completo que ayuda a cubrir las necesidades nutricionales diarias', benefits: ['Aporta nutrientes esenciales', 'Apoya la salud general', 'Fortalece el sistema inmunológico'], presentation: 'Envase de plástico hermético; 6 x 6 x 8 cm; 30 cápsulas', usage: 'Tomar 1 tableta al día después del desayuno', precautions: ['No sustituir por alimentos'] },
        { name: 'VitaDiges', cost: 399.00, description: 'Vitadiges es un suplemento para la salud digestiva que ayuda a mejorar la digestión y aliviar la incomodidad estomacal', image: './imagesSlider/Vitadiges.png', ingredients: 'Enzimas digestivas, jengibre, menta, probióticos.', benefits: ['Mejora la digestión', 'Alivia la acidez estomacal', 'Promueve la salud intestinal'], presentation: 'Envase de plástico hermético; 6 x 6 x 8 cm; 30 cápsulas.', usage: 'Tomar 1 tableta después de cada comida.', precautions: ['Consultar a un médico si se están tomando medicamentos para problemas digestivos'] },
        { name: 'VitaNutri', cost: 799.00, description: 'Este suplemento está diseñado para complementar la dieta diaria y ayudar a satisfacer las necesidades nutricionales que a veces no se cubren completamente a través de la alimentación regular.', image: './imagesSlider/VitaNutri Pro.png', ingredients: 'Vitamina A, C, D, E, K, así como complejo B (B1, B2, B3, B5, B6, B7, B9, B12), calcio, hierro, magnesio, zinc, selenio y potasio, omega-3 y omega-6', benefits: ['Promueve la salud general y el bienestar', 'Ayuda a cubrir las posibles deficiencias nutricionaleS', 'Mejora la función inmunológica'],  presentation: 'Envase de plástico hermético; 6 x 6 x 11 cm; 30 cápsulas', usage: 'Se recomienda tomar dos cápsulas al día, preferiblemente con las comidas para una mejor absorción', precautions: ['No exceder la dosis recomendada', 'Consultar a un médico antes de usar en caso de embarazo o lactancia'] }
    ];

    return (
        <div>
            <nav>
                <Nav />
            </nav>
            <div className="productos-container">
                {productosData.map((producto, index) => (
                    <Producto1 key={index} {...producto} />
                ))}
            </div>
        </div>
    );
};

export default Productos;
