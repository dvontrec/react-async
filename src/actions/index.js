import jsonPlaceholder from '../apis/jsonPlaceholder';

//  Creates an async action creator
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  // dispatches this object when function has been ran
  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  });
};
