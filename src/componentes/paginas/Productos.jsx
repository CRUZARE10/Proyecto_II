import React from 'react';
import './Productos.css';

const Productos = ({ name, cost, description, ingredients, benefits, presentation, usage, precautions, image }) => {
    const benefitsList = benefits ? benefits.map((benefit, index) => (
        <li key={index}>{benefit}</li>
    )) : null;

    const precautionsList = precautions ? precautions.map((precaution, index) => (
        <li key={index}>{precaution}</li>
    )) : null;

    return (
        <div className="producto" style={{ backgroundColor: '#8474d4', color: 'white', padding: '20px' }}>
            <img src="./imagesSlider/Gastrocalm.png" alt="Gastrocalm" style={{ width: '100px', height: '100px' }} />
            <div className="producto-info">
            <h2 className="producto-nombre">{name} COSTO: {cost}</h2>
            $599.00
                <p className="producto-descripcion">{description}</p>
                <div className="producto-caracteristicas">
                    <h3 className="producto-seccion-titulo">Ingredientes:</h3>
                    <p className="producto-ingredientes">{ingredients}</p>
                    Extracto de regaliz, manzanilla, menta, vitamina B6.
                    <h3 className="producto-seccion-titulo">Beneficios:</h3>
                    <ul className="producto-beneficios">
                    • Alivia la acidez estomacal y la inflamación.
                    • Ayuda a calmar y proteger el revestimiento del estómago.
                    • Promueve una digestión más suave y confortable
                        {benefitsList}
                    </ul>
                    
                    <h3 className="producto-seccion-titulo">Presentación:</h3>
                    <p className="producto-presentacion">{presentation}</p>
                    GastroCalm es un suplemento especialmente formulado para aliviar los síntomas de la gastritis, como la acidez estomacal, la inflamación y la incomodidad digestiva. Su fórmula única combina ingredientes naturales que ayudan a calmar y proteger el revestimiento del estómago, promoviendo una digestión más suave y confortable.
                    <h3 className="producto-seccion-titulo">Modo de uso:</h3>
                    <p className="producto-uso">{usage}</p>
                    Tomar 1 cápsula después de cada comida principal.
                    <h3 className="producto-seccion-titulo">Precauciones:</h3>
                    <ul className="producto-precauciones">
                    • No exceder la dosis recomendada.
                    • Consultar a un médico antes de usar si estás embarazada, en período de lactancia o si tienes alguna condición médica
                    {precautionsList}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Productos;
