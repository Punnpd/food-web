import { FC } from "react";
import Image from "next/image";

// import foodImg from "../../assets/foods/0.jpg";
import Tick from "../../assets/icons/tickIcon.svg";
import NoTick from "../../assets/icons/tickIconGray.svg";

import { foodImgMapping } from "@/configs/foodImgMapping";

interface FoodCardProps {
  id: string;
  idInt: number;
  foodName: string;
  calorie: number;
  fat: number;
  protein: number;
  carb: number;
  selectedFood: number | null;
  onSelectedFood: (id: string) => void;
}

export const FoodCard: FC<FoodCardProps> = ({
  id,
  idInt,
  foodName,
  calorie,
  fat,
  protein,
  carb,
  selectedFood,
  onSelectedFood,
}) => {
  return (
    <>
      <div
        id={id}
        className="flex items-center w-full bg-gray01 rounded-3xl p-2 gap-4"
        onClick={() => onSelectedFood(id)}
      >
        <Image
        className="rotate-90 w-14 h-14 rounded-full object-cover my-auto"
        src={foodImgMapping[parseInt(id)]}
        alt="food"
        // width={60}
        // height={20}
        />
        <div className="w-7/12 mx-auto">
          <p className="font-semibold text-sm">{foodName}</p>
          <div className="grid grid-cols-2 gap-x-4 mt-1">
            <p className="font-normal text-xs text-dark02">
              Calorie: {Math.round(calorie)}
            </p>
            <p className="font-normal text-xs text-dark02">Fat: {Math.round(fat)}</p>
            <p className="font-normal text-xs text-dark02">
              Protein: {Math.round(protein)}
            </p>
            <p className="font-normal text-xs text-dark02">Carb: {Math.round(carb)}</p>
          </div>
        </div>
        <div className="m-auto">
          {selectedFood === idInt ? (
            <Image src={Tick} alt="tick" width={20} height={20} />
          ) : (
            <Image src={NoTick} alt="tick" width={20} height={20} />
          )}
        </div>
      </div>
    </>
  );
};
