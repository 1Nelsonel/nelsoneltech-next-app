import Layout from "@/components/Layout";
import Link from "next/link";

const About = () => {
  return (
    <Layout title="About Nelsoneltech Solution | Software Company">
      <Link href="/">Home</Link>
      <Link href="/Services/"> Services</Link>
      <Link href="/Contact/"> Contact</Link>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        voluptates sed dolorem voluptatem. Saepe, quis illum officia eveniet
        minus eius in culpa voluptatibus adipisci nam commodi similique, quasi
        aliquam debitis!
      </p>
    </Layout>
  );
};

export default About;
