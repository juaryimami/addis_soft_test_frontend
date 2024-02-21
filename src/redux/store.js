import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import musicsReducer from './musics/musics';
import statusReducer from './categories/categories';

const reducer = combineReducers({
  musics: musicsReducer, status: statusReducer,
});
export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,
    thunk),
});
