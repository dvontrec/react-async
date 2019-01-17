import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // fetches posts
  await dispatch(fetchPosts());
  // returns an array of unique user ids
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // fetches the users for each user id
  userIds.forEach(id => dispatch(fetchUser(id)));
};
//  Creates an async action creator
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  // dispatches this object when function has been ran
  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  });
};

//  action to fetch one user as a time
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
};

// Creates a memoised version of fetch user to reduce api calls
// action to fetch one user as a time
// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   });
// });
