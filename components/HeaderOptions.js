import {
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PhotographIcon,
    BookOpenIcon,
    SearchIcon
} from '@heroicons/react/outline'
 import HeaderOption from './HeaderOption'

function HeaderOptions() {
    return (
        <div className="flex items-center  w-full space-x-5 sm:space-x-28
         md:pl-44 text-sm border-b-[1px]">
           <div className="flex overflow-x-scroll sm:overflow-x-auto">
               <div><HeaderOption title="All" Icon={SearchIcon} selected /></div>
               <div><HeaderOption title="Images" Icon={PhotographIcon}  /></div>
               <div><HeaderOption title="News" Icon={NewspaperIcon} /></div>
               <div><HeaderOption title="Maps" Icon={MapIcon} /></div>
               <div><HeaderOption title="Books" Icon={BookOpenIcon} /></div>
               <div><HeaderOption title="More" Icon={DotsVerticalIcon} /></div>
           </div>
            <div className="md:flex hidden pb-2 text-gray-600 space-x-3 text-tiny">
                <p>Settings</p>
                <p>Tools</p>
           </div>
        </div>
    )
}

export default HeaderOptions
