export type WTGAppType = 'game' | 'app' | 'dlc'

export interface WTGame {
    type: WTGAppType
    title: string
    steamId?: number
}