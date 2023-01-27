import Layout from "@/components/Layout";
import Link from "next/link";
import styles from '../../styles/Services.module.css'

const Services = () => {
  return (
    <Layout title="Services Nelsoneltech Solution | Software Company">
      <Link href="/">Home </Link>
      <Link href="/About/">About</Link>
      <Link href="/Contact/"> Contact</Link>
      <h1>Service Page</h1>
      <div className={styles.container}>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
          <li>Service 4</li>
          <li>Service 5</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Services;
