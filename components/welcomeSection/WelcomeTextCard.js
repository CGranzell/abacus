import React from "react";
import styles from "../../styles/welcomeSection/WelcomeTextCard.module.css";

const WelcomeTextCard = ({ onBackClick }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <h1>Välkommen till AbacusCamp </h1>
        <p>
        En förening för särbegåvade individer med intresse för matematik, teknik och naturvetenskap.
        </p>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textWrapper}>
          <p>
            AbacusCamp är en förening där individer träffas för att ha roligt,
            utvecklas och utforska sitt intresse för matematik, teknik och
            naturvetenskap. Genom att omvandla våra teoretiska beräkningar
            skapar vi en kreativ verklighet som verifierar teorin. Föreningens
            huvudsakliga målgrupp är särbegåvade ungdomar som går på högstadiet
            och i gymnasiet. Föreningen drivs av engagerade coacher som
            tillsammans med deltagarna träffas fysiskt för det är i dessa möten
            som magi uppstår.
          </p>
          <div className={styles.ctaContainer}>
            <button onClick={onBackClick}>Se alla events {">"} </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeTextCard;
