import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={`py-5 ${styles.footer}`}>
            <small>Drinks App</small>
        </footer>
    );
};

export default Footer;
