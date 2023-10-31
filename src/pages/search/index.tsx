import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import OrderOfNames from "@/components/OrderOfNames";
import Results from "@/components/search/Results";
import Search from "@/components/search/Search";
import Head from "next/head";
import React from "react";

type Props = {};

const SearchPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Ibom Dictionary | Search a name</title>
        <meta
          name="description"
          content="FSearch for a name and find its meaning!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div className="w-full relative flex flex-col">
        <Nav />
        <Search />
        <Results />
        <OrderOfNames />
        <Footer />
      </div>
    </>
  );
};

export default SearchPage;
