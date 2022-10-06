import { useSelector } from 'react-redux';

const Info = () => {
  const country = useSelector((state) => state.countries);

  return (

    <div className="detail">

      <h2>{country[0].name.common}</h2>
      <table id="customers">
        <tr>
          <th>Capital</th>
          <th>Population</th>
          <th>Continent</th>
        </tr>
        <tr>
          <td>{country[0].capital[0]}</td>
          <td>
            {country[0].population / 1000000 }
            {' '}
            Millions
          </td>
          <td>{country[0].continents}</td>
        </tr>
        <tr>
          <th>Area</th>
          <th>Latitude°</th>
          <th>Borders</th>
        </tr>
        <tr>
          <td>
            {country[0].area}
            {' '}
            Kilometer
          </td>
          <td>{country[0].latlng}</td>
          <td>{country[0].borders.join(',')}</td>
        </tr>

      </table>
      <h3>Coat Of Arms</h3>
      <img src={country[0].coatOfArms.png} alt="country-data" style={{ height: '120px', width: 'auto' }} />

    </div>

  );
};

export default Info;
