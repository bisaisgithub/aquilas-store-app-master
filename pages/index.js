import axios from 'axios';
import Head from 'next/head';
import { useState, useEffect} from 'react';
import Add from '../components/Add';
import AddButton from '../components/AddButton';
import AquilasList from '../components/AquilasList';
import Featured from '../components/Featured';
import styles from '../styles/Home.module.css';

export default function Home({  admin }) {
  console.log('admin', admin)
  const [close, setClose] = useState(true);
  const [aquilasList, setAquilasList] = useState([]);
  useEffect(()=>{
   getList()
  })
  const getList = async()=>{
    const res = await axios.get(
      // `${process.env.NEXT_PUBLIC_SERVER}/api/products`
        //  'http://localhost:3000/api/products'
      // `https://aquilas-store-app.vercel.app/api/products`
      `https://aquilas-store-app-master.vercel.app/api/products`
    );
    setAquilasList(res.data)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Aquilas Homemade Food Trading</title>
        <meta name="description" content="Best Crab paste in Philippines" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <AquilasList aquilasList={aquilasList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || '';
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  // const res = await axios.get(`${process.env.SERVER}/api/products`);
  // const res = await axios.get(
  //   `http://localhost:3000/api/products`
  //      'http://localhost:3000/api/products'
  //   `https://aquilas-store-app.vercel.app/api/products`
  // );
  return {
    props: {
      // aquilasList: [],
      // aquilasList: res.data,
      admin,
    },
  };
};
