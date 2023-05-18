export interface LineProfile {
    userId: string | ""
    displayName: string | ""
    pictureUrl: string | null
    statusMessage: string | null
}

export type FormInput = {
    gender: string
    birthDate: string
    weight: number
    height: number
}

export interface CheckedPreferencesState {
    [key: string]: boolean
}

export interface PreferencesState {
    [key: string]: number
}