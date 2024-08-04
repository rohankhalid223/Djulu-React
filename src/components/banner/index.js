import React from 'react';
import styles from './styles.module.scss'
import Banner from '../../assets/img/prelaunch-assets/prelaunch-banner.jpg';
import GooglePlay from '../../assets/img/prelaunch-assets/googleplay.svg';
import AppStore from '../../assets/img/prelaunch-assets/appstore.svg';
import Facebook from '../../assets/img/prelaunch-assets/facebook.svg'
import Instagram from '../../assets/img/prelaunch-assets/instagram.svg'
import Twitter from '../../assets/img/prelaunch-assets/twitter.svg'
import Whatsapp from '../../assets/img/prelaunch-assets/whatsapp.svg'
const Index = () => {
    return (
        <section className={styles.prelaunchBanner}>
            <div className={styles.bannerImage}>
                <img src={Banner} alt="banner" />
            </div>
            <div className={styles.bannerContent}>
                <h5>Welcome to Djulu Sara</h5>
                <h1>The World's 1st Credit Rating Platform</h1>
                <div className={styles.inputWrapper}>
                    <form>
                        <input onclick="toastMessage()" type="text" id="myInput" placeholder="Enter email address to stay updated!" required />
                        <button className="btn "
                            onclick="toastMessage()" type="button">Register here</button>
                    </form>
                </div>
                <div className={styles.orWrapper}>
                    <p>OR</p>
                </div>
                <div className={styles.storeWrapper}>
                    <div className={styles.imgBox}>
                        <a onclick="toastMessage()"><img src={GooglePlay} alt="" /></a>
                    </div>
                    <div className={styles.imgBox}>
                        <a onclick="toastMessage()"><img src={AppStore} alt="" /></a>
                    </div>
                </div>
                <div className={styles.socialWrapper}>
                    <div className={styles.iconWrap}>
                        <a href="https://www.facebook.com/profile.php?id=61553675682049" target="_blank"><img src={Facebook} alt="" /></a>
                    </div>
                    <div className={styles.iconWrap}>
                        <a href="https://www.instagram.com/djulusara/" target="_blank"><img src={Instagram} alt="" /></a>
                    </div>
                    <div className={styles.iconWrap}>
                        <a href="https://twitter.com/DjuluSara" target="_blank"><img src={Twitter} alt="" /></a>
                    </div>
                    <div className={styles.iconWrap}>
                        <a onclick="toastMessage()"><img src={Whatsapp} alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Index;
