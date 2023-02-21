import Image from 'next/image';
import styles from '../../styles/welcomeSection/WelcomeSection.module.css';
import mathPic from '../../public/images/math-pic.jpg';
import WelcomeTextCard from './WelcomeTextCard';


const WelcomeSection = () => {
  return (
    <div className={styles.mainContainer}>
      <Image src={mathPic} alt="" sizes="true" className={styles.mathImg} />
      <WelcomeTextCard />
    </div>
  )
}

export default WelcomeSection