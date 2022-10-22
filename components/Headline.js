import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { Links } from "../components/Links";
import styles from "../styles/Home.module.css";

export function Headline({ page }) {
  return (
    <div>
      <h1 className={styles.title}>{page} Page</h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/{page}.js</code>
      </p>
    </div>
  );
}