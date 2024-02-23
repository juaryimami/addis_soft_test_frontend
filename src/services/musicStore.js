import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gKbdBULzeQgMvwW4IEc0/books';

const refactorDataFromAPI = (data) => {
  const initialMusics = [];
  Object.entries(data).forEach((music) => {
    initialMusics.push(
      {
        title: music[1][0].title,
        category: music[1][0].category,
        item_id: `${music[0]}`,
      },
    );
  });
  return initialMusics;
};

export const getInitialMusics = async () => {
  const response = await axios.get(baseURL);
  const { data } = response;
  return refactorDataFromAPI(data);
};

export const addMusicServer = async (newMusic) => {
  const response = await axios.post(baseURL, newMusic);
  return response.data;
};

export const editMusicServer = async (id, newMusic) => {
  const updateUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gKbdBULzeQgMvwW4IEc0/books/${id}`;
  const response = await axios.put(updateUrl, newMusic);
  return response.data;
};

export const removeMusicServer = async (id) => {
  const deleteURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gKbdBULzeQgMvwW4IEc0/books/${id}`;
  const response = await axios.delete(deleteURL);
  return response.data;
};
