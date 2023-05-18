import { FC } from "react";

interface FoodCountCardProps {
    rank: number
    name: string
    calories: number
    count: number
}

export const FoodCountCard: FC<FoodCountCardProps> = ({ 
    rank,
    name,
    calories,
    count
 }) => {
  return (
    <div className="flex items-center justify-between w-full bg-gray01 rounded-3xl px-3 py-2 gap-6">
      <div className="flex items-center gap-6">
        <div
          className="text-center w-11 h-11 rounded-full bg-green-500
          flex items-center justify-center"
        >
            <p className="font-medium text-white">{rank}</p>
        </div>
        <div>
          <p className="font-medium text-dark01">{name}</p>
          <p className="font-medium text-xs text-dark02">Calories: {calories}</p>
        </div>
      </div>
      <div>x{count}</div>
    </div>
  );
};
