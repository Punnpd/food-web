import { FC, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Router from "next/router";

import type { Liff } from "@line/liff";

import MockImage from "../../assets/foods/0.jpg";
import ProteinImg from "../../assets/common/protein.png";
import FatImg from "../../assets/common/trans-fat.png";
import CarbImg from "../../assets/common/carbohydrates.png";
import CalImg from "../../assets/common/calories.png";
import EditImg from "../../assets/common/edit-text.png";

import { Status } from "./Status";
import { FoodCountCard } from "./FoodCountCard";
import GetUserService from "@/services/register.service/get-user";
import GetNutritionService from "@/services/food.service/get-nutrition";
import GetTopFoodService from "@/services/food.service/get-top-food";

import { LineProfile } from "@/types/RegistrationType";
import { Loading } from "../Elements/Loading";

interface UserProfileProps {
  liff: Liff | null;
  liffError: string | null;
}

interface UserState {
  id: number;
  line_id: string;
  name: string;
  status: string;
  birth_date: Date;
  gender: string;
  weight: number;
  height: number;
  picture_url: string;
  create_at: Date;
}

interface NutritionState {
  total_protein: number;
  total_carbohydrate: number;
  total_fat: number;
  total_calorie: number;
}

interface TopFoodState {
  menu_name: string;
  menu_calorie: number;
  order_count: number;
}

export const UserProfile: FC<UserProfileProps> = ({ liff, liffError }) => {
  const [profile, setProfile] = useState<LineProfile>({
    userId: "",
    displayName: "",
    pictureUrl: "",
    statusMessage: "",
  });
  console.log(profile);
  const [user, setUser] = useState<UserState>();

  const [nutrition, setNutrition] = useState<NutritionState>();

  const [topFood, setTopFood] = useState<TopFoodState[]>([]);

  const [userLoaded, setUserLoaded] = useState<boolean>(false);

  const getLineProfile = async () => {
    await liff?.ready;
    const profile = (await liff?.getProfile()) as LineProfile;
    setProfile(profile);
  };

  const getUserCallback = async () => {
    const getUser = new GetUserService();

    if (profile?.userId === undefined) return;

    const userRes = await getUser.request(profile?.userId);

    // // Test
    // if (!userRes) {
    //     Router.push("/register");
    //     return;
    // }

    setUser(userRes);

    console.log(userRes);
    
  };

  const getNutrition = async () => {
    const getNutrition = new GetNutritionService();

    if (profile?.userId === undefined) return;

    const nutritionRes = await getNutrition.request(profile?.userId);

    setNutrition(nutritionRes);

    // console.log(nutritionRes);
  };

  const getTopFood = async () => {
    const getTopFood = new GetTopFoodService();

    if (profile?.userId === undefined) return;

    const topFoodRes = await getTopFood.request(profile?.userId);

    setTopFood(topFoodRes);

    console.log(topFoodRes);
  };

  // const chainRequest = async () => {
  //     const lineProfile = await Promise.all([getLineProfile()])

  //     const userProfile = await getUserCallback()
  // }

  useEffect(() => {
    getLineProfile();
    console.log(profile);
  }, [liff]);

  useEffect(() => {
    if (profile?.userId === undefined || profile?.userId === '') return;

    getUserCallback();

    // const fetchData = async () => {
    //     await getUserCallback();
    //     setUserLoaded(true);
    // };

    // fetchData()

    // // Test
    // if (!user && userLoaded) {
    //     Router.push("/register");
    //     return;
    // }
    
    getNutrition();
    getTopFood();
  }, [profile]);

  return (
    <div className="flex flex-col justify-center items-center w-full gap-10">
      {user === undefined ? (
        <Loading />
      ) : (
        <>
          <div className="flex justify-center items-center gap-10 w-full">
            {profile?.pictureUrl ? (
                <span>
                <Image
                  className="w-28 h-28 rounded-full"
                  src={profile?.pictureUrl}
                  alt="profile"
                  width={112}
                  height={112}
                />
              </span>
            ) : (
                <div className="w-28 h-28 rounded-full bg-green01">
                    {user.name[0]}
                </div>
            )

            }
            <div className="flex flex-col">
              <p className="font-semibold text-2xl">{user?.name}</p>
              <p className="font-normal text-sm text-dark02">{user?.status}</p>
            </div>
            <Image className="w-5 h-5 ml-2" src={EditImg} alt="edit" />
          </div>

          <div className="w-full">
            <p className="font-light text-sm text-dark02 mb-3">Attributes</p>
            <div className="flex justify-start items-center gap-2">
              <div className="px-5 py-3 text-xs text-white bg-dark01 rounded-full shadow-lg">
                {user?.gender}
              </div>
              <div className="px-5 py-3 text-xs text-white bg-green01 rounded-full shadow-lg">
                Weight: {user?.weight}
              </div>
              <div className="px-5 py-3 text-xs text-white bg-green01 rounded-full shadow-lg">
                Height: {user?.height}
              </div>
            </div>
          </div>

          <div className="w-full">
            <p className="font-light text-sm text-dark02 mb-3">
              Daily Nutrient
            </p>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex items-center justify-between w-full bg-gray01 rounded-3xl px-3 py-2 gap-6">
                <div className="flex items-center gap-6">
                  <Image
                    className="w-11 h-11 rounded-full my-auto"
                    src={ProteinImg}
                    alt="Protein"
                  />
                  <div>
                    <p className="font-medium text-dark01">Protein</p>
                    <p className="font-medium text-xs text-dark02">
                      Total: {nutrition?.total_protein}
                    </p>
                  </div>
                </div>
                <Status status="Low" />
              </div>

              <div className="flex items-center justify-between w-full bg-gray01 rounded-3xl px-3 py-2 gap-6">
                <div className="flex items-center gap-6">
                  <Image
                    className="w-11 h-11 rounded-full my-auto"
                    src={FatImg}
                    alt="Fat"
                  />
                  <div>
                    <p className="font-medium text-dark01">Fat</p>
                    <p className="font-medium text-xs text-dark02">
                      Total: {nutrition?.total_fat}
                    </p>
                  </div>
                </div>
                <Status status="Low" />
              </div>

              <div className="flex items-center justify-between w-full bg-gray01 rounded-3xl px-3 py-2 gap-6">
                <div className="flex items-center gap-6">
                  <Image
                    className="w-11 h-11 rounded-full my-auto"
                    src={CarbImg}
                    alt="Carbohydrate"
                  />
                  <div>
                    <p className="font-medium text-dark01">Carbohydrate</p>
                    <p className="font-medium text-xs text-dark02">
                      Total: {nutrition?.total_carbohydrate}
                    </p>
                  </div>
                </div>
                <Status status="Low" />
              </div>

              <div className="flex items-center justify-between w-full bg-gray01 rounded-3xl px-3 py-2 gap-6">
                <div className="flex items-center gap-6">
                  <Image
                    className="w-11 h-11 rounded-full my-auto"
                    src={CalImg}
                    alt="Calories"
                  />
                  <div>
                    <p className="font-medium text-dark01">Calories</p>
                    <p className="font-medium text-xs text-dark02">
                      Total: {nutrition?.total_calorie}
                    </p>
                  </div>
                </div>
                <Status status="Low" />
              </div>
            </div>
          </div>

          <div className="w-full">
            <p className="font-light text-sm text-dark02 mb-3">
              Most frequent order
            </p>
            <div className="flex flex-col justify-center items-center gap-4">
              {topFood?.map((food, index) => {
                return (
                  <FoodCountCard
                    key={index}
                    rank={index + 1}
                    name={food.menu_name}
                    calories={food.menu_calorie}
                    count={food.order_count}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
