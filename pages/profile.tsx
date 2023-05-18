import { NextPage } from "next";
import type { Liff } from "@line/liff";
import { Layout } from "@/components/Layout";

import { UserProfile } from "@/components/Profile/UserProfile";

const Profile: NextPage<{ liff: Liff | null; liffError: string | null }> = ({
  liff,
  liffError,
}) => {
  return (
    <div className="w-full sm:w-96 mx-auto">
      <Layout title="EatWise" index={0} header="Profile">
        <UserProfile liff={liff} liffError={liffError} />
      </Layout>
    </div>
  );
};

export default Profile;
