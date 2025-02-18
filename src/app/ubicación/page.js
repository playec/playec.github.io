import React from 'react'

export const metadata = {
  title: 'Catálogo',
  description: 'Catálogo de productos disponibles.',
}

export default async function Home() {
  return <div className='container'>
  <div className='content'>
    <h3>Estamos ubicados en la Av. COnfraternidad Via alterna Pelileo.</h3>
    <br></br>
    <p>Registrado en 2017 como NETPLAY DIGITAL renovamos nuestro nombre a PLAYEC. Somo y nos enfocamos a los fanáticos de los videojuegos en vista a la necesidad de ofrecer nuestro servicio a beneficio de la comunidad, aquellos que también disfrutan lo que más les gusta, jugar, entretener y compartir. Ofrecemos productos a un precio competitivo. Estamos cumpliendo casi 8 años sirviendo a la comunidad de videojugadores brindando soporte y mejorando nuestros servicios.</p>
    <p>Estaremos encantados y atentos para resolver sus dudas.</p>
    <br></br>
    <p>Atentamente el equipo de Playec.</p>
  </div>
</div>
    
}