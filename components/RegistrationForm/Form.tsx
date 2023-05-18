import {
  CheckedPreferencesState,
  LineProfile,
  PreferencesState,
  FormInput,
} from "@/types/RegistrationType";
import { FC, Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import Router from "next/router";
import {
  useForm,
  Controller,
  SubmitHandler,
  useController,
} from "react-hook-form";
import moment from "moment";

import { Loading } from "@/components/Elements/Loading";

import Tick from "../../assets/icons/tickIcon.svg";
import DownIcon from "../../assets/icons/downIcon2.svg";

import PostUserService from "@/services/register.service/post-user";

interface FormProps {
  index: number;
  profile: LineProfile;
  userCheckedPreferences: CheckedPreferencesState;
  actualPreferences: PreferencesState;
}

const genderOptions = [
  { gender: "Male" },
  { gender: "Female" },
  { gender: "Other" },
  { gender: "Prefer not to say" },
];

const datePattern: RegExp =
  /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/](19|20)\d\d$/;
// const datePattern: RegExp = /^.*\/.*\/.*$/;

const dateFormats: string[] = ["DD/MM/YYYY", "D/M/YYYY"];

export const Form: FC<FormProps> = ({
  index,
  profile,
  userCheckedPreferences,
  actualPreferences,
}) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormInput>();

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    setLoading(true)
    const filterUserCheckedId = Object.keys(userCheckedPreferences)
      .filter((key) => userCheckedPreferences[key] === true)
      .map((key) => actualPreferences[key]);

    const postUser = new PostUserService();
    const userReturned = await postUser.request({
      gender: data.gender,
      weight: Number(data.weight),
      height: Number(data.height),
      birth_date: moment(data.birthDate, dateFormats).toDate(),
      line_id: profile.userId,
      picture_url: profile.pictureUrl,
      name: profile.displayName,
      status: profile.statusMessage ? profile.statusMessage : "",
      state: "registered",
      feature_ids: filterUserCheckedId,
    });

    if (!userReturned) {

    }

    Router.push({
      pathname: "/success",
      query: {
        name: profile.displayName,
      }
    })
  };

  const {
    field: { value, onChange },
  } = useController({
    name: "gender",
    control: control,
    defaultValue: "Gender",
    rules: { required: true, maxLength: 20 },
  });

  return (
    <>
      {loading ? (
          <Loading />
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 w-full ">
          {profile?.pictureUrl && (
            <Image
              className="rounded-full"
              src={profile.pictureUrl}
              alt={profile.displayName}
              width={130}
              height={130}
            />
          )}
          <div className="text-center">
            <h2 className="font-bold text-2xl">{profile?.displayName}</h2>
            <h2 className="font-light text-sm mt-2">
              {profile?.statusMessage}
            </h2>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-7 w-full sm:w-96"
          >
            <Listbox value={value} onChange={onChange}>
              <div className="relative mt-1 z-10">
                <span className="font-semibold text-sm">Gender</span>
                <Listbox.Button className="relative w-full cursor-default mt-2 text-left rounded-md border-2 border-dark01 p-3 text-sm">
                  <span className="text-dark01 block truncate">{value}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <Image
                      src={DownIcon}
                      alt="Down Icon"
                      width={20}
                      height={20}
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline-none">
                    {genderOptions.map((option, optionIdx) => (
                      <Listbox.Option
                        key={option.gender}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-white text-gray-900" : "text-gray-800"
                          }`
                        }
                        value={option.gender}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {option.gender}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                                ss
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>

            <div className="flex flex-col gap-2 relative">
              <div className="flex justify-between items-center">
                <label className="font-semibold text-sm">Birth Date</label>
                {errors.birthDate?.type === "pattern" && (
                  <span className="font-light text-xs text-gray-600">
                    Wrong date format.
                  </span>
                )}
                {errors.birthDate?.type === "required" && (
                  <span className="font-light text-xs text-gray-600">
                    This field is required.
                  </span>
                )}
              </div>
              <input
                className="bg-gray01 rounded-md p-3 text-sm outline-none"
                type="string"
                id="birthDate"
                placeholder="DD/MM/YYYY"
                {...register("birthDate", {
                  required: true,
                  pattern: datePattern,
                })}
              />
              {datePattern.test(watch("birthDate")) && (
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pt-7 pr-3">
                  <Image
                    className=""
                    src={Tick}
                    alt="Tick"
                    width={20}
                    height={20}
                  />
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 relative">
              <div className="flex justify-between items-center">
                <label className="font-semibold text-sm">Weight</label>
                {errors.weight?.type === "max" && (
                  <span className="font-light text-xs text-gray-600">
                    Weight is out of range.
                  </span>
                )}
                {errors.weight?.type === "required" && (
                  <span className="font-light text-xs text-gray-600">
                    This field is required.
                  </span>
                )}
              </div>
              <input
                className="bg-gray01 rounded-md p-3 text-sm outline-none"
                type="number"
                id="weight"
                placeholder="Weight in kg."
                {...register("weight", {
                  min: 30,
                  max: 120,
                  required: true,
                  valueAsNumber: true,
                })}
              />
              {watch("weight") >= 30 && watch("weight") <= 120 && (
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pt-7 pr-3">
                  <Image
                    className=""
                    src={Tick}
                    alt="Tick"
                    width={20}
                    height={20}
                  />
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 relative">
              <div className="flex justify-between items-center">
                <label className="font-semibold text-sm">Height</label>
                {errors.height?.type === "max" && (
                  <span className="font-light text-xs text-gray-600">
                    Height is out of range.
                  </span>
                )}
                {errors.height?.type === "required" && (
                  <span className="font-light text-xs text-gray-600">
                    This field is required.
                  </span>
                )}
              </div>
              <input
                className="bg-gray01 rounded-md p-3 text-sm outline-none"
                type="number"
                id="height"
                placeholder="Height in cm."
                {...register("height", {
                  min: 100,
                  max: 250,
                  required: true,
                  valueAsNumber: true,
                })}
              />
              {watch("height") >= 100 && watch("height") <= 250 && (
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pt-7 pr-3">
                  <Image
                    className=""
                    src={Tick}
                    alt="Tick"
                    width={20}
                    height={20}
                  />
                </span>
              )}
            </div>

            <input
              className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white 
            p-4 rounded-xl font-semibold text-base mt-7"
              type="submit"
            />
          </form>
        </div>
      )}
    </>
  );
};

// className={`transition-all -translate-x-10 ${index===1 && '-translate-x-0 ease-in-out duration-250 z-0'}'}`
