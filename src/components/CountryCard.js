import { useDispatch } from 'react-redux';
import { fetchCountryDetail } from '../features/countrySlice';
import { useNavigate } from 'react-router-dom';

const CountryCard = ({ country }) => {
    const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = () => {
    navigate(`/${country.cca3}`);  // Redirect to /country-code
    // Fetch detailed info
  };

  return (
    <div onClick={handleClick} className='country-card'>
      <h3>{country.name.common}</h3>
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} width="50" />
      <p>Population: {country.population.toLocaleString()}</p>
    </div>
);
};

export default CountryCard;
