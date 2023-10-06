import styles from "./page.module.css";
import Image from "next/image";
import Card from "../../components/contact/Card";
import fryx from "../../public/images/fryx-logga.png";
import mal from "../../public/images/mälar-logga.png";
import math from "../../public/images/elev-grey.png";
import hitachi from "../../public/images/hitachi-bild.png";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <div className={styles.h1Wrapper}>
          <h1 className={styles.h1}>Kontakta oss</h1>
        </div>
        <Image src={math} alt="" sizes="true" className={styles.mathImg} />
      </div>
      <div className={styles.mainCardContainer}>
        <div className={styles.mainWrapper}>
          <div className={styles.visitText}>
            <h4>Kontakt:</h4> <br/>
            <div className={styles.contactPersonContainer}>

            <p>Ahmad Alali</p>    <p>ahmad.alali@misv.se </p>
            <p>0729276012</p>
            </div>
          </div>
          <div className={styles.samarbetsContainer}>
            <p>Våra samarbetspartners </p>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.cardWrapper}>
              <Card
                href={"https://vasteras.hitachigymnasiet.se/"}
                img={hitachi}
                h2={"Hitachi Gymnasiet"}
              />
            </div>
            <div className={styles.cardWrapper}>
              <Card
                href={"https://fryx.se/"}
                img={fryx}
                h2={"Fryxellska skolan"}
              />
            </div>
            <div className={styles.cardWrapper}>
              <Card
                href={"https://www.misv.se/"}
                img={mal}
                h2={"Mälardalens international school"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
