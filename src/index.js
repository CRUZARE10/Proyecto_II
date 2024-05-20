import React from 'react';
import ReactDOM from 'react-dom';
import './estilos/formulario.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Inicio } from './componentes/paginas/Inicio';
import { Menu } from './componentes/paginas/Menu';
import { Nosotros } from './componentes/paginas/Nosotros';
import Productos from './componentes/paginas/Productos'; 
import { Testimonios } from './componentes/paginas/Testimonios';
import { Formulario } from './componentes/Formulario';
import { Slider } from './componentes/Slider';
import { T_0001 } from './componentes/T_0001';
import { T_0002 } from './componentes/T_0002';
import { T_0003 } from './componentes/T_0003';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
    errorElement: <p>Hay un error</p>,
  },
  {
    path: "/Productos",
    element: <Productos />,
    errorElement: <p>Hay un error</p>,
  },
  {
    path: "/Menu",
    element: <Menu />,
    errorElement: <p>Hay un error</p>,
  },
  {
    path: "/Testimonios",
    element: <Testimonios />,
    errorElement: <p>Hay un error</p>,
  },
  {
    path: "/Nosotros",
    element: <Nosotros />,
    errorElement: <p>Hay un error</p>,
  },
  {
    path: "/Formulario",
    element: <Formulario />,
    errorElement: <p>Hay un error</p>,
  },
  {
    path: "/Slider",
    element: <Slider />,
    errorElement: <p>Hay un error</p>,
  },
  {
    path: "/T_0001",
    element: <T_0001 />,
    errorElement: <p>Hay un error</p>,
  },
  {
    path: "/T_0002",
    element: <T_0002 />,
    errorElement: <p>Hay un error</p>,
  },
  {
    path: "/T_0003",
    element: <T_0003 />,
    errorElement: <p>Hay un error</p>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
