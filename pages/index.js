import Head from "next/head";
import Image from "next/image";
import Layout from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Image src={`/../public/birdHouse.png`} width={700} height={400} />
      <h1>What about Next</h1>
    </div>
  );
}
