import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { showCountries, selectCountry } from '../redux/Home/home';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const handleContinents = (event) => {
    dispatch(showCountries(event.target.value));
  };
  useEffect(() => {
    window.addEventListener('click', handleContinents);
    return () => {
      window.removeEventListener('click', handleContinents);
    };
  }, []);

  const handleCountry = (id) => {
    dispatch(selectCountry(id));
  };

  return (
    <div>
      <form>
        <select>
          <option onChange={handleContinents} value="Africa">Africa</option>
          <option onChange={handleContinents} value="Asia">Asia</option>
          <option onChange={handleContinents} value="South America">South America</option>
          <option onChange={handleContinents} value="North America">North America</option>
          <option onChange={handleContinents} value="Europe">Europe</option>
        </select>
      </form>

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
