import { FC } from "react";
import Image from "next/image";
import Tick from "../../assets/icons/tickIconBlue.svg";

import type { Liff } from "@line/liff";

interface SuccessRegisProps {
  name: string | undefined | string[];
  liff: Liff | null;
}

export const SuccessRegis: FC<SuccessRegisProps> = ({ name, liff }) => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center
            gap-4 bg-green01"
    >
      <div className="flex items-center justify-center gap-2 mb-5">
        <Image src={Tick} alt="tick" width={30} height={30} />
        <p className="font-semibold text-sm text-blue01">Profile Set Up!</p>
      </div>
      <h1 className="font-bold text-3xl text-white text-center">
        Congrats {name}! <br /> You're set to start!
      </h1>
      <p className="font-semibold text-sm text-blue01">
        Thank you for joing us! Enjoy your meal!
      </p>
      <button
        className="absolute bottom-5 bg-dark01 text-white 
            p-4 rounded-xl font-medium text-sm w-80"
        onClick={() => liff?.closeWindow()}
      >
        Back to Chat
      </button>
    </div>
  );
};
