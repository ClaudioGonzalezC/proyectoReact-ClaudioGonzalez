import React, { useState, useEffect } from 'react';
import './tituloDinamico.css'; // Importa los estilos

const DynamicTitle = () => {
  const [word, setWord] = useState('sorpresa');
  const [isStrikethrough, setIsStrikethrough] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prevWord) => (prevWord === 'sorpresa' ? '¿solución?' : 'sorpresa'));
      setIsStrikethrough((prevWord) => !prevWord);
    }, word === 'sorpresa' ? 10000 : 4000); // Cambia la palabra cada 10s o 4s

    return () => clearInterval(interval); // Limpia el intervalo
  }, [word]);

  return (
    <h1 className="dynamic-title">
      La <span className={isStrikethrough ? 'strikethrough' : ''}>{word}</span> de tu vida
    </h1>
  );
};

export default DynamicTitle;