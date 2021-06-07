import PaginationButton from './PaginationButtons'

function SearchResults({ results }) {
    // console.log(results)
    return (
        <div className=" md:ml-[18%] lg:ml-[15.5%] xl:ml-[13.3%] mt-1 w-full md:max-w-2xl
        bg-gray-100 sm:bg-white overflow-x-auto">
            <p className="text-sm hidden sm:inline-block text-gray-500 ml-5">
                About {results.searchInformation?.formattedTotalResults} results
                ({results.searchInformation?.formattedSearchTime} seconds)
            </p>

            {/* Map Results retured Here! */}
            {results.items?.map(item => (
                <div key={item.link} className=" bg-white p-5 mt-2">
                    <div className="group mb-1">
                        <a href={item.link} className="text-tiny sm:text-sm text-gray-600 max-w-sm 
                        my-1 line-clamp-1">
                            {item.formattedUrl}
                        </a>
                        <a href={item.link} className="text-xl text-blue-800
                         group-hover:underline">
                            <h2>{ item.title }</h2>
                        </a>
                    </div>
                    <p className="w-full text-sm text-gray-700 line-clamp-2">{ item.snippet }</p>
                </div>
            ))}
            <PaginationButton />
        </div>
    )
}

export default SearchResults
