import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import { Link, useLocation } from 'react-router-dom';

const CountryList = ({ countries }) => {
  const location = useLocation();
  return (
    <>
      <h2>CountryList</h2>
      <Grid>
        {countries.map(country => {
          <GridItem key={country.id}>
            <Link to={`/country/${country.id}`} state={location}>
              <img src={country.flag} alt={country.country} />
            </Link>
          </GridItem>;
        })}
      </Grid>
    </>
  );
};
export default CountryList;
