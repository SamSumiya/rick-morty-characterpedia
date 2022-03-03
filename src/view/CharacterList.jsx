import React from 'react';
import '../styles/CharacterList.css';
import { motion } from 'framer-motion';

export const CharacterList = ({ image, name, status, species, type }) => {
  const [clickForMore, setClickForMore] = React.useState(false);

 

  const handleClickForMore = () => {
    setClickForMore(!clickForMore);
  };

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
          <img src={image} alt={image} className="displayCharacters-image" />
          <div className="displayCharacters-name_wrapper">
            <div className="ellipsis-name">{name}</div>
            <li className="displayCharacters-name">{name}</li>
          </div>
          <li className="displayCharacters-species">{species}</li>
          <li className="displayCharacters-type">
            {type === ''
              ? 'Type: None'
              : `Type: ${clickForMore ? type : type.slice(0, 3)}`}
            <div onClick={handleClickForMore} className='showmore-showless'>
              {type==='' ? '': clickForMore ? '...more' : '...less'} 
            </div>
          </li>
          <li className="displayCharacters-status">{status}</li>
          <button> Details </button>
        </ul>
      }
    </motion.div>
  );
};
