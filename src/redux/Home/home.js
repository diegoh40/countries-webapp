const UPDATE_COUNTRIES = 'src/redux/Home/UPDATE_COUNTRIES';
const SELECT_COUNTRY = 'src/redux/Home/SELECT_COUNTRY';
const SHOW_ALL = 'src/redux/Home/SHOW_ALL';

// state
const initialState = [];

// action creators

export const showCountries = (event) => async (dispatch) => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const data = await res.json();
  const continents = data.filter((el) => el.continents[0] === event);
  dispatch({
    type: UPDATE_COUNTRIES,
    continents,
  });
};

export const showCountriesAll = () => async (dispatch) => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const data = await res.json();
  dispatch({
    type: SHOW_ALL,
    data,
  });
};

export const selectCountry = (id) => async (dispatch) => {
  dispatch({
    type: SELECT_COUNTRY,
    id,
  });
};

// reducer
export default function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_COUNTRIES:
      return action.continents;
    case SHOW_ALL:
      return action.data;
    case SELECT_COUNTRY:
      return [...state.filter((el) => el.ccn3 === action.id)];
    default:
      return state;
  }
}
