import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon
} from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'

function PaginationButtons() {
    const router = useRouter();
    const startNumber = Number(router.query.start) || 0;

    return (
        <div className="flex justify-evenly items-center">
            {startNumber >= 10 &&
                <div>
                    <Link href={`/search?q=${router.query.q}&start=${startNumber - 10}` }>
                        <div className="pagginated-btn">
                        <ChevronDoubleLeftIcon className="h-5" />
                        <p>previous</p>
                        </div>
                    </Link> 
                </div>
            }
            
            <div>
                <Link href={`/search?q=${router.query.q}&start=${startNumber + 10}`}>
                    <div className="pagginated-btn">
                    <ChevronDoubleRightIcon className="h-5" />
                    <p>next</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default PaginationButtons
