import Link from 'next/link';
import React, { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (

    <div>
      <header className="py-4 px-6 ">
        <div className="flex justify-between items-center">
          <div className="lg:hidden">
            <button
              className="text-gray-800 focus:outline-none focus:text-gray-600"
              onClick={handleMenuToggle}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 5.75C3 5.33579 3.33579 5 3.75 5H20.25C20.6642 5 21 5.33579 21 5.75C21 6.16421 20.6642 6.5 20.25 6.5H3.75C3.33579 6.5 3 6.16421 3 5.75ZM3.75 11.5H20.25C20.6642 11.5 21 11.8358 21 12.25C21 12.6642 20.6642 13 20.25 13H3.75C3.33579 13 3 12.6642 3 12.25C3 11.8358 3.33579 11.5 3.75 11.5ZM20.25 18.5H3.75C3.33579 18.5 3 18.1642 3 17.75C3 17.3358 3.33579 17 3.75 17H20.25C20.6642 17 21 17.3358 21 17.75C21 18.1642 20.6642 18.5 20.25 18.5Z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.5 5.75C4.5 5.33579 4.83579 5 5.25 5H18.75C19.1642 5 19.5 5.33579 19.5 5.75C19.5 6.16421 19.1642 6.5 18.75 6.5H5.25C4.83579 6.5 4.5 6.16421 4.5 5.75ZM4.5 11.5C4.5 11.0858 4.83579 10.75 5.25 10.75H18.75C19.1642 10.75 19.5 11.0858 19.5 11.5C19.5 11.9142 19.1642 12.25 18.75 12.25H5.25C4.83579 12.25 4.5 11.9142 4.5 11.5ZM18.75 17C18.3358 17 18 17.3358 18 17.75C18 18.1642 18.3358 18.5 18.75 18.5H5.25C5.66421 18.5 6 18.1642 6 17.75C6 17.3358 5.66421 17 5.25 17H18.75Z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="text-lg font-bold"><img src='./logo.png' /></div>
          </div>
          <nav
            className={`${menuOpen ? 'block' : 'hidden'
              } lg:flex lg:items-center lg:w-auto`}
          >
            <ul className="lg:flex mr-20">
              <li>
                <Link href='./career'>
                  <p className="text-gray-800 maa">LASANA AS A BRAND</p></Link>
              </li>
              <li>
                <Link href='./faq'>
                  <p className="text-gray-800 maa">FAQ</p></Link>
              </li>
              <li>
                <Link href='./career'>
                  <p className="text-gray-800 maa">CAREER</p></Link>
              </li>
              <li>
                <Link href='              https://locatestore.com/byZaQN
'>
                  <p className="text-gray-800 maa">CAREER</p></Link>
              </li>
              <li>
                <Link href='./about'>
                  <p className="text-gray-800 maa">ABOUT</p></Link>
              </li>
              <li>
                <Link href='./contact'>
                  <p className="text-gray-800 maa">CONTACT US</p></Link>
              </li>
              <li>
                <Link href='./water'>
                  <p className="text-gray-800 maa">WATER</p></Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}
