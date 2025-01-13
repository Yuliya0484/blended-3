import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css';
import { Form } from 'react';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

const SearchForm = ({ onSubmit, value }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(event.target.elements.region.value);
  };
  return (
    <Form onSubmit={handleSubmit} className={styles.form}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        aria-label="select"
        className={styles.select}
        name="region"
        required
        defaultValue="default"
      >
        <option disabled value={value}>
          Select a region
        </option>
        <option value={value}>{regions}</option>
      </select>
    </Form>
  );
};

export default SearchForm;
