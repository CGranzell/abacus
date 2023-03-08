import React from 'react';
import styles from '../../styles/welcomeSection/WelcomeTextCard.module.css';

const WelcomeTextCard = ({ onBackClick }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <h1>Välkommen till AbacusCamp </h1>
        <p> Avancerad matematik och <br/> programmering </p>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textWrapper}>
          <p>
            För speciellt intresserade och särskilt begåvade elever inom <br />
            matematik, teknik och naturvetenskap finns idag alltför få <br />
            utmaningar. Elever med särskild begåvning behöver bli stimulerade
            och få möta likasinnade elever för att inte tappa
            motivationen <br /> eller hamna iutanförskap. Forskning visar att
            många talangfulla <br />
            elever underpresterar för att passa in i den svenska skolan (Sims
            2021). Vi vill bemöta behoven hos dessa elever som i brist på
            <br /> motivation och utmaning riskerar att bli s.k. hemmasittare{' '}
            <br />
            eller att drabbas av psykisk ohälsa.
          </p>
          <div className={styles.ctaContainer}>
            <button onClick={onBackClick}>Se alla events {'>'} </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeTextCard;
