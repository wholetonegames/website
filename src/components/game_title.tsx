import { slugify } from '@/utils/slugify'
import Link from 'next/link'

export const GameTitle: React.FC<{ gameTitle: string }> = ({ gameTitle }) => {
    return <div className='game-title'>
        <div className="colour-squares">
            <span className="red-square"></span>
            <span className="blue-square"></span>
            <span className="green-square"></span>
            <span className="yellow-square"></span>
        </div>
        <Link href={`/games/${slugify(gameTitle)}`}>{gameTitle}</Link>
    </div>
}