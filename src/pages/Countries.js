import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { showCountries, selectCountry, showCountriesAll } from '../redux/Home/home';
import './Countries.css';
import CountryTable from './tableCountries';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showCountriesAll());
  }, []);

  const handleContinents = (event) => {
    dispatch(showCountries(event.target.value));
  };

  const handleCountry = (id) => {
    dispatch(selectCountry(id));
  };



  const worldContinents = [
    { name: 'Africa', id: 1 },
    { name: 'Asia', id: 2 },
    { name: 'Europe', id: 3 },
    { name: 'South America', id: 4 },
    { name: 'North America', id: 5 },
    { name: 'Oceania', id: 6 },
  ];

  return (
    <div className=" bg-danger-subtle" >

      <div className="select">
        <h3>Select a Continent</h3>
        <div className="d-flex flex-wrap">
          {worldContinents.map((el) => (
            <button
              key={el.id}
              onClick={handleContinents}
              value={el.name} type="button"
              className="btn btn-primary ms-2 mb-2 px-3"
              aria-hidden="true">
              {el.name}
            </button>
          ))}
        </div>
      </div>
      <br />
    
      <div className="col  items-center">
            <h1>Countries List</h1>
      <div className="m-5">
      <CountryTable countries={countries} handleCountryClick={handleCountry} />

      </div>
    </div>

    </div>
  );
};

export default Countries;
