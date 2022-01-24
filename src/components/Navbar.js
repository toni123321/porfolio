import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import myAvatar from '../resources/images/my-avatar.png';
import logo from '../resources/images/logo.png';
import { useLocation } from 'react-router-dom'

const navigation = [
    { id:1, name: 'Home', href: '/', current: true},
    { id:2, name: 'Projects', href: '/projects', current: false},
    { id:3, name: 'About', href: '/about', current: false},
    { id:4, name: 'Contact us', href: '/contact', current: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar(props) {
    const [navItems, setNavItems] = useState(navigation);
    const location = useLocation();

    const changeActiveNavItem = (id) => {
        //console.log(id);
        setNavItems(
            navItems.map(item => 
                item.id === id 
                ? {...item, current : true} 
                : {...item, current: false}
        ))
    }

    const changeActiveNavItemByPathName = (pathname) => {
        setNavItems(
            navItems.map(item => 
                item.href === pathname 
                ? {...item, current : true} 
                : {...item, current: false}
        ))
    }

    useEffect(() => {
        console.log("Location: ", location.pathname);
        changeActiveNavItemByPathName(location.pathname);
    }, [])

    return (
        <div>
            <Disclosure as="nav" className="bg-blue-500">
            {({ open }) => (
                <>
                <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-6">
                    <div className="relative flex items-center justify-between h-24">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>
                    <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                        <div className="hidden md:block md:ml-6">
                        <div className="flex space-x-6 items-center">
                            <div className="flex-shrink-0 flex items-center text-white font-bold nav-my-name">
                            Antonio Takev
                            </div>
                            {navItems.map((item) => (
                            <Link
                                onClick={() => changeActiveNavItem(item.id)}
                                key={item.name}
                                to={item.href}
                                className={classNames('text-lg',
                                item.current ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-700',
                                'px-3 py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                            ))}
                        </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                        <Menu as="div" className="ml-5 relative">
                        <div>
                            <div className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="h-16 w-16 rounded-full"
                                src={myAvatar}
                                alt="My Avatar"
                            />
                            </div>
                        </div>
                        </Menu>
                    </div>
                    </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                    {navItems.map((item) => (
                        <Link
                        onClick={() => changeActiveNavItem(item.id)}
                        key={item.name}
                        to={item.href}
                        className={classNames(
                            item.current ? 'bg-blue-700 text-w  hite' : 'text-white hover:bg-blue-700',
                            'block px-3 py-2 rounded-md text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        {item.name}
                    </Link>

                    ))}
                    </div>
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>

        </div>
    );
}

export default Navbar;