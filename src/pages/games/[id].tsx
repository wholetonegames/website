import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from 'next/image'
import { games as gamesDB } from "../../db/games";
import { GameWTG } from "@/definitions/games";
import { slugify } from "@/utils/slugify";
import { HeadWTG } from "@/components/head";
import { GameTitle } from "@/components/game_title";
import { SteamWidget } from "@/components/steam_widget";
import { FooterWTG } from "@/components/footer";

const Game: NextPage<{ game: GameWTG }> = ({ game }) => {
  return (
    <div>
      <HeadWTG title={game.title} />

      <main className='main'>
        <div className='steam-widget'>
          <Image src="../wholetonelogo.png" alt="Wholetone Games Logo" width={338} height={112} priority />
        </div>

        <div key={game.title} className='steam-widget'>
          <GameTitle gameTitle={game.title} />
          {game.steamId && <SteamWidget steamId={game.steamId} />}
        </div>
      </main>

      <FooterWTG />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.id) {
    return { props: {} };
  }

  const game = gamesDB.find(game => slugify(game.title) === params.id);

  return {
    props: {
      game,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const games = gamesDB;
  const paths = games.map((game: GameWTG) => ({
    params: { id: slugify(game.title) },
  }));

  return { paths, fallback: false };
}

export default Game;
