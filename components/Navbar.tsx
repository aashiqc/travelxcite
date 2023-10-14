
"use client"

import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/favicontravel-01.svg';
import { NAV_LINKS } from '@/constants';
import { Button } from "@/components/ui/button";
import menu from '../public/more.png';
import close from '../public/close.png';
import { useState } from 'react';


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuIconClose, setMenuIconClose] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!isMenuOpen);
    setMenuIconClose(!isMenuIconClose); // Toggle the menu icon
  };

  return (
    <nav className='relative z-20 py-5 px-8 lg:px-20 '>
      <div className="shadow-sm flex items-center justify-between">
        <Link href="/">
          <Image src={logo} width={194} height={24} alt='logo'/>
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
          {NAV_LINKS.map((link) => (
            <Link className='transition-all hover:font-bold' href={link.href} key={link.key}>{link.label}</Link>
          ))}
        </ul>
        <div className="hidden lg:flex">
          
        
    <Button variant='destructive'>Login</Button>
  

        </div>
        <div className='px-5 lg:hidden'>
          <Image
            onClick={toggleMobileMenu}
            width={24}
            src={isMenuIconClose ? close : menu} // Toggle the menu icon based on state
            alt={isMenuIconClose ? 'close-menu' : 'menu'}
          />
        </div>
      </div>
      <div className={`dropdown ${isMenuOpen ? 'flex' : 'hidden'} mt-4 items-center justify-center`} id="drop-menu">
        <ul className='h-full gap-5 items-center justify-center flex flex-col'>
          {NAV_LINKS.map((link) => (
            <Link className='transition-all hover:font-bold' href={link.href} key={link.key}>{link.label}</Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
