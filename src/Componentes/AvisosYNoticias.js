//Importacion de React y el archivo CSS para agregar estilo.
import React from 'react';
import './AvisosYNoticias.css';

//Variables de avisos y noticias que se mostraran en la pagina.

const AvisosYNoticias = () => {
  const avisos = [
    {
      id: 1,
      titulo: 'Reunión de Comunidad',
      fecha: '2023-09-15',
      contenido: 'Se convoca a todos los residentes de la Colonia Residencial Los Robles a la reunión mensual en el salón de eventos a las 7:00 PM.',
    },
    {
      id: 2,
      titulo: 'Mantenimiento de Áreas verdes',
      fecha: '2023-09-20',
      contenido: 'El próximo miércoles se realizará mantenimiento en las áreas verdes de la Colonia Residencial Los Robles. Se ruega no transitar por dichas zonas durante el día.',
    },
    {
        id: 3,
        titulo: 'Nueva Fecha de Pago de cuotas electricas',
        fecha: '2023-09-25',
        contenido: 'Se informa a todos los residentes que la nueva fecha límite de pago para el servicio electrico será el 25 de septiembre.',
      }
  ];

  //Nota: en un escenario donde se decida desplegar una aplicacion real, el frontend jalaria los datos de un servidor backend
  //Sin embargo para esta demostracion, los datos seran estaticos en el codigo de frontend por cuestiones de simplicidad.
  //Considere abrir un servidor backend para manejar los datos, sin embargo considere el riesgo de que acabase cerrandose 
  //antes de que usted pudiera revisarlo y por ende arriesgarme a que no mostrara la informacion.

  // Definimos un arreglo llamado 'avisos', contieneobjetos que seran mostrados en la pagina
  // Cada objeto representa un aviso con sus atributos: id, título, fecha y contenido.

  // El componente ahora retornara lo que sera visibile en la pagina, usando nuestro arreglo como base.

  return (
    <div className="avisos-contenedor">
      <h1>Avisos y Noticias</h1>
      {avisos.map((aviso) => (
        <div key={aviso.id} className="aviso">
          <h2>{aviso.titulo}</h2>
          <p className="fecha">{aviso.fecha}</p>
          <p>{aviso.contenido}</p>
        </div>
      ))}
      <footer>Colonia Residencial Los Robles - Avisos Oficiales</footer>
    </div>
  );

  //¿Porque usar un arreglo y no simplemente crear un div por cada aviso?
  //Porque si en un futuro se desea agregar más avisos o 
  //noticias, la funcion map() se encargara de crear los divs necesarios sin necesidad de modificar el codigo
  //Bastara con eliminar o agregar un objeto al arreglo avisos, pues la funcion map() recorrera el arreglo.

  //La funcion map() es util en entornos donde se trabajan con bases de datos o APIs donde los datos pueden cambiar constantemente.
};

export default AvisosYNoticias;

