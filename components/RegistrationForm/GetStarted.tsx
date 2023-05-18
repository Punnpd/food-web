import { FC } from "react";

import { RoleCard } from "./RoleCard";
import BoyIcon from "../../assets/icons/profileCartoon.svg";
import TeacherIcon from "../../assets/icons/teacherCartoon.svg";

interface GetStartedProps {
    onClickRole: () => void
}

export const GetStarted: FC<GetStartedProps> = ({ onClickRole }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div style={{ height: "1rem" }}></div>

      <div className="flex flex-col gap-5">
        <div className="text-left w-full">
          <h1 className="font-bold text-3xl">Get Started</h1>
          <h2 className="font-light text-sm text-gray-500 mt-3 mb-5">
            Starting by choosing your role.
          </h2>
        </div>
        <RoleCard
          icon={BoyIcon}
          title="I'm a Student"
          description="I super like ICanteen. I eat here every day"
          onClick={onClickRole}
        />
        <RoleCard
          icon={TeacherIcon}
          title="I'm a Teacher"
          description="I want to share my knowledge & eat at ICanteen"
          onClick={onClickRole}
        />
      </div>
    </div>
  );
};
