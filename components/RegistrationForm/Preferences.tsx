import { FC } from "react";
import { PreferenceCard } from "./PreferenceCard";

import { CheckedPreferencesState } from "@/types/RegistrationType";

interface PreferencesProps {
    name: string
    onClickContinue: () => void
    preferencesState: CheckedPreferencesState
    onClickUpdatePreferences: (event: any) => void
}

const preferences = [
    {
        text1: "Cheap",
        emoji1: "🤗",
        text2: "Salty",
        emoji2: "🧂"
    },
    {
        text1: "Chicken",
        emoji1: "🍗",
        text2: "Fried",
        emoji2: "🍟"
    },
    {
        text1: "Pork",
        emoji1: "🐷",
        text2: "Vegetable",
        emoji2: "🥬"
    },
    {
        text1: "Soup",
        emoji1: "🍜",
        text2: "Spicy",
        emoji2: "🌶️"
    },
    {
        text1: "Sweet",
        emoji1: "🍭",
        text2: "Steam",
        emoji2: "🥟"
    }
]

export const Preferences: FC<PreferencesProps> = ({ name, onClickContinue, preferencesState, onClickUpdatePreferences }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 w-full">
            <div>
                <h2 className="font-medium text-base">Hello {name} 👋</h2>
                <h1 className="font-normal text-3xl mt-3">What's your food preferences?</h1>
            </div>
            <div className="flex flex-col gap-5 w-full sm:w-96">
                {preferences.map((preference, index) => (
                    <PreferenceCard 
                        key={index}
                        emoji1={preference.emoji1} 
                        text1={preference.text1}
                        emoji2={preference.emoji2}
                        text2={preference.text2}
                        preferencesState={preferencesState}
                        onClickUpdatePreferences={onClickUpdatePreferences}
                    />
                ))}
            </div>
            <button
                className="bg-dark01 text-white 
                    p-4 mt-9 rounded-xl font-medium text-sm w-full sm:w-96"
                onClick={onClickContinue}
            >Continue</button>
        </div>
    );
}