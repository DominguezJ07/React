// Importa React y el hook useState desde la librería de React
import React, { useState } from 'react';

// Importa el componente UserCard desde su ruta relativa
import { UserCard } from '../UserCard/UserCard';

// Importa los estilos específicos para esta sección
import './Section.css';

// Importa imágenes desde la carpeta assets
import userImg from '../../assets/consola.png';
import userImg2 from '../../assets/img2.png';
import userImg3 from '../../assets/img3.png';
import userImg4 from '../../assets/img4.png';

// Importa los componentes Sidebar, Header y Footer
import { Sidebar } from '../SideBar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Array de usuarios que se usarán para generar tarjetas dinámicamente
const users = [
  {
    id: 1,
    name: 'Control',
    description: 'De PlayStation',
    image: userImg
  },
  {
    id: 2,
    name: 'Casa',
    description: 'Casita',
    image: userImg2
  },
  {
    id: 3,
    name: 'Calabaza',
    description: 'Calabaza',
    image: userImg3
  },
  {
    id: 4,
    name: 'Franky',
    description: 'FrankyStien',
    image: userImg4 // Imagen diferente para esta tarjeta
  }
];

// Componente funcional llamado Section
export const Section = () => {
  // Hook useState para manejar un contador (actualmente no usado en UI)
  const [count, setCount] = useState(0);

  // Muestra el valor del contador en consola
  console.log(count);

  // Renderiza el componente
  return (
    <>
      {/* Componente Header fijo en la parte superior */}
      <Header />

      {/* Componente Sidebar a la izquierda */}
      <Sidebar />

      {/* Sección principal que contiene las tarjetas */}
      <section>
        {/* Mapea el array de usuarios y genera una tarjeta por cada uno */}
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </section>

      {/* Componente Footer fijo en la parte inferior */}
      <Footer />
    </>
  );
};
