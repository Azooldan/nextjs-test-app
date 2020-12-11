import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  const {locale} = useRouter();
  console.log(useRouter())
  return (
    <div>
        <Link href="/" locale={locale}>
          <h1 className={styles.title}>
              MOVE TO INDEX
          </h1>
        </Link>
          <h1 className={styles.title}>
              CURRENT LANG {locale}
          </h1>
      </div>
  )
}

export async function getServerSideProps() {
  console.log('getServerSideProps other-page')
  return {
    props: {}, 
  }
}
