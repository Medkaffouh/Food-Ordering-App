import styles from "../styles/Footer.module.css"
import Image from "next/image"
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="" objectFit="cover"/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. THE PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1723 R. Don Road #304.
            <br /> Rabat, 323234
            <br /> (602) 854-1920
          </p>
          <p className={styles.text}>
            1723 R. Don Road #304.
            <br /> Rabat, 323234
            <br /> (602) 854-1920
          </p>
          <p className={styles.text}>
            1723 R. Don Road #304.
            <br /> Rabat, 323234
            <br /> (602) 854-1920
          </p>
          <p className={styles.text}>
            1723 R. Don Road #304.
            <br /> Rabat, 323234
            <br /> (602) 854-1920
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 -22:00
          </p>
          <p className={styles.text}>
            SATURDAY UNTIL SUNDAY
            <br /> 12:00 -24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer