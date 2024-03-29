import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { editMusicAction, removeMusicAction } from '../../redux/musics/musics';

const Music = ({ title, category, id }) => {
  const [headerContent, setHeaderContent] = useState('ABC');
  const [isEditMode, setIsEditMode] = useState(false);
  const author = 'UnKnown Artist';

  const dispatch = useDispatch();
  const newMusic = {
    headerContent, author, category, id,
  };
  const editMusictoStore = (id) => {
    setIsEditMode(false);
    dispatch(editMusicAction(id, newMusic));
  };

  const removeMusicfromStore = (id) => {
    dispatch(removeMusicAction(id));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 sm:gap-8 lg:gap-8">
      <div className="description col-span-1 lg:col-span-3">
        <p className="category text-title opacity-50 font-mont font-bold md:text-sm capitalize">{category}</p>

        {isEditMode ? (
          <input
            className="border border-blue-500 rounded-md p-4 title text-title font-robo font-bold text-xl md:text-2xl"
            type="text"
            value={headerContent}
            onChange={(e) => setHeaderContent(e.target.value)}
          />
        ) : (
          <p className="title text-title font-robo font-bold text-xl md:text-2x">
            {title}
          </p>
        )}

        <p className="text-link font-robo font-light md:text-sm mb-4">Unknown Artist</p>
        <button type="button" className="text-link font-robo font-light text-sm pr-2 lg:pr-4 hover:text-blue-900">Comments</button>
        <button type="button" className="text-link font-robo font-light text-sm pr-2 pl-2 lg:pr-4 lg:pl-4 border-r border-l border-gray-200 hover:text-blue-900" onClick={() => removeMusicfromStore(id)}>Remove</button>
        {isEditMode ? (
          <button type="button" className="text-link font-robo font-light text-sm pr-2 pl-2 lg:pr-4 lg:pl-4 border-r border-l border-gray-200 hover:text-blue-900" onClick={() => editMusictoStore(id)}>Save</button>
        ) : (
          <button type="button" className="text-link font-robo font-light text-sm pr-2 pl-2 lg:pr-4 lg:pl-4 border-r border-l border-gray-200 hover:text-blue-900" onClick={() => setIsEditMode(true)}>Edit</button>

        )}
      </div>
      <div className="hidden lg:flex progress col-span-1 lg:col-span-2 lg:pr-6 xl:p-0 lg:border-r border-gray-200 justify-center items-center">
        <div className="wrapper">
          <div className="arc arc_start" />
          <div className="arc arc_end" />
        </div>
        <div>
          <p className="text-title md:text-3xl font-mont font-normal">75%</p>
          <p className="text-title md:text-sm opacity-50 font-mont font-normal">Completed</p>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2">
        <p className="text-title opacity-50 font-robo font-light md:text-sm mb-2">CURRENT TRACK</p>
        <p className="text-title font-robo font-light md:text-base  mb-4 lg:mb-7">Track 1</p>
        <button type="button" className="bg-azure text-white py-2 px-8 font-robo font-light  text-xs md:text-sm rounded hover:bg-blue-600">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Music.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Music;
