import { NextPage } from "next";
import type { Liff } from "@line/liff";
import { SuccessRegis } from "@/components/Elements/SuccessRegis";
import { useRouter } from "next/router";

const Success: NextPage<{ liff: Liff | null; liffError: string | null }> = (
    { liff, liffError }
) => {
    const router = useRouter()

    const query = router.query
   
    return <SuccessRegis name={query?.name} liff={liff}/>
}

export default Success;