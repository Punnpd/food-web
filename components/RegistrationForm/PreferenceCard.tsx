import { FC } from "react";

import { CheckedPreferencesState } from "@/types/RegistrationType";

interface PreferenceCardProps {
    emoji1: string
    text1: string
    emoji2: string
    text2: string
    preferencesState: CheckedPreferencesState
    onClickUpdatePreferences: (event: any) => void
}

export const PreferenceCard: FC<PreferenceCardProps> = ({ emoji1, text1, emoji2, text2, preferencesState, onClickUpdatePreferences }) => {
    return (
        <div className="flex item-center justify-start gap-3">
            <button 
                id={text1}
                className={`font-normal text-md text-center 
                    ${preferencesState[text1] ? 'bg-red01 -translate-y-1' : 'bg-gray02 -translate-y-0'} 
                    py-4 px-5 rounded-xl transition ease-in delay-0`
                }
                onClick={onClickUpdatePreferences}
            >
                <span className="p-1 pointer-events-none">{emoji1} </span>
                <span className="pointer-events-none">{text1}</span>
            </button>
            <button
                id={text2}
                className={`font-normal text-md text-center 
                    ${preferencesState[text2] ? 'bg-red01 -translate-y-1' : 'bg-gray02 -translate-y-0'} 
                    py-4 px-5 rounded-xl transition ease-in delay-0`
                }
                onClick={onClickUpdatePreferences}
            >
                <span className="p-1 pointer-events-none">{emoji2} </span>
                <span className="pointer-events-none">{text2}</span>
            </button>
        </div>
    )
}