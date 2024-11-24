import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href='/posts'>posts</Link>
      </header>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>d-rowe</h1>
          <p>field notes on making</p>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>made with ❤️ by daniel rowe</p>
      </footer>
    </div>
  );
}
