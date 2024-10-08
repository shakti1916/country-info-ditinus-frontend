import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountryDetail } from '../features/countrySlice';
import LoadingSpinner from './Spinner';


const CountryDetail = () => {
    const { code } = useParams();  // Get the country code from the URL
    const dispatch = useDispatch();


  const { countryDetail, loading, error } = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(fetchCountryDetail(code));  // Fetch country details based on the URL param
  }, [dispatch, code]);

  if (loading) return <LoadingSpinner/>;
  if (error) return <p>{error}</p>;
  if (!countryDetail) return <p>
    No country found
  </p>;

  return (
    <div className='country-card-detail-container' style={{display:"flex",justifyContent:"center"}}>
    <div className='country-card'>
      <h2>{countryDetail[0].name.common}</h2>
      <img src={countryDetail[0].flags.svg} alt={`Flag of ${countryDetail[0].name.common}`} width="100" />
      <p>Capital: {countryDetail[0].capital}</p>
      <p>Region: {countryDetail[0].region}</p>
      <p>Languages: {Object.values(countryDetail[0].languages).join(', ')}</p>
    </div>
    </div>
  );
};

export default CountryDetail;
