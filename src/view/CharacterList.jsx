import React from 'react';
import '../styles/Home.css';
import { motion } from 'framer-motion';

export const CharacterList = ({ image, name, status, species, type }) => {
  return (
    <motion.div
      layout
      transition={{
        delay: 0.2,
        default: { duration: 0.3, ease: 'easeInOut' },
      }}
      animate={{ opacity: 2, backgroundColor: 'tint' }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      {
        <ul className="displayCharacters-character">
          <img src={image} alt={image} />
          <li className="displayCharacters-name">{name}</li>
          <li>{status}</li>
          <li>{species}</li>
          <button> Details </button>{' '}
        </ul>
      }
    </motion.div>
  );
};
