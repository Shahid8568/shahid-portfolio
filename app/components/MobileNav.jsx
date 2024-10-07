'use client'
import React, { useState } from 'react';
import { Drawer } from 'antd/lib';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <span onClick={showDrawer} className='cursor-pointer block lg:hidden'>
                <RxHamburgerMenu size={30} />
            </span>
            <Drawer title="" onClose={onClose} open={open} className='!bg-[#0d1224] !text-white'>
                <ul className="mt-2 flex flex-col items-start text-sm" id="navbar-default">
                    <li onClick={onClose}>
                        <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
                            <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
                        </Link>
                    </li>
                    <li onClick={onClose}>
                        <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></Link>
                    </li>
                    <li onClick={onClose}>
                        <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
                    </li>
                    <li onClick={onClose}>
                        <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
                    </li>
                    <li onClick={onClose}>
                        <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
                    </li>
                    <li onClick={onClose}>
                        <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#contact"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">Contact</div></Link>
                    </li>
                </ul>
            </Drawer>
        </>
    );
};
export default MobileNav;