import { FC, useState, useEffect, useCallback } from "react";
import type { Liff } from "@line/liff";
import { Transition } from "@headlessui/react";

import { LineProfile, CheckedPreferencesState, PreferencesState } from "@/types/RegistrationType";
import { GetStarted } from "./GetStarted";
import { Form } from "./Form";
import { Preferences } from "./Preferences";
import GetPreferencesService from "@/services/preference.service/get-preferences";

interface RegisProps {
  liff: Liff | null;
  liffError: string | null;
  index: number
  onClickUpdateIndex: () => void
  setIndex?: () => void
}

export const RegistrationForm: FC<RegisProps> = ({ 
    liff, 
    liffError,
    index,
    onClickUpdateIndex
}) => {
  const [profile, setProfile] = useState<LineProfile>({
    userId: "",
    displayName: "",
    pictureUrl: "",
    statusMessage: "",
  });

  const [checkedPreferences, setCheckedPreferences] = useState<CheckedPreferencesState>(
    {
      "Cheap": false,
      "Salty": false,
      "Chicken": false,
      "Fried": false,
      "Pork": false,
      "Vegetable": false,
      "Soup": false,
      "Spicy": false,
      "Sweet": false,
      "Steam": false,
    }
  );

  const [userPreferences, setUserPreferences] = useState<PreferencesState>({});

  const getLineProfile = async () => {
    await liff?.ready;
    const profile = (await liff?.getProfile()) as LineProfile;
    setProfile(profile);
  };

  const getPreferencesCallback = useCallback(async () => {
    const getPreferences = new GetPreferencesService()
    const preferences = await getPreferences.request()
    
    const preferencesState: PreferencesState = {}

    preferences.forEach((preference) => {
      preferencesState[preference.name] = preference.id
    })

    setUserPreferences(preferencesState)

    console.log(preferencesState)
  }, [])

  const onClickUpdatePreferences = (event: any) => {
    const { id } = event.target;
    console.log(id)
    setCheckedPreferences((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  useEffect(() => {
    getLineProfile();
    getPreferencesCallback()
    console.log(profile);
  }, [liff]);

  return (
    <div className="h-full">
      {/* {liff && <p>LIFF init succeeded.</p>}
      {liffError && (
        <>
          <p>LIFF init failed.</p>
          <p>
            <code>{liffError}</code>
          </p>
        </>
      )} */}
      {index === 0 && <GetStarted onClickRole={onClickUpdateIndex} />}
      {index === 1 && (
        <div
            className={`transition-all -translate-x-10 ${index===1 && 'translate-x-0 ease-in-out duration-250 z-0'}'}`}
        >
          <Preferences 
            name={profile?.displayName} 
            onClickContinue={onClickUpdateIndex}
            preferencesState={checkedPreferences}
            onClickUpdatePreferences={onClickUpdatePreferences}
          />
        </div>
      )}
      {index === 2 && (
        <div
            className={`transition-all -translate-x-10 ${index===2 && 'translate-x-0 ease-in-out duration-250 z-0'}'}`}
        >
          <Form 
            index={index} 
            profile={profile}
            userCheckedPreferences={checkedPreferences}
            actualPreferences={userPreferences}
          />
        </div>
      )}
    </div>
  );
};
