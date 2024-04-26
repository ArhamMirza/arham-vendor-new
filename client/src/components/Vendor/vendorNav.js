import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline'

import "../../styles/Navbar.css"

let navigation = [
    { name: 'Home', href: '/vendorHome', current: true },
    { name: 'Add Product', href: '/vendorAddProduct', current: false },
    {name:'Orders',href:'/vendorViewOrder',current:false},
    {name:'Chat',href:'/vendorChat', current:false}
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar({ currentPage }) {
    navigation = navigation.map((item) => ({
        ...item,
        current: item.name === currentPage,
    }));

    const userID = localStorage.getItem("userID") || '6617bc2ecf757dfbbdaed2f8';
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/user/getuserbyid', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ UserID: userID })
                });

                if (!response.ok) {
                    throw new Error('Error');
                }

                const data = await response.json();
                setUserName(data.username);

            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        getUserDetails();
    }, [userID]);

    const getInitials = (name) => {
        return name.split(' ').map((n) => n[0]).join('').toUpperCase();
    };

    const navigate = useNavigate();

    const goToWishlist = () => {
        navigate('/wishlist');
    };

    const goToCart = () => {
        navigate('/cart');
    };

    return (
        <Disclosure as="nav" className="bg-gray-800 fixed w-full top-0 z-20 bg-black">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 md:px-8">
                        <div className="relative flex h-16 items-center justify-between">

                            {/* Mobile menu button*/}
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>

                            {/* Left Side - Navbar */}
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                {/* Logo */}
                                <div className="flex flex-shrink-0 items-center navbar-logo">
                                    OLumsX
                                </div>

                                {/* Navigations */}
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Navbar */}
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* Wishlist Icon */}
                                

                                {/* Cart Icon */}
                                

                                {/* Profile Dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative flex rounded-full bg-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <span className="h-8 w-8 rounded-full flex items-center justify-center font-semibold text-black">
                                                {getInitials(userName)}
                                            </span>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/profile"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/customerorders"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Orders
                                                    </a>
                                                )}
                                            </Menu.Item>

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/chatcustomer"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Chats
                                                    </a>
                                                )}
                                            </Menu.Item>

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}