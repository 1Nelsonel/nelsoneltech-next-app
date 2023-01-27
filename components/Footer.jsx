import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; 
                <Link className={styles.linkFooter} href='/'>
                    NelsonelTech Solutions
                </Link>  2023</p>
            
        </footer>
    )
}