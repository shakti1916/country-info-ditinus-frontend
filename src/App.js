import './App.css';
import CountrySearch from './components/CountrySearch';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate(); // Use navigate to programmatically change the URL

  const handleSearch = () => {
    navigate("/"); // Navigate back to the base URL
  };


  return (
    <div className='main-container'>
      <CountrySearch onSearch={handleSearch} /> {/* Pass handleSearch to CountrySearch */}
      
      <Routes>
        <Route path="/" element={<CountryList />} /> {/* Show list when on base URL */}
        <Route path="/:code" element={<CountryDetail />} /> {/* Show country detail when URL has a code */}
      </Routes>
    </div>
  );
}

export default App;
