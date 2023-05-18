import { FC } from "react";

interface StatusProps {
  status: string;
}

export const Status: FC<StatusProps> = ({ status }) => {
  return (
    <div
      className="text-white text-sm px-4 py-2
         bg-red-300 rounded-full"
    >
      {status}
    </div>
  );
};
