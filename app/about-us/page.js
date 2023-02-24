import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import math from '../../public/images/math.jpg';

const page = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        <h1 className={styles.h1}>Om Oss</h1>
        <Image src={math} alt="" sizes="true" className={styles.mathImg} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textWrapper}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis
            scelerisque fermentum dui faucibus in ornare quam viverra. Nisi
            vitae suscipit tellus mauris a diam. Pellentesque pulvinar
            pellentesque habitant morbi. Nulla malesuada pellentesque elit eget
            gravida cum sociis natoque. Enim neque volutpat ac tincidunt vitae
            semper quis lectus. Venenatis a condimentum vitae sapien
            pellentesque habitant. Ultricies mi quis hendrerit dolor magna.
            Tristique sollicitudin nibh sit amet commodo nulla. Lectus magna
            fringilla urna porttitor. Elementum facilisis leo vel fringilla. Mi
            proin sed libero enim sed faucibus. Aliquam ultrices sagittis orci
            a. Id faucibus nisl tincidunt eget. Adipiscing bibendum est
            ultricies integer quis auctor elit sed. Fermentum posuere urna nec
            tincidunt praesent. Scelerisque purus semper eget duis at tellus.
            Nec ullamcorper sit amet risus nullam eget felis. Gravida neque
            convallis a cras semper. Fusce ut placerat orci nulla pellentesque.
            Risus quis varius quam quisque id diam vel quam. Orci a scelerisque
            purus semper eget duis. Adipiscing elit ut aliquam purus. Mattis
            vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor.
            Rhoncus dolor purus non enim praesent elementum facilisis. Donec
            enim diam vulputate ut pharetra sit amet aliquam id. Nulla
            pellentesque dignissim enim sit amet venenatis. Nec dui nunc mattis
            enim ut tellus elementum sagittis vitae. Erat nam at lectus urna
            duis. Eu feugiat pretium nibh ipsum. Commodo odio aenean sed
            adipiscing diam donec adipiscing tristique risus. At erat
            pellentesque adipiscing commodo elit at imperdiet dui accumsan.
            Dictum varius duis at consectetur lorem donec massa. Consequat nisl
            vel pretium lectus quam id. Lectus nulla at volutpat diam ut
            venenatis tellus. 
          </p>
        </div>
      </div>
      <div className={styles.cardContainer}></div>
    </div>
  );
};

export default page;
