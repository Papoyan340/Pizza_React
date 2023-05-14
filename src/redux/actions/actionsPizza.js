import Axios from 'axios';

export const setLoaded = (payload) => ({
   type: 'SET_LOADING',
   payload,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
   console.log(sortBy);
   dispatch(setLoaded(false));

   Axios.get(
      `http://localhost:3001/pizzas?${
         category !== null ? `category=${category}` : ''
      }&_sort=${sortBy}&_order=desc`,
   ).then(({ data }) => {
      dispatch(setPizzas(data));
   });
};

export const setPizzas = (items) => ({
   type: 'SET_PIZZAS',
   payload: items,
});
