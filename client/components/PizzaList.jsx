import styles from "../styles/PizzaList.module.css";
import Image from "next/image";
import PizzaCard from "./PizzaCard";
const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
        praesentium, ad ex quos repellendus tempora! Debitis, eaque sunt dolorem
        sit illo aspernatur aperiam! Tempore alias cumque aliquid odit sed
        placeat.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza)=>(
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
