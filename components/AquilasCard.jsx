import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/AquilasCard.module.css';

const AquilasCard = ({ aquilascrab }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${aquilascrab._id}`} passHref>
        <Image src={aquilascrab.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{aquilascrab.title}</h1>
      <span className={styles.price}>php{aquilascrab.prices[0]}</span>
      <p className={styles.desc}>{aquilascrab.desc}</p>
    </div>
  );
};

export default AquilasCard;
