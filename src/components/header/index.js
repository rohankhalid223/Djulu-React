import React , { useState , useEffect} from 'react';
import styles from './styles.module.scss'
import Logo from '../../assets/img/prelaunch-assets/logo.svg'
import Facebook from '../../assets/img/prelaunch-assets/facebook.svg'
import Instagram from '../../assets/img/prelaunch-assets/instagram.svg'
import Twitter from '../../assets/img/prelaunch-assets/twitter.svg'
import Whatsapp from '../../assets/img/prelaunch-assets/whatsapp.svg'
import Selector from '../../assets/img/prelaunch-assets/lang-selector.svg'
const Index = () => {
    const [open, setOpen] = useState(false);

    const LangSelector = () => {
      setOpen(!open);
    }

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={styles.prelaunchHeader} id="myHeader">
            <div className={`${styles.headerWrapper} ${scrolled ? styles.scrolled : ''}`}>
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
                <div className={styles.logo}>
                    <a href="#"> <img src={Logo} alt="" /></a>
                </div>
                <div className={styles.customDropdown} id="customDropdown">
                    <button onClick={LangSelector}>
                        <img src={Selector} alt="" />
                            <span id="selectedOption">Eng</span>
                    </button>
                    <div className={`${styles.customDropdownContent} ${open ? styles.active : ''}`}>
                        <a href="#" onclick="selectOption('English')" class="selected">English</a>
                        <a href="#" onclick="selectOption('French')">French</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Index;
