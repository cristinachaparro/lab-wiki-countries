import { useParams, Link } from 'react-router-dom';

//This component should render the details of the clicked country, and it should receive the country code (alpha3Code) through the URL parameters. The alpha3Code is the id of the country (e.g., /ESP - Spain, /FRA - France).

function CountryDetails(props) {
  const params = useParams();
  const { allCountries } = props;
  const { alpha3Code } = params;

  const selectedCountry = allCountries.find((eachCountry) => {
    return alpha3Code === eachCountry.alpha3Code;
  });

  if (!selectedCountry) {
    return null;
  }

  const borderCountries = allCountries.filter((eachCountry) => {
    return selectedCountry.borders.includes(eachCountry.alpha3Code);
  });

  return (
    <div class="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`}
        alt={selectedCountry.name.common}
        height="50px"
      />
      <h1>{selectedCountry.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{selectedCountry.name.common}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {selectedCountry.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borderCountries.map((eachCountry) => {
                  return (
                    <li>
                      <Link to={`/country-details/${eachCountry.alpha3Code}`}>
                        {eachCountry.name.common}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
