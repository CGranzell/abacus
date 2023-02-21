import UpComingEvents from '@/components/upComingEvents/UpComingEvents';
import WelcomeSection from '@/components/welcomeSection/WelcomeSection';
import styles from './page.module.css'



export default function Home() {
  console.log(process.env.API_KEY);
  console.log(`The value of customKey is: ${process.env.customKey}`);
  return (
   <div className={styles.mainContainer}>
    <WelcomeSection />
    <UpComingEvents />
   </div>
  )
}
