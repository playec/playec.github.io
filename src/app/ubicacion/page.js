import React from 'react'

export const metadata = {
  title: 'Ubicación',
  description: 'Catálogo de productos disponibles.',
}

export default async function Home() {
  return <div className='container'>
  <div className='content'>
    <h3>Estamos ubicados en la Av. Confraternidad Via alterna Pelileo.</h3>
    <br></br>
    <div style={{ overflow: 'hidden', paddingBottom: '56.25%', position: 'relative', height: 0 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.757206651313!2d-78.57928762315751!3d-1.321452798666005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d3835d51eb623d%3A0xcca3d3cea615a4d1!2sPlayec%20Net!5e0!3m2!1sen!2sec!4v1739843956861!5m2!1sen!2sec"
          width="100%"
          height="100%"
          style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
  </div>
</div>
    
}