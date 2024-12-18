import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/logo-editor.png"
          alt="Playec Net"
          width={193}
          height={53}
          priority
        />
        <h4>Netplayec Gplayec</h4>
        <ul>
          <li>Tienda de videojuegos en Ecuador.</li>
          <li>Adquiere videojuegos y dispositivos tecnológicos.</li>
        </ul>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://api.whatsapp.com/send?phone=%2B593958940184"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar
          </a>
          <a
            href="https://maps.app.goo.gl/habG4L6vvAzj4zKe9"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Ubicación
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://playec.netlify.app/learn?utm_source=privacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Privacidad
        </a>
        <a
          href="https://playec.netlify.app/&utm_campaign=about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Nosotros
        </a>
        <a
          href="https://playec.netlify.app/?utm_campaign=networking"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Redes sociales →
        </a>
      </footer>
    </div>
  );
}
