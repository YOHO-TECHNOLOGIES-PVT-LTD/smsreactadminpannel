import { IoIosAddCircleOutline } from "react-icons/io";
import { COLORS } from "../../constants/uiConstants";
import { FONTS } from "../../constants/uiConstants";
import { MdDeleteSweep, MdOutlineEditCalendar } from "react-icons/md";
import { ServiceCenterListPage } from "./ServiceCenterListPage";
import React, { useState } from 'react';
import 'flowbite';
import  "@preline/accordion"

export const ServiceManagementPage = () => {

  return (
  <>
  <ServiceCenterListPage />
  <div className="flex p-4 pb-8 sticky top-0  rounded-t-xl shadow-inner-top border-b-2 border-orange-700" style={{ backgroundColor: COLORS.bgColor }}>
        <h1 className="font-bold text-3xl pt-2 pl-0" style={{ color: "#9b111e" }}>Service Management System</h1>
        <button className="flex static bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ml-auto " style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}><IoIosAddCircleOutline className="mt-1 mr-2 " />Add</button>
      </div>

<div id="accordion-collapse" data-accordion="collapse" >
  <h2 id="accordion-collapse-heading-1">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>Car Wash</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>Car Painting</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>Full Service</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>

 





    
    {/* <div className="mt-0" style={{ fontFamily: FONTS.header.fontFamily }}>
      <div className="flex p-4 pb-8 sticky top-0  rounded-t-xl shadow-inner-top border-b-2 border-orange-700" style={{ backgroundColor: COLORS.bgColor }}>
        <h1 className="font-bold text-3xl pt-2 pl-0" style={{ color: "#9b111e" }}>Service Management System</h1>
        <button className="flex static bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ml-auto " style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}><IoIosAddCircleOutline className="mt-1 mr-2 " />Add</button>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-5">
        <div className="bg-sky-50 rounded-lg " >
          <div className="max-w-m p-3 border pr-10 border-gray-200 rounded-lg shadow-sm dark:border-gray-700 bg-orange-50">
            <div className="flex">
              <a href="#">
                <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white pt-1">Periodic Maintanence service</h5>
              </a>
              <button className="flex shadow-md p-1 rounded-lg ml-auto"><MdDeleteSweep className="w-7 h-9 fill-orange-800" /></button>
              <button className="flex shadow-md p-1 rounded-lg ml-1 "><MdOutlineEditCalendar className="w-7 h-9 fill-orange-800" /></button>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}>
              <button className="flex"><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg">
          <div className="max-w-m p-3 border pr-10 pb-6 border-gray-200 rounded-lg shadow-sm dark:border-gray-700 bg-orange-50">
            <a href="#">
              <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Periodic Maintanence service</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}>
              <button className="flex" ><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
            </a>
          </div>
        </div>
        <div className="bg-white  rounded-lg">
          <div className="max-w-m p-3 border pr-10 border-gray-200 rounded-lg shadow-sm dark:border-gray-700 bg-orange-50">
            <a href="#">
              <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Periodic Maintanence service</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}>
              <button className="flex" ><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
            </a>
          </div>
        </div>
        <div className="bg-white  rounded-lg">
          <div className="max-w-m p-3 border pr-10 border-gray-200 rounded-lg shadow-sm dark:border-gray-700 bg-orange-50">
            <a href="#">
              <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Periodic Maintanence service</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}>
              <button className="flex" ><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
            </a>
          </div>
        </div>
        <div className="bg-white  rounded-lg">
          <div className="max-w-m p-3 border pr-10 border-gray-200 rounded-lg shadow-sm dark:border-gray-700 bg-orange-50">
            <a href="#">
              <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Periodic Maintanence service</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}>
              <button className="flex" ><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
            </a>
          </div>
        </div>
        <div className="bg-white  rounded-lg">
          <div className="max-w-m p-3 border pr-10 border-gray-200 rounded-lg shadow-sm dark:border-gray-700 bg-orange-50">
            <a href="#">
              <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Periodic Maintanence service</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}>
              <button className="flex" ><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
            </a>
          </div>
        </div>
        <div className="bg-white  rounded-lg">
          <div className="max-w-m p-3 border pr-10 border-gray-200 rounded-lg shadow-sm dark:border-gray-700 bg-orange-50">
            <a href="#">
              <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Periodic Maintanence service</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}>
              <button className="flex" ><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
            </a>
          </div>
        </div>
        <div className="bg-white  rounded-lg">
          <div className="max-w-m p-3 border pr-10 border-gray-200 rounded-lg shadow-sm dark:border-gray-700 bg-orange-50">
            <a href="#">
              <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Periodic Maintanence service</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}>
              <button className="flex" ><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
            </a>
          </div>
        </div>
        <div className="bg-white  rounded-lg">
          <div className="max-w-m p-3 border pr-10 border-gray-200 rounded-lg shadow-sm dark:border-gray-700 bg-orange-50">
            <a href="#">
              <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Periodic Maintanence service</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}>
              <button className="flex" ><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
            </a>
          </div>
        </div>
        <div className="bg-white  rounded-lg">
          <div className="max-w-m p-3 border pr-10 border-gray-200 rounded-lg shadow-sm dark:border-gray-700 bg-orange-50">
            <a href="#">
              <h5 className="mb-2  tracking-tight text-gray-900 dark:text-white">Periodic Maintanence service</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">complete car care as per manufacture car and mileage</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}>
              <button className="flex" ><IoIosAddCircleOutline className="mt-1 mr-2" /> Add</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <ServiceCenterListPage /> */}
  </>
  )
}
