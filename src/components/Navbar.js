/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { showCountries } from '../redux/Home/home';
import engra from '../img/engra.png';
import micc from '../img/micc.png';

function Navbar() {
  const country = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(showCountries(country[0].ccn3));
  };

  const links = [
    {
      id: 1,
      path: '/',
      text: '<',
    },
  ];

  return (
    <nav>
      <ul className="navBar">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path} activeClassName="active-link" exact>
              <p onClick={handleBack}>
                {link.text}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <h3>COUNTRY DETAILS</h3>
      <img src={micc} alt="microphone" />
      <img src={engra} alt="engra" />
    </nav>
  );
}
export default Navbar;
