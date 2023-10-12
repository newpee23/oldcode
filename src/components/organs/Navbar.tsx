import React, { useEffect, useRef, useState } from 'react'
import { backToLogin } from '../function/function';

type Props = {}

function Navbar({}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" className="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8 mr-3"
          alt="Flowbite Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite
        </span>
      </a>
      <div className="relative md:order-2">
        <button
          type="button"
          className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-8 h-8 rounded-full"
            src="https://media.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2147483647&v=beta&t=i4Pp6zVfz5VAznPIik_ua4I75sKlu4yAdGKgHC9vpTo"
            alt="user photo"
            aria-expanded={isDropdownOpen}
            onClick={toggleDropdown}
          />
        </button>
        {/* Dropdown menu */}
        <div className={`${isDropdownOpen ? 'block' : 'hidden'} z-50 absolute top-8 right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} ref={dropdownRef} id="user-dropdown">
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
              name@flowbite.com
            </span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Dashboard
              </span>
            </li>
            <li>
              <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Settings
              </span>
            </li>
            <li>
              <span onClick={backToLogin} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer">
                Sign out
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar