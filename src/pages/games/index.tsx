import type { GetStaticProps, NextPage } from "next";
import Image from 'next/image'
import { games as gamesDB } from "../../db/games";
import { HeadWTG } from "@/components/head";
import { GameWTG } from "@/definitions/games";
import { GameTitle } from "@/components/game_title";
import { SteamWidget } from "@/components/steam_widget";
import { FooterWTG } from "@/components/footer";

const Games: NextPage<{ games: GameWTG[] }> = ({ games }) => {
  return (
    <div>
      <HeadWTG title='Wholetone Games' />

      <main className='main'>
        <div className='steam-widget'>
          <Image src="../wholetonelogo.png" alt="Wholetone Games Logo" width={338} height={112} priority />
        </div>

        {games.map((game) => (
          <div key={game.title} className='steam-widget'>
            <GameTitle gameTitle={game.title} />
            {game.steamId && <SteamWidget steamId={game.steamId} />}
          </div>
        ))}
      </main>

      <FooterWTG />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const games = gamesDB;

  return {
    props: {
      games,
    },
  };
};

export default Games;
