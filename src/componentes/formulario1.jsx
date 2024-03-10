import React, { useState } from 'react';

//Creacion del componente para el fomulario
function Formulario() {
  //estados para el guardado de las entradas de usuario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [edad, setEdad] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState('');
  const [medicamento, setMedicamento] = useState('');
  const [seleccion, setSeleccion] = useState('');
  const [checkboxes, setCheckboxes] = useState({
    opcion1: '',
    opcion2: '',
    opcion3: '',
    opcion4: '',
    opcion5: '',
    opcion6: '',
    opcion7: '',
    opcion8: ''
  });

  //manejador de los los cambios para cada campo de formulario
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer lo que quieras con los datos del formulario
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Edad:', edad);
    console.log('Sexo:', sexo);
    console.log('Peso:', peso);
    console.log('Altura:', altura);
    console.log('Medicamento:', medicamento);
    console.log('Selección:', seleccion);
    console.log('Checkboxes:', checkboxes);
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <p>Completa el siguiente formulario</p>

      <label htmlFor='name' className='formato'>Nombre:</label>
      <input id='name' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

      <label htmlFor='email' className='formato'>Email:</label>
      <input id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      
      <label htmlFor='edad' className='formato'>Escribe o seleciona tu edad:</label>
      <input id='edad' type="number" value={edad} onChange={(e) => setEdad(e.target.value)} />
      
      <label className='formato'>Biológicamente, ¿Cuál es tu sexo?</label>
      <div className='sexo-formato'>
        <label className='sexo'>
          <input type="radio" name="sexo" value="masculino" checked={sexo === true} onChange={() => setSexo(true)} /> Masculino
        </label>
        <label className='sexo'>
          <input type="radio" name="sexo" value="femenino" checked={sexo === false} onChange={() => setSexo(false)} /> Femenino
        </label>
      </div>

      <label className='formato'>¿Cuál es tu peso?</label>
      <input placeholder='Ejemplo: 78.5' type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      
      <label className='formato'>¿Cuál es tu altura?</label>
      <input placeholder='Ejemplo: 1.55' type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      
      <label className='formato'>Actualmente ¿Tomas algún medicamento?</label>
      <div className='medicamento-formato'>
        <label className='medicamento'>
          <input type="radio" name="medicamento" value="verdadero" checked={medicamento === true} onChange={() => setMedicamento(true)} /> Si
        </label>
        <label className='medicamento'>
          <input type="radio" name="medicamento" value="falso" checked={medicamento === false} onChange={() => setMedicamento(false)} /> No
        </label>
      </div>


      <label className='formato'>¿Presentas uno o alguno de estos padecimientos?</label>
      
        <label className='padecimientos'>
          <input type="checkbox" name="opcion1" checked={checkboxes.opcion1} onChange={handleCheckboxChange} /> Ninguno
        </label>
      
        
        <label className='padecimientos'>
          <input type="checkbox" name="opcion2" checked={checkboxes.opcion2} onChange={handleCheckboxChange} /> Gastritis
        </label>
      
        
        <label className='padecimientos'>
        <input type="checkbox" name="opcion3" checked={checkboxes.opcion3} onChange={handleCheckboxChange} /> Colitis
        </label>
      
      
        
        <label className='padecimientos'>
          <input type="checkbox" name="opcion4" checked={checkboxes.opcion4} onChange={handleCheckboxChange} /> Diabetes
        </label>
      
      
        
        <label className='padecimientos'>
          <input type="checkbox" name="opcion5" checked={checkboxes.opcion5} onChange={handleCheckboxChange} /> Hipertensión
        </label>
      
      
        
        <label className='padecimientos'>
          <input type="checkbox" name="opcion6" checked={checkboxes.opcion6} onChange={handleCheckboxChange} /> Úlceras gástricas
        </label>
      
      
        
        <label className='padecimientos'>
          <input type="checkbox" name="opcion7" checked={checkboxes.opcion7} onChange={handleCheckboxChange} /> Problemas de tiroides
        </label>
      
      
        
        <label className='padecimientos'>
          <input type="checkbox" name="opcion8" checked={checkboxes.opcion8} onChange={handleCheckboxChange} /> Problemas hormonales
        </label>
    

      <div className='horas'>
        <label className='formato'>Selecciona cuántas horas duermes generalmente al día:</label><br/>
        <select value={seleccion} onChange={(e) => setSeleccion(e.target.value)}>
          <option value="">Seleccione una opción</option>
          <option value="opcion1">Menos de 4</option>
          <option value="opcion2">De 4 a 6 horas</option>
          <option value="opcion3">De 6 a 8 horas</option>
          <option value="opcion4">Más de 8 horas</option>
        </select>
      </div>



      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;