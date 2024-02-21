import React from 'react';
import { useSelector } from 'react-redux';
import useMusics from '../../hooks/useMusics';
import Music from './Music';

const MusicList = () => {
  const musics = useSelector((state) => state.musics);

  useMusics();

  return (
    <div className="px-8 sm:px-16 lg:px-24 xl:px-28 2xl:px-40 bg-backg py-9">
      <ul className="booklist__container container mx-auto lg:overflow-y-auto">
        {musics.map((music) => (
          <li
            key={music.item_id}
            className="bg-white px-7 py-7 rounded mb-4"
          >
            <Music title={music.title} category={music.category} id={music.item_id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
