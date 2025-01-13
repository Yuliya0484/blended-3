import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import { useSearchParams } from 'react-router-dom';
import CountryList from '../components/CountryList/CountryList';
import SearchForm from '../components/SearchForm/SearchForm';
import { fetchByRegion } from '../service/countryApi';

const SearchCountry = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const region = searchParams.get('region'); 
  
  useEffect(() => {
    if (!region) {
      return;
    }
    const getCountriesByRegion = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const countries = await fetchByRegion(region);
        setCountriesList(countries);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getCountriesByRegion();
  }, [region]);

  const handleSearch = region => {
    setSearchParams.set({ "region", region });
    setSearchParams(searchParams);
  };
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSearch} value={region} />
        {isLoading && <Loader />}
        {isError ?(<ErrorMessage/>) : (countriesList && <CountryList countries={countriesList}/>)}
      </Container>
    </Section>
  );
};

export default SearchCountry;
