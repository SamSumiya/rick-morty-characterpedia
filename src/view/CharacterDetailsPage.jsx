import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CharacterDetails.css';

export const CharacterDetailsPage = ({
  createdTime,
  episode,
  gender,
  image,
  name,
  species,
  status,
  origin,
  location,
  // nextCharacter,
}) => {
  const [showMoreOrLess, setShowMoreOrLess] = React.useState(false);

  const handleShowMoreOrLess = () => {
    setShowMoreOrLess(!showMoreOrLess);
  };

  const navigate = useNavigate()

  return (
    <div className="character-wrapper">
      <div className="character-detail-wrapper ">
        <button onClick={() => navigate(-1)} className="go-back-button">
          Back
        </button>
        <div className="character-intro">
          <img
            src={image}
            alt="rick and morty character"
            className="character-intro_image"
          />
          <div className="character-intro_name">{name}</div>
        </div>
        <div
          style={{
            borderBottom: '1px solid #3a3a3a',
            width: '90%',
            margin: '1rem auto',
          }}
        ></div>
        <div className="character-Detail">
          <div className="character-info"> Info </div>
          <div className="character-detail-listInfo">
            <div className="character-status">
              Status: <span> {status} </span>
            </div>
            <div className="character-gender">
              Gender:<span> {gender} </span>
            </div>
            <div className="character-species">
              Species: <span> {species} </span>
            </div>
            <div className="character-origin">
              Origin: <span>{origin} </span>
            </div>
            <div className="character-location-info">
              Last Seen: <span>{location}</span>
            </div>
            <div className="character-createdTime">
              CreatedTime: {createdTime?.slice(0, 10)}
            </div>
          </div>
        </div>

        {/* <button>Next</button> */}
      </div>
      <div className="Character-episodes">
        <div className="Character-episodes-title">
          Total Episodes: {episode?.length}
        </div>
        {showMoreOrLess
          ? episode?.map((item, index) => {
              return (
                <ul key={index}>
                  <a className='one-episode' href={item} style={{ color: '#a9a8a8' }}>
                    {item}
                  </a>
                </ul>
              );
            })
          : episode?.slice(0, 5).map((item, index) => {
              return (
                <ul key={index}>
                  <a
                    className="one-episode"
                    href={item}
                    style={{ color: '#a9a8a8' }}
                  >
                    {item}
                  </a>
                </ul>
              );
            })}
        <span onClick={handleShowMoreOrLess}>
          {showMoreOrLess
            ? '...less'
            : episode?.legnth > 5
            ? '...less'
            : episode?.length < 5
            ? ''
            : '...more'}
        </span>
      </div>
    </div>
  );
};
