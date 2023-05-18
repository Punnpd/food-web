import { FC } from "react";
import Image from "next/image";

import BackArrow from "../../assets/icons/backArrow.svg";
import Logo from "../../assets/common/eatWiseLogo.jpg";

interface NavBarProps {
  index?: number;
  onBack?: () => void;
  navbarTitle?: string;
}

export const NavBar: FC<NavBarProps> = ({ index, onBack, navbarTitle }) => {
  return (
    <div className="flex items-center justify-between p-8">
      {index !== 0 ? (
        <span className="cursor-pointer" onClick={onBack}>
          <span className="flex justify-center items-center gap-1">
            <Image
              className="mt-1"
              src={BackArrow}
              alt="back Arrow"
              width={25}
              height={25}
            />
            <span className="font-semibold">Back</span>
          </span>
        </span>
      ) :
      <div className="font-bold text-2xl">{navbarTitle}</div>
    }
      <span
        className="font-bold text-lg text-dark01 px-4 py-2 bg-white shadow-[0_3px_20px_0px_rgba(161,183,205,0.2)]
             shadow-yellow-500 rounded-lg"
      >
        <Image src={Logo} alt="EatWise Logo" width={30} height={30} />
      </span>
    </div>
  );
};
