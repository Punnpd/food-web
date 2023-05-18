import { useState, useCallback } from "react";
import type { Liff } from "@line/liff";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout"
import { RegistrationForm } from "@/components/RegistrationForm";
// import styles from "../styles/Home.module.css";

const Register: NextPage<{ liff: Liff | null; liffError: string | null }> = ({
  liff,
  liffError
}) => {
  const [index, setIndex] = useState(0);

  const onClickRole = useCallback(async () => {
    setIndex((prev) => prev+1);
    console.log(index);
  }, []);

  return (
    <Layout title="EatWise" index={index} onBack={() => setIndex((prev) => prev-1)}>
      <RegistrationForm 
        liff={liff}
        liffError={liffError}
        index={index}
        onClickUpdateIndex={onClickRole}
      />
    </Layout>
  );
};

export default Register;
