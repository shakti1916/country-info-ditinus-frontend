import { useSelector } from 'react-redux';
import CountryCard from './CountryCard';
import LoadingSpinner from './Spinner';

const CountryList = () => {
  const { countries, loading, error } = useSelector((state) => state.countries);

  if (loading) return <LoadingSpinner/>;
  if (error) return <p style={{ color: 'red', fontWeight: 'bold',textAlign:"center" }}>Error: {error}</p>;
  

  return (
    <div className="country-list-container">
      {countries.length > 0 &&
        countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))
      
      }
    </div>
  );
};

export default CountryList;
