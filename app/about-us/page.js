import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import math from '../../public/images/elev-grey.png';
import omOssTop from '../../public/images/about-us-grey.png';
import omOssBottom from '../../public/images/linjal-grey.png';

const page = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        <div className={styles.h1Wrapper}>
          <h1 className={styles.h1}>Om oss</h1>
        </div>
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
              <div className={styles.titleContainer}>
                <h3>PROJEKTGRUPPEN</h3>
              </div>
              <div className={styles.contentWrapper}>
                <div className={styles.lineContainer}> </div>
                <div className={styles.textContainer}>
                  <p>
                    Projektgruppen som har utvecklat ABACUSCAMP är: <br />{' '}
                    <b> -Christer Norström</b>, professor och ordförande
                    stiftelsen Fryx, ordförande ABB Gymnasiet, <br />{' '}
                    <b>-Petra Nygård</b>, rektor Mälardalen International
                    School, <br />
                    <b>-Peter Kallioniemi</b>, matematiklärare Fryxellska
                    skolan, <br /> <b>-Lisa Engström</b>, AIoch
                    programmeringsexpert ABB Gymnasiet,
                    <br />
                    <b>-Emmy Henriksson</b>, lärarassistent ABB Gymnasiet,
                    <br />
                    <b>-Ahmad Alali</b>, Civilingenjörstudent MDU och
                    lärarassistent Mälardalen International School,
                    <br />
                    <b>-Laith Ali Basha</b>, Civilingenjörstudent KTH,
                    <br />
                    <b>-Joakim Flink</b>, AI-lärare ABB Gymnasiet, <br />
                    <b>-Tina Degerstedt</b>, förälder <br />{' '}
                    <b>-Andreas Wiik</b>, VD/skolchef/rektor Fryxellska skolan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bottom container */}
        <div className={styles.bottomContainer}>
          <div className={styles.bottomLeftContainer}>
            <div className={styles.bottomLeftTextContainer}>
              <div className={styles.titleContainer}>
                <h3>BAKGRUND</h3>
              </div>
              <div className={styles.contentWrapper}>
                <div className={styles.lineContainer}> </div>
                <div className={styles.textContainer}>
                  <p>
                    För speciellt intresserade och särskilt begåvade elever inom
                    matematik, teknik och naturvetenskap finns idag alltför få
                    utmaningar. <br /> Elever med särskild begåvning behöver bli
                    stimulerade och få möta likasinnade elever för att inte
                    tappa motivationen eller hamna i utanförskap.
                    <br /> Forskning visar att många talangfulla elever
                    underpresterar för att passa in i den svenska skolan (Sims
                    2021). <br />
                    Vi vill bemöta behoven hos dessa elever som i brist på
                    motivation och utmaning riskerar att bli s.k. hemmasittare
                    eller att drabbas av psykisk ohälsa.
                  </p>
                </div>
              </div>
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
