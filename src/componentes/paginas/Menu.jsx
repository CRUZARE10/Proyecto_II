import React from 'react';
import '../../estilos/Menu.css';

export const Menu = () => {
    return (
        <div className='contenedor'>
            <h1><strong>Actividades Realizadas durante el curso</strong></h1><br/><hr/>
            <h3>Unidad 1</h3>
            <p>Durante esta actividad se desarrollaron actividades de planificación para el desarrollo de un proyecto web, considerando la metodología ágil SCRUM. En ella se elaboró un backlog y los sprints y la calendarización de estos sprints.</p>
            <div className='marco'>
                <img className='imagen' src='./imagesSlider/Imagen1.png' alt='Backlog'/>
                <img className='imagen' src='./imagesSlider/Imagen2.png' alt='Sprint 1'/>
            </div>
            <div className='archivos'>
                <p>Archivo en PDF <a href='./archivos/Actividad_1.3_Integradora_Finalizado.pdf'>Descargar</a></p>
                
            </div>
            <br/>
            
            <h3>Unidad 2</h3>
            <p>Para esta unidad se brindo un par de proyectos, en el que se elegiría uno y a partir de este se reforzaria la elaboración de un backlog y elaboración de los sprints que pudiera generar el tipo de proyecto elegido.</p>
            <div className='marco'>
                <img className='imagen' src='./imagesSlider/Imagen6.png' alt='Backlog'/>
            </div>
            <div className='archivos'>
                <p>Archivo en PDF <a href='./archivos/Actividad_2.1_Finalizado.pdf'>Descargar</a></p>
                
            </div><br/>

            <h3>Unidad 3</h3>
            <p>Para esta unidad se retomo el proyecto inicial del curso realizado en la unidad 1, a partir de este se formó un equipo de trabajo, cuyo objetivo fue asimilar la metodología SCRUM en un entorno de trabajo, para ello se organizó y se desarrollaron diferentes fases desarrollo de los sprints consecuentes al primer sprint desarrollado en la unidad 1, estas fases de desarrollo estuvieron enfocadas a llegar a la etapa de finalización.</p>
            <div className='marco'>
                <img className='imagen' src='./imagesSlider/Imagen3.png' alt='Backlog'/>
                <img className='imagen' src='./imagesSlider/Imagen4.png' alt='Sprint 1'/>
            </div>
            <div className='archivos'>
                <p>Archivo en PDF <a href='./archivos/Actividad_3.4_Integradora_Finalizado.pdf'>Descargar</a></p>
                
            </div><br />
            
            <h3>Unidad 4</h3>
            <p>Para esta última unidad se produciron las reuniones de revisiones finales y modificaciones finales, para ello se organizaron reuniones de trabajo con el equipo, con el sentido de hacer las modificaciones adecuadas.</p>
            <div className='marco'>
                <img className='imagen' src='./imagesSlider/Imagen7.png' alt='Backlog'/>
                <img className='imagen' src='./imagesSlider/Imagen8.png' alt='Sprint 1'/>
            </div>
            <div className='archivos'>
                <p>Archivo en PDF <a href='./archivos/Actividad_4.2_Finalizado.pdf'>Descargar</a></p>
                
            </div>
        </div>
    );
} 