import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SteamWidget } from '@/components/steam_widget'
import { GameTitle } from '@/components/game_title'
import { FooterWTG } from '@/components/footer'
import { HeadWTG } from '@/components/head'
import { games as gamesDB } from "../db/games";
import { GameWTG } from '@/definitions/games'

const Home: NextPage<{ games: GameWTG[] }> = ({ games }) => {
  return (
    <div>
      <HeadWTG title='Wholetone Games' />

      <main className='main'>
        <div className='steam-widget'>
          <Image src="wholetonelogo.png" alt="Wholetone Games Logo" width={338} height={112} priority />
        </div>

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

      <FooterWTG />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const games = gamesDB;

  return {
    props: {
      games,
    },
  };
};

export default Home
