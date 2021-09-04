import React from 'react';
import Navbar from './Navbar';
import { useState } from 'react';
import data from './songs.json';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';
import 'swiper/swiper.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';

SwiperCore.use([EffectCoverflow, Pagination]);
const Trending = () => {
  const newData = data.filter(song => song.trending !== false);
  const [query, setQuery] = useState('');

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={e => setQuery(e.target.value.toLowerCase())}
        />
      </form>
      <Navbar />
      <Swiper
        className="swiper"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 100,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        pagination={true}
      >
        {newData.map(song => {
          return (
            <>
              <div>
                {song.name.toLowerCase().includes(query) ? (
                  <div>
                    <SwiperSlide>
                      <h1>{song.name}</h1>
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
                ) : (
                  ''
                )}
              </div>
            </>
          );
        })}
      </Swiper>
    </>
  );
};

export default Trending;
