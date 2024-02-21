import { v4 as uuidv4 } from 'uuid';
import { addMusicServer, getInitialMusics, removeMusicServer } from '../../services/musicStore';

// Inital State
const initialState = [];

// Actions types
const ADD_MUSIC = 'musicStore/musics/ADD_MUSIC';
const REMOVE_MUSIC = 'musicStore/musics/REMOVE_MUSIC';
const INIT_MUSICS = 'musicStore/musics/INIT_MUSIC';

// Action Creators
export const addInitialMusics = () => async (dispatch) => {
  const musics = await getInitialMusics();
  dispatch({
    type: INIT_MUSICS,
    payload: musics,
  });
};

export const addMusicAction = (title, author, category) => async (dispatch) => {
  const newMusic = {
    title,
    author,
    category,
    item_id: uuidv4(),
  };

  await addMusicServer(newMusic);

  dispatch({
    type: ADD_MUSIC,
    payload: newMusic,
  });
};

export const removeMusicAction = (id) => async (dispatch) => {
  await removeMusicServer(id);

  dispatch({
    type: REMOVE_MUSIC,
    payload: {
      item_id: id,
    },
  });
};

// Reducers
const musicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_MUSICS:
      return [...action.payload];
    case ADD_MUSIC:
      return [...state, action.payload];
    case REMOVE_MUSIC:
      return state.filter((music) => music.item_id !== action.payload.item_id);
    default:
      return state;
  }
};

export default musicsReducer;
