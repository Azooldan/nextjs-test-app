import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  const {locale} = useRouter();
  console.log(useRouter())

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/other-page" locale={locale}>
          <h1 className={styles.title}>
              MOVE TO ANOTHER PAGE
          </h1>
        </Link>
          <h1 className={styles.title}>
              CURRENT LANG {locale}
          </h1>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  console.log('getServerSideProps index')
  return {
    props: {}, 
  }
}