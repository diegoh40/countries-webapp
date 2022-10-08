import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { showCountries, selectCountry, showCountriesAll } from '../redux/Home/home';

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
  ];

  return (
    <div>

      <div className="select">
        <h3>Select a Continent</h3>
        <div className="btn">
          {worldContinents.map((el) => (
            <button key={el.id} onClick={handleContinents} value={el.name} type="button" aria-hidden="true">
              {el.name}
            </button>
          ))}
        </div>
      </div>

      <div className="container">
        {countries.map((el) => (
          <Link to="/Info" key={el.ccn3} activeClassName="active-link" exact>
            <div
              className="item"
              key={el.ccn3}
              onClick={() => {
                handleCountry(el.ccn3);
              }}
              aria-hidden="true"
            >
              <img src={el.flags.png} alt="sdsd" style={{ height: '60px', width: 'auto' }} />
              <p>
                {el.name.common}
              </p>
              <h6>
                Id:
                {el.ccn3}
              </h6>

            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Countries;
