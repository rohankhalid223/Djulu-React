import React from 'react';
import styles from './styles.module.scss'
import WhatIsImage from '../../assets/img/prelaunch-assets/what-is-image.jpg';
import LogoIcon from '../../assets/img/prelaunch-assets/ds-logo.svg';

const Index = () => {
  return (
    <section className={`${styles.whatisSection} sec-padded-prelaunch pdBottom` }>
    <div className={styles.mobImage}>
        <img src={WhatIsImage} alt="" />
    </div>
    <div className={styles.containerWrapper}>
        <div className={styles.innerSection}>
            <div className={styles.videoSection}>
                <img src={WhatIsImage} alt="" />
            </div>
            <div className={styles.innerContent}>
                <div className={styles.innerBox}>
                    <img src={LogoIcon} alt="" />
                    <h4>Welcome to Djulu Sara</h4>
                    <h2>Where innovation meets
                        financial empowerment</h2>
                    <p><strong>Our mission</strong> is to redefine how individuals engage in lending and borrowing, transcending traditional boundaries to create a global community built on trust and transparency.</p>
                    <p><strong>Our Vision:</strong> At Djulu Sara, we envision a future where financial interactions are seamless, traceable, and foster positive growth. We strive to bridge the gap in regions where credit systems are evolving, providing individuals with the tools to build a robust credit history and unlock new opportunities.
                    </p>
                </div>
            </div>
            <div className={styles.containerInner}>
                <div className={styles.bottomSection}>
                    <p>
                        <strong>Pioneering Social Credit Ratings:</strong> Imagine a social credit rating system tailored for first-world countries, akin to the familiar Equifax model. Djulu Sara is at the forefront of this innovation, where your metrics on our platform become the cornerstone for both Consumer-to-Consumer (C2C) and Business-to-Consumer (B2C) credit market growth.
                    </p>
                </div>
                <div className={`${styles.bottomSection} ${styles.sty2}`}>
                    <p>
                        <strong>What Sets Us Apart:</strong> Our ethos revolves around transparency and knowledge. We believe in empowering individuals to make informed financial decisions. Djulu Sara is not just a platform; it's a community where every transaction builds trust, reliability, and a shared vision for a financially inclusive future.
                    </p>
                </div>
                <div className={`${styles.bottomSection} ${styles.sty3}`}>
                    <p>
                        <strong>Join the Revolution:</strong> We invite you to join Djulu Sara and be part of a financial revolution. Whether you're a seasoned participant or new to the lending and borrowing landscape, our platform offers a space where your financial story is not just told but also shapes the future of both Consumer-to-Consumer (C2C) and Business-to-Consumer (B2C) credit markets.

                    </p>
                </div>
            </div>
            <div className={styles.disclaimer}>
                <p>Experience a new era of financial engagement with Djulu Sara. Empower your transactions, shape your credit history, and unlock a world of possibilities.
                </p>
            </div>
        </div>
    </div>

</section>
  );
}

export default Index;
