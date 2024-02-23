export const showStatus = () => ({
  type: 'SET_STATUS',
  payload: 'UNDER CONSTRUCTION',
}
);

const statusReducer = (state = {
  state: 'UNDER CONSTRUCTION',
}, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'SET_STATUS':
      // eslint-disable-next-line no-param-reassign
      state = {
        ...state,
        status: action.payload,
      };
      break;
  }
  return state;
};
export default statusReducer;
