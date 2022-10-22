import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import styles from "../styles/Home.module.css";

export default function Main({ page }) {
  return (
    <main className={styles.main}>
      <Headline page={page}>
        <code className={styles.code}>pages/{page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
