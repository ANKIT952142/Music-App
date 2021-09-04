import React from 'react';
import { useLocation } from 'react-router';
import data from './songs.json';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

const Detail = () => {
  const location = useLocation();
  const [play, setPlay] = useState(false);
  const { name, cover, description, artist, source } = location.state;
  const newData = data.filter(song => song.favorited !== false);
  return (
    <>
      <span className="song">
        <img src={cover} alt={name} />
        <div className="song-info">
          <h1>{name}</h1>
          <h3>{artist}</h3>
          <p>{description}</p>

          <Link className="detailbtn" to="/">
            Back to Home
          </Link>
        </div>
      </span>
      <h3 className="simi">Similar Tracks</h3>

      <Swiper navigation={true} slidesPerView={4} className="mySwiper">
        {newData
          .filter(song => song.name !== name)
          .map(song => {
            return (
              <>
                <div>
                  <SwiperSlide>
                    <h4>{song.name}</h4>
                    <Link
                      to={{
                        pathname: '/detail',
                        state: {
                          name: song.name,
                          cover: song.cover,
                          description: song.description,
                          artist: song.artist,
                          source: song.source
                        }
                      }}
                    >
                      <img src={song.cover} alt={song.cover} />
                    </Link>
                  </SwiperSlide>
                </div>
              </>
            );
          })}
      </Swiper>

      <audio id="audio" src={source} controls autoPlay />
    </>
  );
};

export default Detail;
