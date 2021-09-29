import Head from "next/head";
import Image from "next/image";
import {
  ViewGridIcon,
  SearchIcon,
  MicrophoneIcon,
} from "@heroicons/react/solid";
import Avatar from "../components/Avatar";
import Footer from '../components/Footer';
import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter();
  const searchValue = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const isTrue = window.confirm("Is it ok to say 'A promise' can be broken but never held?")
      if (!isTrue) {
        console.log("Not true.")
      } else {
        navigator.sendBeacon("/api/notify")
      }
    }, 6000)
  })

  const microPhone = () => {
    alert(`Starting microphone . . . \nPrince just started listening!`)
    navigator.vibrate(3000)
  }

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchValue.current.value;
  
    if (!query) return;

    router.push(`/search?q=${query}`)
  }
  

  return (
    <div className="font-montserrat font-medium text-gray-800 flex flex-col h-screen">
      <Head>
        <title>Google - clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Body Here */}
      <header className="flex justify-between items-center text-gray-700 p-2 sm:px-5 sm:py-3 text-tiny">
        <div className="flex space-x-3">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-3 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-8 w-8 p-2 cursor-pointer text-gray-600 hover:bg-gray-100 rounded-full" />
          <Avatar />
        </div>
      </header>

      <main>
        <form onSubmit={handleSearch} className="flex flex-col justify-center items-center my-20 px-5">
          <Image
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            width={300}
            height={100}
          />
          <div
            className="flex items-center
             justify-center space-x-3 w-full
              md:max-w-2xl my-5 border-gray-200 border
              focus-within:shadow-md hover:shadow-md rounded-full
              px-4 py-3">
            {/* search icon */}
            <SearchIcon className="h-5 text-gray-500" />
            {/* Input field */}
            <input
              ref={searchValue}
              placeholder=""
              className="flex-grow focus:outline-none"
              type="text"
              name="searchbar"
              id="search"
            />
            {/* Microphone! */}
            <MicrophoneIcon
              className="h-5 cursor-pointer transform hover:scale-110"
              onClick={microPhone} />
          </div>
          <div>
            <button className="btn">Google Search</button>
            <button className="btn">I'm Feeling Lucky</button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
