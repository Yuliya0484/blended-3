import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import CountryList from '../components/CountryList/CountryList';
import { getCountries } from '../service/countryApi';
//import ErrorMessage from '../components/ErrorMessage/ErrorMessage'

const Home = () => {
  const [countryList, setCountryList] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getCountryList = async () => {
      try {
        const countries = await getCountries();
        setCountryList(countries);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsError(false);
      }
    };
    getCountryList();
  }, []);
  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        {isError ? <ErrorMessage /> : <CountryList countries={countryList} />}
        <CountryList countries={countryList} />
      </Container>
    </Section>
  );
};
export default Home;
