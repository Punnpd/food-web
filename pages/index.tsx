import { useState, useCallback } from "react";
import type { Liff } from "@line/liff";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout"

import { Loading } from "@/components/Elements/Loading";
// import styles from "../styles/Home.module.css";

const Home: NextPage<{ liff: Liff | null; liffError: string | null }> = ({
  liff,
  liffError
}) => {

  return (
    <Layout title="EatWise" index={0}>
      <Loading />
    </Layout>
  );
};

export default Home;
