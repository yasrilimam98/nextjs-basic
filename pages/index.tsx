import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      {/* Membanding Image Next dan Img pada umumnya */}
      <Image src="/safira.jpg" alt="NextJS" width={200} height={200} />
      <img src="/safira.jpg" alt="NextJS" width={200} height={200} />
      <h1 className={styles["title-homepage"]}>Yasril</h1>
    </Layout>
  );
}
