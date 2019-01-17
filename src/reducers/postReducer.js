export default (state = [], action) => {
  switch (action.type) {
    //  If the action type is fetch post return the payload
    case 'FETCH_POSTS':
      return action.payload;
    // by default return state
    default:
      return state;
  }
};
