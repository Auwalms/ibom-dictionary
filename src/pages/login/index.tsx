import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Head from "next/head";
import google from "@/assets/google-icon.svg";
import Image from "next/image";

type Props = {};

const Login = (props: Props) => {
  return (
    <>
      <Head>
        <title>Ibom Dictionary | Login</title>
        <meta name="description" content="From idea to product, like magic!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="w-full relative flex flex-col">
        <Nav />

        <div className="mt-[75px] bg-[#F7F7F7] min-h-screen">
          <div className="bg-white mt-[72px] pt-[24px] pb-[132px]">
            <h1 className="text-black text-[40px] font-bold">Log In</h1>
            <p className="text-[24px] font-semibold text-[#828282]">
              Sign in with Google to edit or add entries.
            </p>

            <div className="flex justify-center mt-[104px]">
              <button className="flex gap-[24px] px-[16px] py-[10px] items-center rounded-[10px] border-2 border-[#BDBDBD]">
                <Image src={google} alt="google" />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Login;
