import styles from '../styles/AquilasList.module.css';
import AquilasCard from './AquilasCard';

const AquilasList = ({ aquilasList }) => {
  return (
    <div className={styles.container} id="products">
      <h1 className={styles.title}>THE BEST CRAB PASTE IN TOWN!</h1>
      <p className={styles.desc}>
        Our products are all natural no MSG, no preservatives, We use
        industry-standard cooking equipment in preparing our bottled food. They
        are pressure-canned so they are able to withstand high-altitude.
      </p>
      <div className={styles.wrapper}>
        {aquilasList.map((aquilascrab) => (
          <AquilasCard key={aquilascrab._id} aquilascrab={aquilascrab} />
        ))}
      </div>
    </div>
  );
};

export default AquilasList;
