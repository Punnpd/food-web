import { FC } from "react";
import Image from "next/image";

import peopleEatFoodImg from "../../assets/peopleEatFood.jpg";

export const Loading: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center m-auto">
      <Image src={peopleEatFoodImg} alt="foodillu" />
      <p className="font-bold text-xl text-dark01">Enjoy your day!</p>
      <div className="flex items-center justify-center space-x-2 mt-5">
        <div className="w-4 h-4 rounded-full animate-pulse bg-gray-300"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-gray-300"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-gray-300"></div>
      </div>
    </div>
  );
};
