import Link from "next/link"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <Link href="/About/">About</Link>
      <Link href="/Services/"> Services</Link>
      <Link href="/Contact/"> Contact</Link>
      <h1>Home</h1>
    </Layout>
  )
}
