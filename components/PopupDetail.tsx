import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from "next/image";

type DetailProps = {
  detail: any,
  time: Date,
  status: boolean
}

export default function PopupDetail({status, detail, time}: DetailProps) {
  const [open, setOpen] = useState(status);
  const [details, setDetail] = useState(detail);
  const cancelButtonRef = useRef(null);
  let execute = 0;

  useEffect(()=>{
    const loadPopup = async ()=>{
      setOpen(status);
      setDetail(detail);
    }
    loadPopup();
  }, [time])

  const closePopup = () => {
    setOpen(false);
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={() => closePopup()}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 md:w-full md:max-w-md">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        {detail?.title}
                      </Dialog.Title>
                      <div className="mt-2 container">
                        <div className="py-5 bg-white flex items-center mx-auto sm:flex-row flex-row">
                          <div className="inline-flex items-center justify-center rounded-md">
                              <Image
                                alt={detail?.title}
                                src={detail?.image?.large}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                width={700}
                                height={40}
                              />
                          </div>
                        </div>

                        <div className="flex-grow sm:text-left text-black inline-flex text-center mt-0">
                          {detail?.contentSnippet}
                        </div>
                        <div className="rounded-md shadow mt-2 mb-2 float-left w-full">
                          <a href={detail?.link} target="blank" className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 px-8 py-3 text-base font-medium text-white">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
