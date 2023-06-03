export const SteamWidget: React.FC<{ steamId: number }> = ({ steamId }) => {
    return <iframe src={`https://store.steampowered.com/widget/${steamId}/`}></iframe>
}