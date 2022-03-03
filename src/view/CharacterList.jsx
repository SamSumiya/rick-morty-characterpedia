import React from 'react';
import '../styles/CharacterList.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGrin } from '@fortawesome/free-solid-svg-icons';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

export const CharacterList = ({ image, name, status, species, type, location }) => {
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
          <li className="displayCharacters-species">{species.slice(0, 12)}</li>
          <li className="displayCharacters-type">
            {type === ''
              ? 'Type: None'
              : `Type: ${clickForMore ? type : type.slice(0, 5)}`}
            <div onClick={handleClickForMore} className="showmore-showless">
              {type === '' ? '' : clickForMore ? '...more' : '...less'}
            </div>
          </li>
          <li className="displayCharacters-status">
            {status === 'Alive' ? (
              <p style={{ color: '#b3e680' }}>
                <FontAwesomeIcon
                  icon={faGrin}
                  style={{ color: '#e1ffc5', fontSize: '.7rem' }}
                />
                <span style={{ margin: '7px' }}>{'Alive'}</span>
              </p>
            ) : (
              <p>
                {status === 'Dead' ? (
                  <p style={{ color: '#e68080' }}>
                    <FontAwesomeIcon
                      icon={faSkull}
                      style={{ color: '#ea9999' }}
                    />
                    <span style={{ margin: '7px', fontSize: '.7rem' }}>
                      {'Dead'}
                    </span>
                  </p>
                ) : (
                  <p style={{ color: '#b680e6' }}>
                    <FontAwesomeIcon
                      icon={faQuestion}
                      style={{ color: '#ccabea', fontSize: '.7rem' }}
                    />
                    <span style={{ margin: '7px' }}>{'Unknown'}</span>
                  </p>
                )}{' '}
              </p>
            )}
          </li>
          <li className="character-location">
            <FontAwesomeIcon
              icon={faLocationArrow}
              className="character-location-icon"
            />
            <div className="character-location-details">{location}</div>
          </li>

          {/* <div className="character-button-wrapper"> */}
          <button className="character-button-wrapper">
            <div className="character-button">
              <span>
                Details <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </button>
          {/* </div> */}
        </ul>
      }
    </motion.div>
  );
};
