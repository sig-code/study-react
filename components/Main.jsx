import { Headline } from "./Headline";
import { Links } from "./Links";
import classes from "./Main.module.css";

export default function Main({ page }) {
  return (
    <main className={classes.main}>
      <Headline page={page}>
        <code className={classes.code}>pages/{page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
