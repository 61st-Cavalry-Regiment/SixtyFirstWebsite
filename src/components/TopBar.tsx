import MImage, { parseUrl } from './Image'
import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0'
import { Button } from './Button'

interface INav {
    name: string
    href: string
}

const NAVIGATION: INav[] = [
    { name: 'Home', href: '/' },
    { name: 'Recruitment', href: '/recruitment' },
    { name: 'Unit Photos', href: '/unitphotos' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface UserProps {}

function User(props: UserProps) {
    const { user, error, isLoading } = useUser()
    if (isLoading) return <div>Loading</div>
    if (error) return <div>{error.message}</div>

    if (user) {
        console.log(user)
        return (
            <Menu as="div" className="ml-3 relative">
                {({ open }) => (
                    <>
                        <div>
                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open user menu</span>
                                <Image
                                    className="h-8 w-8 rounded-full"
                                    src={user.picture || ''}
                                    width={32}
                                    height={32}
                                    alt=""
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                static
                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link href="/api/auth/logout">
                                            <a
                                                className={classNames(
                                                    active ? 'bg-gray-100' : '',
                                                    'block px-4 py-2 text-sm text-gray-700'
                                                )}
                                            >
                                                Sign out
                                            </a>
                                        </Link>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        )
    } else {
        return (
            <Link href="/api/auth/login">
                <a className="text-white">
                    <Button>Login</Button>
                </a>
            </Link>
        )
    }
}

export default function TopBar() {
    const router = useRouter()
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center relative left-0 top-0 w-16 h-16">
                                    <Image
                                        className="block h-16 w-auto"
                                        src={parseUrl('61st.png')}
                                        layout="fill"
                                        objectFit="contain"
                                        alt="Logo"
                                    />
                                </div>
                                <div className="hidden sm:block sm:ml-6 my-auto">
                                    <div className="flex space-x-4">
                                        {NAVIGATION.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                            >
                                                <a
                                                    className={classNames(
                                                        router.pathname ===
                                                            item.href
                                                            ? 'bg-gray-900 text-white'
                                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}
                                                    aria-current={
                                                        router.pathname ===
                                                        item.href
                                                            ? 'page'
                                                            : undefined
                                                    }
                                                >
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <User />
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {NAVIGATION.map((item) => (
                                <Link key={item.name} href={item.href}>
                                    <a
                                        className={classNames(
                                            router.pathname === item.href
                                                ? 'bg-gray-900 text-white'
                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={
                                            router.pathname === item.href
                                                ? 'page'
                                                : undefined
                                        }
                                    >
                                        {item.name}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
