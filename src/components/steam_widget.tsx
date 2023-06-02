export const SteamWidget = ({ steamId }: { steamId: number }) => {
    return <iframe src={`https://store.steampowered.com/widget/${steamId}/`}></iframe>
}