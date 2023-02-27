import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import math from '../../public/images/math.jpg';
import omOssTop from '../../public/images/lecture.jpg';
import omOssBottom from '../../public/images//om-oss-bottom.jpg';

const page = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        <h1 className={styles.h1}>Om Oss</h1>
        <Image src={math} alt="" sizes="true" className={styles.mathImg} />
      </div>
      <div className={styles.textContainer}>
        {/* top container */}
        <div className={styles.topContainer}>
          <div className={styles.topLeftContainer}>
            <div className={styles.topImgContainer}>
              <Image
                src={omOssTop}
                alt=""
                sizes="true"
                className={styles.aboutTopImg}
              />
            </div>
          </div>
          <div className={styles.topRightContainer}>
            <div className={styles.topRightTextContainer}>
              <h3>PROJEKTGRUPPEN</h3>
              <p>
                Projektgruppen som har utvecklat ABACUSCAMP är: Christer
                Norström, professor och ordförande stiftelsen Fryx, ordförande
                ABB Gymnasiet, Petra Nygård, rektor Mälardalen International
                School, Peter Kallioniemi, matematiklärare Fryxellska skolan,
                Lisa Engström, AIoch programmeringsexpert ABB Gymnasiet, Emmy
                Henriksson, lärarassistent ABB Gymnasiet, Ahmad Alali,
                Civilingenjörstudent MDU och lärarassistent Mälardalen
                International School, Laith Ali Basha, Civilingenjörstudent KTH,
                Joakim Flink AI-lärare ABB Gymnasiet, Tina Degerstedt, förälder
                och Andreas Wiik, VD/skolchef/rektor Fryxellska skolan.
              </p>
            </div>
          </div>
        </div>
        {/* bottom container */}
        <div className={styles.bottomContainer}>
          <div className={styles.bottomLeftContainer}>
            <div className={styles.bottomLeftTextContainer}>
              <h3>BAKGRUND</h3>
              <p>
                För speciellt intresserade och särskilt begåvade elever inom
                matematik, teknik och naturvetenskap finns idag alltför få
                utmaningar. Elever med särskild begåvning behöver bli
                stimulerade och få möta likasinnade elever för att inte tappa
                motivationen eller hamna i utanförskap. Forskning visar att
                många talangfulla elever underpresterar för att passa in i den
                svenska skolan (Sims 2021). Vi vill bemöta behoven hos dessa
                elever som i brist på motivation och utmaning riskerar att bli
                s.k. hemmasittare eller att drabbas av psykisk ohälsa.
              </p>
            </div>
          </div>
          <div className={styles.bottomRightContainer}>
            <div className={styles.bottomImgContainer}>
              <Image
                src={omOssBottom}
                alt=""
                sizes="true"
                className={styles.aboutBottomImg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
