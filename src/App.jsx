import React from 'react';
import { Section } from './components/Section/Section';
import { Sidebar } from './components/SideBar/Sidebar';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Section />
    </>
  );
}

export default App;
