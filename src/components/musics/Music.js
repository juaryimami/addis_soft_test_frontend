import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { useForm } from '@mantine/form';
import { removeMusicAction } from '../../redux/musics/musics';

const Music = ({ title, category, id }) => {
  const form = useForm({
    initialValues: {
      title: '',
      categoru: '',
      parentId: '',
    },
    validate: (values) => ({
      name: values.name.length < 2 ? 'To short Role name' : null,
      description: values.description.length < 15 ? 'To short description' : null,
      parentId: values.parentId === undefined ? 'Parent id required'
        : +values.parentId < 0 ? 'parent id should be > 0'
          : null,
    }),
  });

  const dispatch = useDispatch();

  const removeMusicfromStore = (id) => {
    dispatch(removeMusicAction(id));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 sm:gap-8 lg:gap-8">
      <div className="description col-span-1 lg:col-span-3">
        <p className="category text-title opacity-50 font-mont font-bold md:text-sm capitalize">{category}</p>
        <p className="title text-title font-robo font-bold text-xl md:text-2xl">{title}</p>
        <p className="text-link font-robo font-light md:text-sm mb-4">Owner</p>
        <button type="button" className="text-link font-robo font-light text-sm pr-2 lg:pr-4 hover:text-blue-900">Comments</button>
        <Popup className="bg-gray-900" trigger={<button type="button" className="text-link font-robo font-light text-sm pr-2 pl-2 lg:pr-4 lg:pl-4 border-r border-l border-gray-200 hover:text-blue-900">Remove</button>} position="top middle">
          <h3>Are you sure to delete this music?</h3>
          <button type="button" className="text-link font-robo font-light text-sm pr-2 pl-2 lg:pr-4 lg:pl-4 border-r border-l border-gray-200 hover:text-blue-900" onClick={() => removeMusicfromStore(id)}>Yes</button>
        </Popup>

        <button type="button" className="text-link font-robo font-light text-sm pl-2 lg:pl-4 hover:text-blue-900">Edit</button>
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
        <p className="text-title opacity-50 font-robo font-light md:text-sm mb-2">CURRENT Track</p>
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
