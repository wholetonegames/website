import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { games } from '@/db/games'
import { SteamWidget } from '@/components/steam_widget'
import { GameTitle } from '@/components/game_title'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wholetone Games</title>
        <meta name="description" content="Wholetone Games official website" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className='main'>
        <div className='steam-widget'>
          <Image src="wholetonelogo.png" alt="Wholetone Games Logo" width={338} height={112} />
        </div>
        {/* <p className={styles.description}>
          Let&apos;s check our <Link href="dogs/">doggos</Link>.
        </p> */}
        {games.map((game) => (
          <div key={game.title} className='steam-widget'>
            <GameTitle gameTitle={game.title} />
            {game.steamId && <SteamWidget steamId={game.steamId} />}
          </div>
        ))}

        <p className='steam-widget'>
          <Link href="https://wholetonegames.blogspot.com">Old Blogger website</Link>
        </p>
      </main>

      <footer>
        Wholetone Games © 2013-2023
      </footer>
    </div>
  )
}

export default Home
