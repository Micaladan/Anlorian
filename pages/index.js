import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anlorian</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Niconne&display=swap'
          rel='stylesheet'
        ></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Anlorian</h1>

        <p className={styles.description}>
          "Not Baby's first TTRPG, a fun and diverse dice slinging fantasy where
          each player's experience is a game within itself"
        </p>

        <div className={styles.grid}>
          <a href='/blog' className={styles.card}>
            <h3>Blog &#10940;</h3>
            <p>See recent developments of the game.</p>
          </a>

          <a href='/about' className={styles.card}>
            <h3>About Us &#10940;</h3>
            <p>Learn what Anlorian is all about.</p>
          </a>

          <a href='/contact' className={styles.card}>
            <h3> Contact &#10940;</h3>
            <p>Want to talk? here's our how you can reach us.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; Anlorian {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
