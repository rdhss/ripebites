import MenuCart from "@/components/MenuCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import hero1 from "@/assets/images/hero1.png";
import hero2 from "@/assets/images/hero2.png";
import hero3 from "@/assets/images/hero3.png";
import hero4 from "@/assets/images/hero4.png";
import Steps from "@/components/Steps";
import Image from "next/image";
import { worked } from "@/menu";
import { NextRouter, useRouter } from "next/router";

export default function Home() {
  const router : NextRouter = useRouter()
  return (
    <main className="pt-28 text-black">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-y-20 px-14 md:px-20 pt-32">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center md:text-left my-20 text-6xl tracking-tight font-bold">
            Beautiful food & takeaway,{" "}
            <span className="text-primary">delivered</span> to your door.
          </h1>
          <p className="text-muted text-center w-full md:text-left md;pr-28">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500.
          </p>
          <div className="w-full flex justify-center md:justify-start pt-6">
            <button className="bg-primary text-white text-xl px-6 py-4 rounded-md text-center">
              Place an Order
            </button>
          </div>
          <div className="mt-7 w-full md:justify-start">
            <p className="text-center font-bold flex gap-2 items-center justify-center md:justify-start">
              <FontAwesomeIcon
                icon={faStar}
                width={25}
                className="inline mb-1 text-green-400"
              />
              Trustpilot
            </p>
            <p className="text-center md:text-left mt-2">
              <span className="text-green-400">4.8 out of 5</span> based on
              2000+ reviews
            </p>
          </div>
        </div>
        <div className="md:flex md:justify-end">
          <Image src={hero1} alt="hero"/>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 md:mt-60 gap-y-20 md:px-20 bg-primary/[0.02] px-6 mt-14 pb-16">
        <div>
          <h1 className="text-center mt-20 mb-10 md:text-left text-primary text-5xl tracking-tight font-bold md:pr-32">
            The home of fresh products
          </h1>
          <p className="text-center md:text-left md:pr-40 text-muted">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500.{" "}
          </p>
          <div className="w-full flex justify-center pt-6 md:justify-start">
            <button className="bg-primary text-white text-xl px-6 py-4 rounded-md text-center">
              Learn about us
            </button>
          </div>
        </div>

        <div>
          <Image src={hero2} alt="hero" />
        </div>
      </section>
      <section className="mt-10">
        <h1 className="text-center text-5xl text-primary font-bold">
          How it works.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-16">
          {worked.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <Steps images={item.url} head={item.head} title={item.title} />
          ))}
        </div>
      </section>
      <section className="px-3 pt-20 mt-11 pb-16 bg-primary/[0.02]">
        <h1 className="text-center text-5xl text-primary font-bold">
          Browse our menu
        </h1>
        <div className="md:hidden text-center mt-6 text-muted">
          <p>Use our menu to place an order online, or phone</p>
          <p>our store to</p>
          <p>place a pickup order. Fast and fresh food.</p>
        </div>
        <div className="hidden md:block text-center mt-6 text-muted">
          <p>Use our menu to place an order online, or phone our store to</p>
          <p>place a pickup order. Fast and fresh food.</p>
        </div>

        <div className="mt-9">
          <MenuCart path="/"/>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2  gap-y-20 px-6 mt-14 pb-16">
          <div>
            <Image src={hero3} alt="hero" />
          </div>
          <div>
          <h1 className="text-center md:text-left mt-20 mb-10 text-primary text-5xl tracking-tight font-bold">
            Order online with our simple checkout.
          </h1>
          <p className="text-center md:text-left md:pr-12 text-muted ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500.{" "}
          </p>
          <div className="w-full md:justify-start flex justify-center pt-6">
            <button onClick={() => router.push("/faq")} className="bg-primary text-white text-xl px-6 py-4 font-normal rounded-md text-center">
              See Our FAQ
            </button>
          </div>
          </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-y-20 bg-primary/[0.02] px-6 mt-14 pb-16 md:px-16">
        <div className="md:pr-14">
          <h1 className="text-center mt-20 mb-10 text-primary text-5xl tracking-tight font-bold md:text-left">
            Call our store and takeaway when it suits you best.
          </h1>
          <p className="text-center md:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500.{" "}
          </p>
          <div className="w-full flex justify-center pt-6">
            <button className="bg-primary text-white text-xl px-6 py-4 font-normal rounded-md text-center">
              Ph +61 233 3333
            </button>
          </div>
        </div>
        <div>
          <Image src={hero4} alt="hero" />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-y-5 bg-primary/[0.02] px-6 mt-5 pb-16">
        <div className="overflow-hidden w-full h-[23rem] md:h-[40rem] bg-hero-5">
          {/* <Image src={hero5} alt="hero" width={2000}/> */}
        </div>
        <div className="bg-primary py-10 px-5 w-full h-[23rem] md:h-[40rem] md:flex md:flex-col md:justify-center">
          <h1 className="text-white font-bold text-5xl"><span className="text-[#1b9097]">Support</span> good food<br/> and local business.</h1>
          <button className="py-4 px-8 md:w-48 text-primary mt-7 bg-white text-xl rounded-md">Order Now</button>
        </div>
      </section>
    </main>
  );
}
