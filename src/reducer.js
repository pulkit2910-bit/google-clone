const initialState = {
  term: null,
  isLoading: false
};

const reducer = (state, action) => {
  console.log(action);
  return {
    ...state,
    term: action.term,
  };
};

export default reducer;
export { initialState };
