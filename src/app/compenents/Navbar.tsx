import {FC} from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar:FC = () => {
    return(
        <div className='flex justify-center items-center py-2'>
            <Link href='/' className='flex items-center space-x-2'>
                <div className='relative w-[30px] h-[30px]'>
                    <Image src="/football-info.png" alt="logo" fill
                           className='object-cover'/>
                </div>
                <span className='text-2xl font-bold none md:block'>Football Score</span>
            </Link>

        </div>
    )
}

export  default Navbar