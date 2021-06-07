
function HeaderOption({ title, Icon, selected }) {
    return (
        <div className={`flex items-center space-x-1 ml-6 text-gray-500 border-b-4 cursor-pointer
         border-transparent pb-2 hover:text-blue-500 hover:border-blue-500
         ${selected && "text-blue-700 !border-blue-500"}`}>
            <Icon className="h-4" />
            <p className="text-tiny sm:text-sm">{ title }</p>
        </div>
    )
}

export default HeaderOption