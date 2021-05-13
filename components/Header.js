import Link from 'next/link'
import styles from '../styles/Header.module.css'
const Header = () => {
    return (
        <div className={styles.nav}>
            <Link  href="/"><a className={styles.navbar}>Home</a></Link>
            <Link  href="/countries"><a className={styles.navbar}>Countries</a></Link>
            <Link  href="/countries/Country"><a className={styles.navbar}>Country</a></Link>
        </div>
    );
};

export default Header;