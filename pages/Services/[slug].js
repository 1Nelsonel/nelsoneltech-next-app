import Layout from "@/components/Layout";
import Link from "next/link";
import styles from '../../styles/Services.module.css'

const ServiceDetail = () => {
    return (
        <Layout title="Services Nelsoneltech Solution | Software Company">
            <Link href="/">Home </Link>
            <Link href="/About/">About</Link>
            <Link href="/Contact/"> Contact</Link>
            <div className={styles.container}>
                <h1>Service Detail Page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
        </Layout>
    );
};

export default ServiceDetail;
