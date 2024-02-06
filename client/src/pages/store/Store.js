import React from "react";
import BreadCrumb from "../../components/BreadCrumb";

import ProductPage from "../../components/ProductPage";
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import {  Disclosure } from '@headlessui/react'
import { useDispatch } from "react-redux";
import { fetchProductsByFiltersAsync } from "../../redux/features/products/productsSlice";
const filters = [

  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'dıgıtal', label: 'dıgıtal', checked: false },
      { value: 'canvas', label: 'canvas', checked: false },
      { value: 'nft', label: 'nft', checked: true },
  
    ]
  }

]
const Store = () => {
  const dispatch = useDispatch()
  return (
    <div className="w-full px-12 h-[100%] ">
      <BreadCrumb title="Our Store" />
      <div className="w-full h-full">
        <div className=" w-full flex h-full">
          <div className=" col-3 w-[20%]">
            <div className=" h-60  flex flex-col item-center">
              <h1 className="text-2xl flex items-center justify-center">
                Shop By Category
              </h1>
              {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium ">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                 
                                 <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      onChange={(e)=> dispatch(fetchProductsByFiltersAsync(option.value))}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                             
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1"
                                    >
                                      {option.label}
                                    </label>
                                  
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
            </div>
          </div>
          <div className=" flex flex-wrap">
            <ProductPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;