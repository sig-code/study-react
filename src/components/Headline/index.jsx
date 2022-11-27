import classes from "src/components/Headline/Headline.module.css";

export function Headline({ page, children }) {
  return (
    <div>
      <h1 className={classes.title}>{page} Page</h1>
      <p className={classes.description}>Get started by editing {children}</p>
    </div>
  );
}
