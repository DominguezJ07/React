// Importa React y el hook useState
import React, { useState } from 'react';

// Define y exporta el componente funcional UserCard
// Recibe un objeto "user" como prop (propiedad)
export const UserCard = ({ user }) => {
  // Estado para saber si se ha contactado al usuario
  const [isContacted, setIsContacted] = useState(false);

  // Extrae propiedades del objeto user
  const { id, name, description, image } = user;

  // Función que se ejecuta al hacer clic en el botón
  const handleClick = () => {
    // Cambia el estado de contactado al contrario del actual (true/false)
    setIsContacted(!isContacted);

    // Muestra en consola un mensaje indicando que se interactuó con la tarjeta
    console.log(`Tarjeta de ${name} fue renderizada`);
  };

  // JSX que define la estructura visual de la tarjeta
  return (
    <div className="card">
      {/* Muestra la imagen del usuario */}
      <img className="image" src={image} alt={name} />

      {/* Muestra el nombre del usuario */}
      <h2 className="name">{name}</h2>

      {/* Muestra la descripción del usuario */}
      <p className="description">{description}</p>

      {/* Botón que cambia su texto al ser presionado */}
      <button id={id} onClick={handleClick}>
        {isContacted ? 'Contactado' : 'Contactar'}
        {/* Si isContacted es true, muestra 'Contactado'; si no, muestra 'Contactar' */}
      </button>
    </div>
  );
};
