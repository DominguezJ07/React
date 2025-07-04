import React, { useState } from 'react';
import { UserCard } from '../UserCard/UserCard';
import './Section.css';
import userImg from '../../assets/consola.png';
import userImg2 from '../../assets/img2.png';
import userImg3 from '../../assets/img3.png';
import userImg4 from '../../assets/img4.png';
import Footer from '../Footer/Footer';

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
    image: userImg4
  }
];

export const Section = () => {
  const [count, setCount] = useState(0);

  const handClick = () => {
    setCount(count + 10);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handClick}>LIke</button>
      <section>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </section>
      <Footer />
    </div>
  );
};