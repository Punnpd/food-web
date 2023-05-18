import { FC, useCallback, useEffect, useState } from "react";

import type { Liff } from "@line/liff";

import { FoodCard } from "./FoodCard";

import { FoodDataState } from "@/types/FoodType";
import GetFoodsService from "@/services/food.service/get-foods";

interface FoodsItemProps {
  liff: Liff | null;
  liffError: string | null;
}

export const FoodsItem: FC<FoodsItemProps> = ({ liff, liffError }) => {
  const [foodsState, setFoodsState] = useState<{
    [key: string]: FoodDataState;
  }>({});
  const [selectedFoodId, setSelectedFoodId] = useState<number | null>(null);

  const handleSelectFood = (id: string) => {
    const idInt = parseInt(id);
    if (selectedFoodId === idInt) {
      setSelectedFoodId(null);
      return;
    }
    setSelectedFoodId(idInt);

    console.log(foodsState[id].name);
  };

  const getFoodsCallback = useCallback(async () => {
    const getFoods = new GetFoodsService();
    const foods = await getFoods.request();

    setFoodsState(foods);
  }, []);

  useEffect(() => {
    getFoodsCallback();
  }, []);


  const onClickContinue = (): void => {
    const selectedFood = typeof selectedFoodId == 'number' ? foodsState[selectedFoodId.toString()].name : ""
    
    liff
      ?.sendMessages([
        {
          type: "text",
          text: `The correct menu is\n${selectedFood}.`,
        },
      ])
      .then(() => {
        liff?.closeWindow();
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="w-full text-left mb-4">
        <h1 className="font-semibold text-base">Please choose your menu!</h1>
      </div>
      {Object.keys(foodsState).map((key) => {
        const food = foodsState[key];
        return (
          <FoodCard
            key={key}
            id={key}
            idInt={food.id}
            foodName={food.name}
            calorie={food.calorie}
            fat={food.fat}
            protein={food.protein}
            carb={food.carbohydrate}
            selectedFood={selectedFoodId}
            onSelectedFood={handleSelectFood}
          />
        );
      })}
      <button
        className="bg-dark01 text-white 
                    p-4 mt-9 rounded-xl font-medium text-sm w-full"
        onClick={() => onClickContinue()}
      >
        Submit
      </button>
    </div>
  );
};
