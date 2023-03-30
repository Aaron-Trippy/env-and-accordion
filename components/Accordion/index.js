import { useState } from "react";
import styles from "./Accordion.module.css";

export default function Accordion({ term, code, title, credits, description }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      Term: {term}
      <div className={styles.container} onClick={() => setIsActive(!isActive)}>
        {code} {title} {credits}
        <div className={styles.arrow}>{isActive ? "⇧" : "⇩"}</div>
      </div>
      {isActive && <div>{description}</div>}
    </>
  );
}
