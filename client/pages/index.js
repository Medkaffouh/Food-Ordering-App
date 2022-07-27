import Head from "next/head";
import Image from "next/image";
import PizzaList from "../components/PizzaList";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Rabat</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () =>{
  const res = await axios.get("http://localhost:3000/api/products");
  return{
    props:{
      pizzaList: res.data,
    }
  }
}