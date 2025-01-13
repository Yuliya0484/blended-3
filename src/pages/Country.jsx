import { useEffect, useState } from 'react';
import { fetchCountry } from '../service/countryApi';
import { useParams } from 'react-router-dom';
import CountryInfo from '../components/CountryInfo/CountryInfo';
import Section from '../components/Section/Section';
import Container from '../components/Container/Container';

const Country = () => {
  const [countryInfo, setCountryInfo] = useState({});
  const { countryId } = useParams();

  useEffect(() => {
    const getCountry = async () => {
      const country = await fetchCountry(countryId);
      setCountryInfo(country);
    };

    getCountry();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <CountryInfo {...countryInfo} />
      </Container>
    </Section>
  );
};

export default Country;
