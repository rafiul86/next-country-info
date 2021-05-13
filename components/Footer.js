import styles from '../styles/Home.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <footer>&copy; {new Date().getFullYear()}</footer>
        </div>
    );
};

export default Footer;