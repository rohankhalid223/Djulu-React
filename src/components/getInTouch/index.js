import React from 'react';
import styles from './styles.module.scss'
import BgImage from '../../assets/img/prelaunch-assets/bg-image.jpg'
import BgImageMOB from '../../assets/img/prelaunch-assets/bg-image-mob.png'
import Location from '../../assets/img/prelaunch-assets/location.png'
import Mail from '../../assets/img/prelaunch-assets/mail.png'
const Index = () => {
    return (
        <section className={styles.contactSection}>
            <div className={styles.imgWrapper}>
                <img src={BgImage} className={styles.desktopOnly} alt="" />
                <img src={BgImageMOB} className={styles.mobOnly} alt="" />
            </div>
            <h2 className={`${styles.heading} txt-white`}>Get In Touch With Us</h2>

            <div className={styles.contentWrapper}>
                <div className={styles.infoWrap}>
                    <p className={`${styles.pb20} txt-white`}>An expert at your services</p>
                    <div className={styles.locationWrap}>
                        <div className={styles.innerWrap}>
                            <div className={styles.imgWrap}><img src={Location} alt="" /></div>
                            <p className="txt-white medium">Montreal, Quebec, Canada</p>
                        </div>
                        <div className={styles.innerWrap}>
                            <div className={styles.imgWrap}><img src={Mail} alt="" /></div>
                            <a href="mailto:support@djulusara.com" className="txt-white medium">support@djulusara.com</a>
                        </div>

                    </div>
                </div>
                <div className={styles.formWrap}>
                    <div className={styles.fullInput}>
                        <label className="txt-white" for='name'>Full Name</label>
                        <input type='text' onclick="toastMessage()" placeholder="e.g Angel Smith" name='name'></input>
                    </div>
                    <div className={styles.fullInput}>
                        <label className="txt-white" for='email'>Email Address</label>
                        <input type='text' onclick="toastMessage()" placeholder="e.g angelsmith@gmail.com" name='email'></input>
                    </div>
                    <div className={styles.fullInput}>
                        <label className="txt-white" for='number'>Phone Number</label>
                        <input type='text' onclick="toastMessage()" placeholder="e.g +02 567543" name='number'></input>
                    </div>
                    <div className={styles.fullInput}>
                        <label className="txt-white" for='message'>Message</label>
                        <textarea name="message" onclick="toastMessage()" placeholder="How can we help you?" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className={styles.ctaWrap}>
                        <button className={`${styles.btn} btn btn-yellow txt-grey`} onclick="toastMessage()" >Send Message</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Index;
