import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <>Nelsonel<span className={styles.tech}>Tech</span></>
                </Link>
            </div>

            <nav>
                <ul>
                <li>
                    <Link href="/">
                            <>Home</>
                        </Link>
                    </li>

                    <li>
                        <Link href="/About/">
                            <>About</>
                        </Link>
                    </li>

                    <li>
                        <Link href="/Services/">
                            <>Services</>
                        </Link>
                    </li>

                    <li>
                        <Link href="/Blog/">
                            <>Blog</>
                        </Link>
                    </li>
                    
                    <li>
                        <Link href="/Contact/">
                            <>Contact</>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}