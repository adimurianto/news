import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import { updateCategory, updateNews } from '../features/News/actions'
import Router from 'next/router';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type NavProps = {
    category: string;
}

export default function Navbar({category}: NavProps) {
  const navigation = [
    { name: 'Nasional', href: '?category=nasional' },
    { name: 'Ekonomi', href: '?category=ekonomi' },
    { name: 'Teknologi', href: '?category=teknologi' },
    { name: 'Hiburan', href: '?category=hiburan' },
  ]

  const dispatch = useDispatch()

  const handleClickCategory = (category: string) => {
    category = category.toLowerCase()
    Router.push({
      query: {category}
    });

    dispatch(updateCategory(category));
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="/logoNews.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="/logoNews.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        onClick={() => handleClickCategory(item.name)}
                        className={classNames(
                          item.name.toLowerCase() == category ? 'bg-gray-900 text-white cursor-pointer' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium cursor-pointer'
                        )}
                        aria-current={item.name.toLowerCase() == category ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  onClick={() => handleClickCategory(item.name)}
                  className={classNames(
                    item.name.toLowerCase() == category ? 'bg-gray-900 text-white cursor-pointer' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium cursor-pointer'
                  )}
                  aria-current={item.name.toLowerCase() == category ? 'page' : undefined}
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