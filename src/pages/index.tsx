import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import OrderOfNames from "@/components/OrderOfNames";
import Statistics from "@/components/Statistics";
import Suggestion from "@/components/Suggestion";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ibom Dictionary</title>
        <meta name="description" content="From idea to product, like magic!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="w-full relative flex flex-col">
        <Nav />
        <Header />
        <Statistics />
        <OrderOfNames />
        <Suggestion />
        <Footer />
      </div>
    </>
  );
}
