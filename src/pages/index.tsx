import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { games } from '@/db/games'
import { SteamWidget } from '@/components/steam_widget'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wholetone Games</title>
        <meta name="description" content="Wholetone Games official website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/wholetonelogo.png" alt="Wholetone Games Logo" width={338} height={112} />
        {/* <p className={styles.description}>
          Let&apos;s check our <Link href="dogs/">doggos</Link>.
        </p> */}
        {games.map((game) => (
          <div key={game.title} className='steam-widget'>
            {/* <Link href={`/dogs/${dog.id}`}>{dog.name}</Link> */}
            {game.steamId && <SteamWidget steamId={game.steamId} />}
          </div>
        ))}

        <p className={styles.description}>
          <Link href="https://wholetonegames.blogspot.com">Old Blogger website</Link>
        </p>
      </main>

      <footer className={styles.footer}>
        Wholetone Games © 2013-2023
      </footer>
    </div>
  )
}

export default Home
