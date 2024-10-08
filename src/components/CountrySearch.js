import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountries } from '../features/countrySlice';
import { GrSearch } from 'react-icons/gr'; // Ensure you have react-icons installed


const CountrySearch = ({onSearch}) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (name.trim()) {
      dispatch(fetchCountries(name));
      onSearch();   
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Search country"
        className="search-input"
        onKeyDown={handleKeyPress} 
      />
      <div className="search-icon">
        <GrSearch onClick={handleSearch} />
      </div>
    </div>
  );
};

export default CountrySearch;
