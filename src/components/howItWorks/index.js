import React from 'react';
import styles from './styles.module.scss'
import ArrowRight from '../../assets/img/prelaunch-assets/arrow-right.svg';
import ArrowRightLG from '../../assets/img/prelaunch-assets/arrow-right-lg.svg';

const Index = () => {
  return (
    <section className={styles.howitworks}>
    <div className={styles.sectionContainer}>
        <div className={styles.sectionContent}>
            <h3>How it Works?</h3>
            <div className={styles.arrowImg}>
                <img src={ArrowRight} alt="" />
            </div>
            <div className={styles.innerBox}>
                <h4 className={styles.mb20}>Invite a counterpart, then register your loan transaction.</h4>
                <p>Transform your offline lending or borrowing agreements into secure, traceable transactions. Invite your counterpart to our platform, where you can easily register your loan transactions, fostering solvability and building a credit history for a brighter financial future.</p>
                <div className={styles.counter}>
                    <h4>1</h4>
                </div>
            </div>
        </div>
        <div className={`${styles.sectionContent} ${styles.sty2}`}>
            <div className={styles.innerBox}>
                <h4 className={styles.mb20}>Finalize the transaction on the due date.</h4>
                <p>Seamlessly close your registered transactions on the agreed due date. Our platform ensures a reliable and transparent process, enhancing accountability and trust between parties involved in lending or borrowing arrangements.</p>
                <div className={styles.counter}>
                    <h4>2</h4>
                </div>
            </div>
        </div>
        <div className={`${styles.sectionContent} ${styles.sty3}`}>
            <div className={styles.innerBox}>
                <h4 className={styles.mb20}>Both parties review and rate each other.</h4>
                <p>Promote a community of trust and reliability. After each successful transaction, both parties have the opportunity to share their experiences and provide ratings. Build a valuable social credit rating that goes beyond borders, opening doors to new opportunities in the evolving B2C credit market.</p>
                <div className={styles.counter}>
                    <h4>3</h4>
                </div>
            </div>
            <div className={`${styles.arrowImg} ${styles.sty2}`}>
                <img src={ArrowRightLG} alt="" />
            </div>
            <button className='btn' onclick="toastMessage()">Register Now</button>
        </div> 
    </div>
</section>
  );
}

export default Index;
