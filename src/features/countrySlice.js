import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosInstance'; 

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async (name) => {
    console.log("api first")
  const response = await axiosInstance.get(`/countries?name=${name}`);
  console.log(response)
  console.log("response")

  return response.data;
});

// Fetch details of a selected country
export const fetchCountryDetail = createAsyncThunk('countries/fetchCountryDetail', async (code) => {
    console.log("api second")
  const response = await axiosInstance.get(`/countries/${code}`);
  console.log("response")
  console.log(response)

  return response.data;
});

const countrySlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    countryDetail: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null; 

      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
        state.error = null; 

      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.error = 'Error in fetching countries'; 

      })
      .addCase(fetchCountryDetail.pending, (state) => {
        state.loading = true;
        state.error = null; 
        
      })
      .addCase(fetchCountryDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.countryDetail = action.payload;
        state.error = null; 
        
      })
      .addCase(fetchCountryDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error in fetching country details"; 

      });
  },
});

export default countrySlice.reducer;
