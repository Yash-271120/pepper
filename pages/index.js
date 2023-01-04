import Head from "next/head";
import Image from "next/image";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import {GiHamburgerMenu} from 'react-icons/gi';
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import info from "../public/Info.png";
import CheckBox from "../components/CheckBox";
import FeatureCard from "../components/FeatureCard";
import InfoCard from "../components/InfoCard";
import Comment from "../components/Comment";
import infoMobile from "../public/info-mobile.png";
import { useState } from "react";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [show, setShow] = useState(false);
  const GiHamburgerMenuHandler = () => {
    const navbar = document.getElementById("navbar");
    if(show){
      navbar.style.top="-800px";
    }else{
      navbar.style.top="0px";
    }
    setShow(!show);

  };
  return (
    <div className={show ? "show" : ""}>
    <div className={`text-black bg-red-50`}>
      <Head>
        <title>Pepper</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="py-3">
          <nav className="flex justify-around">
            <div className="py-2">
              <ul className="flex items-center cursor-pointer">
                <li>
                  <div className="bg-purple-700 w-6 h-6 p-1 rounded-md">
                    <RiBarChartHorizontalFill className="text-white" />
                  </div>
                </li>
                <li className="mx-2 font-bold">
                  <h1>Pepper</h1>
                </li>
              </ul>
            </div>
            <div className="lg:block">
              <ul id="navbar" className={`lg:flex py-2 mt-12 bg-white absolute right-0 left-0 text-center top-[-800px] transition-all ease-in duration-200 lg:opacity-100 lg:static lg:mt-0 lg:bg-red-50`}>
                <li className="px-6 py-3 lg:py-0">About</li>
                <li className="px-6 py-3 lg:py-0">Blog</li>
                <li className="px-6 py-3 lg:py-0">Pricing</li>
                <li className="px-6 py-3 lg:py-0">Careers</li>
                <li className="px-6 py-3 lg:py-0">Contact</li>
                <li className="px-5 my-5 lg:hidden">
                  <a
                    className="p-2 border-purple-700 border text-purple-700 rounded-xl px-6 py-3"
                    href="#"
                  >
                    Login
                  </a>
                </li>
                <li className=" my-10">
                  <a href="#" className="px-6 py-3 bg-purple-700 text-white rounded-xl lg:hidden">Get Started</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex items-center">
                <li className="px-5 flex items-center">
                  <IoMdCart className="text-purple-700 mr-2" />
                  <span className="text-purple-700">Cart</span>
                </li>
                  <li className="px-5 hidden lg:block">
                  <a
                    className="p-2 border-purple-700 border text-purple-700 rounded-xl px-6"
                    href="#"
                  >
                    Login
                  </a>
                </li>
                <li className="px-5 p-2 bg-purple-700 text-white rounded-xl hidden lg:block">
                  <a href="#">Get Started</a>
                </li>
                  <li>
                  <div className="bg-purple-700 w-8 h-8 p-2 rounded-md block lg:hidden">
                    <GiHamburgerMenu className="text-white" onClick={GiHamburgerMenuHandler}/>
                  </div>
                </li>
                
              </ul>
            </div>
          </nav>
        </section>
        <section className="text-center mt-16 p-10">
          <div>
            <h1 className=" text-5xl md:text-6xl lg:text-7xl max-w-3xl m-auto font-semibold">
              Save more and get your finances right
            </h1>
            <p className="py-5 mb-5 text-gray-500 m-auto max-w-3xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button className="bg-purple-700 text-white rounded-lg py-2 px-4">
              Request a demo
            </button>
          </div>
          <div className="my-14">
            <div className=" flex justify-center">
              <Image src={info} className=" hidden sm:block"/>
              <Image src={infoMobile} objectFit="cover" className=" block sm:hidden"/>
            </div>
            <p className="text-gray-400 mt-14">
              Trusted and loved by the world's best teams
            </p>
          </div>
        </section>
        <section>
          <div className="bg-gray-900 text-center text-white p-14 max-w-7xl m-auto rounded-2xl">
            <h1 className="text-4xl sm:text-5xl max-w-lg m-auto">
              A nice and simple financial overview
            </h1>
            <p className="mt-4 max-w-lg m-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries , but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="bg-gray-800 sm:grid p-5 sm:grid-cols-3 sm:divide-x max-w-xl m-auto sm:h-28 items-center rounded-2xl mt-10">
              <div className="p-3 sm:p-0">
                <h1 className="text-4xl">120+</h1>
                <p className="text-gray-400">Useful widgests</p>
              </div>
              <div className="p-3 sm:p-0">
                <h1 className="text-4xl">20+</h1>
                <p className="text-gray-400">Integrations</p>
              </div>
              <div className="p-3 sm:p-0">
                <h1 className="text-4xl">65+</h1>
                <p className="text-gray-400">Features out</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap p-8 mt-10 ml-10">
            <CheckBox data="Public and private chat" succes={true} />
            <CheckBox data="Event scheduler" succes={true} />
            <CheckBox data="Appointment scheduling" succes={true} />
            <CheckBox data="No prior card required" succes={true} />
            <CheckBox data="Group video calls" succes={true} />
          </div>
          <div className="flex flex-wrap p-8 ml-10">
            <CheckBox data="Public and private chat" />
            <CheckBox data="Event scheduler" />
            <CheckBox data="Appointment scheduling" />
            <CheckBox data="No prior card required" />
            <CheckBox data="Group video calls" />
          </div>
        </section>
        <section>
          <div className="text-center">
            <h1 className="text-4xl md:text-4xl lg:text-5xl max-w-xl m-auto font-semibold">
              Supercharge your workflow to get started
            </h1>
            <p className="mt-4 max-w-lg m-auto text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="sm:grid md:grid md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Email Management" type="email" />
            <FeatureCard title="Campaign Calender" type="calendar" />
            <FeatureCard title="Personal assistance" type="person" />
            <FeatureCard title="Payment feature" type="credit" />
            <FeatureCard title="Utility apps" type="apps" />
            <FeatureCard title="sale notification" type="notification" />
          </div>
        </section>
        <section className="m-8">
          <InfoCard
            type="yourTasks"
            title="Manage and Track your Projects"
            succes
          />
          <InfoCard
            type="totalMembers"
            title="Easily manage your team's tasks"
            reverse
          />
          <InfoCard
            type="teamProjects"
            title="Simple financial overview for you"
            succes
          />
        </section>
        <section className="mt-28">
          <div className="p-6">
            <h1 className=" text-5xl md:text-5xl max-w-3xl m-auto font-semibold">
              Don't take our words for it - listen to out clients
            </h1>
            <p className="py-5 mb-5 text-gray-500 m-auto max-w-3xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div className="flex justify-around flex-wrap">
            <Comment
              author="Ronald Richards"
              footer="CEO-Utlta"
              comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s."
              stars={3}
            />
            <Comment
              author="Ronald Richards"
              footer="CEO-Utlta"
              comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s."
              stars={5}
            />
            <Comment
              author="Ronald Richards"
              footer="CEO-Utlta"
              comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s."
              stars={4}
            />
            <Comment
              author="Ronald Richards"
              footer="CEO-Utlta"
              comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s."
              stars={5}
            />
            <Comment
              author="Ronald Richards"
              footer="CEO-Utlta"
              comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s."
              stars={5}
            />
            <Comment
              author="Ronald Richards"
              footer="CEO-Utlta"
              comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s."
              stars={5}
            />
          </div>
        </section>
        <section>
          <div className="md:flex md:justify-around md:items-center">
            <div className="m-12 basis-1/4">
              <h1 className="text-5xl max-w-xl md:m-auto font-semibold">
                Build a powerful website for your startup.
              </h1>
              <p className="mt-4 max-w-lg text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <button className="bg-purple-700 text-white rounded-lg py-2 px-4 my-5">
                Request a demo
              </button>
            </div>
            <div className="m-12 md:basis-7/12 md:flex md:items-center">
              <div>
                <FeatureCard title="7,000 Happy users" type="person" />
                <FeatureCard title="Global community" type="email" />
              </div>
              <div>
                <FeatureCard title="24/7 Support" type="message" />
              </div>
            </div>
          </div>
          <div className="bg-gray-900 text-center text-white p-14 max-w-7xl m-auto mx-14 rounded-2xl flex flex-col items-center">
            <h1 className="text-5xl max-w-lg m-auto font-semibold">
              Focus on the analytics that matter
            </h1>
            <p className="mt-4 max-w-lg m-auto text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <ul className="flex flex-col md:flex-row items-center mt-10">
              <li className="px-5 p-2 mb-8 bg-purple-700 text-white rounded-xl">
                <a href="#">Get Started now</a>
              </li>
              <li className="px-5 mb-8">
                <a
                  className="p-2 border-white border text-white rounded-xl px-6"
                  href="#"
                >
                  Compare plans
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="bg-gray-900 text-white mt-20 p-8">
          <div className="md:flex md:justify-between">
            <div className="m-5">
              <ul className="flex items-center cursor-pointer">
                <li>
                  <div className="bg-purple-700 w-6 h-6 p-1 rounded-md">
                    <RiBarChartHorizontalFill className="text-white" />
                  </div>
                </li>
                <li className="mx-2 font-bold">
                  <h1>Pepper</h1>
                </li>
              </ul>
              <p className="max-w-md my-3">
                Pepper is one the most reliable delievery platform management
                service ti automate your network.
              </p>
              <button className="bg-purple-700 text-white rounded-lg py-2 my-3 px-4">
                Request a demo
              </button>
              <div className="flex gap-4">
                <AiFillLinkedin className="text-2xl" />
                <AiOutlineTwitter className="text-2xl" />
                <MdMail className="text-2xl" />
              </div>
            </div>
            <div className="flex justify-between gap-20 m-5 mt-14 md:mt-0">
              <div>
                <h3 className="text-xl mb-6 font-medium">Pages main</h3>
                <ul>
                  <li>Home</li>
                  <li>Blog</li>
                  <li>Blog Template</li>
                  <li>Pricing</li>
                  <li>Pricing Ecommerce</li>
                  <li>About</li>
                  <li>Careers</li>
                  <li>Careers Template</li>
                  <li>Contact</li>
                  </ul>
              </div>
              <div>
              <h3 className="text-xl mb-6 font-medium">Template pages</h3>
                <ul>
                  <li>Style guide</li>
                  <li>Licenses</li>
                  <li>Changelog</li>
                  </ul>
              </div>
            </div>
          </div>
          <div className="mt-28 ml-8">
            <p>&copy; All rights reserved. <span className="text-green-400">Flowset</span>. Powered by <span className="text-pu">Wf</span>.</p>
          </div>
        </section>
      </main>
    </div>
    </div>
  );
}
