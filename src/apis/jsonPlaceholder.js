import axios from 'axios';

//  Creates a new object for making an api call
export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});
