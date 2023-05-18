import { FC } from "react";
import Image from "next/image";
import NextIcon from "../../assets/icons/nextIcon2.svg";

interface RoleCardProps {
  icon: any;
  title: string;
  description: string;
  onClick: () => void;
}

export const RoleCard: FC<RoleCardProps> = ({
  icon,
  title,
  description,
  onClick,
}) => {
  return (
    <div
      className="flex justify-center items-center bg-gray01 text-left 
        md:w-96 p-4 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full">
        <Image src={icon} alt="Boy Icon" width={70} height={70} />
        <h3 className="font-bold text-dark01 ml-3">{title}</h3>
        <h3 className="font-thin text-xs text-dark02 ml-3 mt-2">
          {description}
        </h3>
      </div>
      <Image src={NextIcon} alt="next" width={10} height={10} />
    </div>
  );
};
