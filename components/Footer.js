import { HeartIcon } from '@heroicons/react/solid'

function Footer() {
    return (
        <footer className="bg-gray-100 mt-auto text-[11px]
         sm:text-tiny text-gray-500 divide-y-[1px] w-full px-2
          divide-grey-300">
            <div className="px-8 py-4">
                <p>Nigeria</p>
            </div>
            <div className="space-y-5 py-5 grid items-center px-8
             grid-flow-row-dense grid-cols-1
             md:grid-cols-2 lg:grid-cols-3">
                <div className="flex justify-center md:col-span-2 lg:col-start-2 lg:col-span-1">
                    <HeartIcon className="h-5 mr-1 text-green-700"/> <p>Carbon neutral since 2021</p>
                </div>
                <div className="flex justify-center whitespace-nowrap space-x-8 md:justify-self-start">
                    <p>About</p>
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How Search works</p>
                </div>
                <div className="flex justify-center space-x-8 md:ml-auto">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
