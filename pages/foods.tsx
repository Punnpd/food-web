import { NextPage } from "next";
import type { Liff } from "@line/liff";
import { FoodsItem } from "@/components/Foods/FoodsItem";
import { Layout } from "@/components/Layout";

const Foods: NextPage<{ liff: Liff | null; liffError: string | null }> = ({
  liff,
  liffError,
}) => {
  return (
    <div className="w-full sm:w-96 mx-auto">
      <Layout title="EatWise" index={0} header="Thank you! 🎉">
        <FoodsItem liff={liff} liffError={liffError} />
      </Layout>
    </div>
  );
};

export default Foods;
