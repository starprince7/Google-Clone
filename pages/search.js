import Image from 'next/image'
import Head from 'next/head'
import { XIcon, SearchIcon, MicrophoneIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { useRef, useState, useEffect } from 'react'
import Response from '../Response'
import HeaderOptions from '../components/HeaderOptions'
import SearchResults from '../components/SearchResults'


function Search({ results }) {
    // console.log('Google Search Reslts data=>>>', results)
    const [inputValue, setInputValue] = useState('')
    const router = useRouter();
    const searchRef = useRef(null);

    useEffect(() => {
        setInputValue(router.query.q)
    }, [])


    const searchFunc = (e) => {
        e.preventDefault();
    
        const query = searchRef.current.value;
      
        if (!query) return;
    
        router.push(`/search?q=${query}`)
    }

    const toggleX = (e) => {
        const xIcon = document.getElementById('x-icon')
        searchRef.current.value == '' ?
            xIcon.style.display = 'none' :
            xIcon.style.display = 'inline-block'
        setInputValue(e.target.value);
    }

    return (
        <>
            <Head>
                <title>{ router.query.q } - Google Search</title>
            </Head>
            <div className="sticky top-0 bg-white">
                <header className="flex flex-col justify-center items-center
                md:flex-row md:justify-start md:items-center
                w-full my-6 mx-auto md:mx-7 px-2 border-red-800">
                    <Image
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    width={120}
                        height={40}
                        className="cursor-pointer"
                    onClick={() => router.push('/')}
                    />
                    <form onSubmit={searchFunc} className="w-full md:max-w-2xl flex items-center
                    shadow-lg rounded-full ml-0 sm:ml-10 px-6 py-3 space-x-2
                    border border-gray-100 mt-2 md:mt-0">
                        <input className="outline-none mx-1 flex-grow w-full"
                            ref={searchRef}
                            type="text"
                            value={ inputValue }
                            onChange={ toggleX }/>
                        <span id="x-icon">
                            <XIcon className="h-5 transform scale-110 hover:scale-125
                            text-gray-500 cursor-pointer pr-2 text-3xl"
                                value={router.query.q}
                                onClick={(e) => {
                                    searchRef.current.value = ''
                                    toggleX(e)
                                }} />
                        </span>
                        <MicrophoneIcon className="h-5 hidden md:inline-block
                        transform scale-110 text-3xl text-blue-500
                        border-l border-gray-200 px-3" />
                        <SearchIcon onClick={searchFunc} className="h-5 transform scale-110 text-blue-500 cursor-pointer" />
                        <button hidden type="submit">search</button>
                    </form>
                </header>
                <HeaderOptions />
            </div>
            <SearchResults results={results} />
        </>
    )
}


export const getServerSideProps = async (context) => {
    // Server Side Render Func!
    const useDummyData = false;
    const startNumber = context.query.start || "0";

    const data = useDummyData ? Response : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.q}&start=${startNumber}`
    ).then(res => res.json())

    return {
        props: {
            results: data
        }
    }
}

export default Search
