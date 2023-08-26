import React from 'react';
import { Link } from 'react-router-dom';


const CountryTable = ({ countries, handleCountryClick }) => {



    return (
        <table className="table table-dark">
            <thead>
                <tr className="text-center fs-4"  >
                    <th >
                    Flag</th>
                    <th>Name</th>
                    <th>Id</th>
                </tr>
            </thead>
            <tbody>
                {countries.map((el) => (
                    <tr
                        key={el.ccn3}
                        onClick={() => {
                            handleCountryClick(el.ccn3);
                        }}
                        className="text-start fs-6"
                      
                    >
                        <td>
                            <Link to="/Info" key={el.ccn3} activeClassName="active-link" exact>
                                <img src={el.flags.png} alt="Flag" style={{ height: '60px', width: '90px' }} />
                            </Link>
                        </td>
                        <td >
                            <Link to="/Info" key={el.ccn3} activeClassName="active-link" exact className="text-start fs-6">
                                {el.name.common}
                            </Link>
                        </td>
                        <td>{el.ccn3}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CountryTable;
