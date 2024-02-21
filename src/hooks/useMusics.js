import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addInitialMusics } from '../redux/musics/musics';

const useMusics = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addInitialMusics());
  }, [dispatch]);
};

export default useMusics;
