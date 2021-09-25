import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo ao  <a href="https://instagram.com/projetoceos">Projeto Céos!</a>
        </h1>

        <p className={styles.description}>
          Projetin do João e da Ketlyn {' '}
          <code className={styles.code}>dev</code>
        </p>

        <div className={styles.grid}>
          <a href="https://garrulous-hero-1f4.notion.site/Projeto-C-os-Dev-Aprendiz-265d9164a0704b85a365b8826ac56116" className={styles.card}>
            <h2>Documentação &rarr;</h2>
            <p>Base de conhecimento do projeto</p>
          </a>

          <a href="/review" className={styles.card}>
            <h2>Avaliações &rarr;</h2>
            <p>Um CRUD de avaliações!</p>
          </a>

          <a
            href="/blog"
            className={styles.card}
          >
            <h2>Blog &rarr;</h2>
            <p>Um exemplo de blog.</p>
          </a>

          <a
            href="/sobre"
            className={styles.card}
          >
            <h2>Sobre &rarr;</h2>
            <p>
              Um exemplo de página sobre.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
