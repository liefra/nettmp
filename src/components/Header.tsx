import Link from "next/link";
import Image from 'next/image'
import {Popover} from "@headlessui/react";
import logo from '../../public/rbm/logo.png'

export const Header = () => {

    return (
        <>
            <Popover className="relative bg-dark-blue">
                <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true"/>
                <div className="relative z-20">
                    <div
                        className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
                        <div>
                            <Link href={'/'}><a className="">
                                <span className="sr-only">Mekong Water Solutions</span>
                                <Image
                                    placeholder='blur'
                                    priority={true}
                                    alt=''
                                    src={logo}
                                    width={logo.width / 2}
                                    height={logo.height / 2}
                                    quality={100}
                                />
                            </a></Link>

                        </div>

                    </div>
                </div>
            </Popover>
        </>


    )
}





