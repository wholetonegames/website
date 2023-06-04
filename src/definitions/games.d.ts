export type WTGAppType = 'game' | 'app' | 'dlc'

export interface GameWTG {
    type: WTGAppType
    title: string
    steamId?: number
}