import * as React from "react";
import Link from "next/link";
import styles from "../../components/Header/Header.module.css";
export default function Header(): JSX.Element {
  return (
    <header>
      <div className={styles.header}>
        <Link href="/" passHref>
          <h1>Countries App</h1>
        </Link>
      </div>
    </header>
  );
}
