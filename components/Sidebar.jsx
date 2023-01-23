/* eslint-disable no-unused-vars */
import React from 'react';
import {withRouter} from "next/router";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from 'react';
import getSpaceInfo from '../pages/api/getSpaceInfo';

function Sidebar() {
      const router = useRouter()
      let currentspace = router.query.SpaceId
      const [spaceInfo, SetSpaceInfo] = useState([''])
    
      if (currentspace) {
          
          getSpaceInfo(currentspace).then(data => {
              if (data.length == 0) {
              router.push('/404')
            } 
            if(data.length) { 
              SetSpaceInfo(data)
              
              }}
          )
            }

    return (
      <aside
      className=""
    >
      <div className="py-4 text-gray-500 dark:text-gray-400">
        <a
          className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
          href="#"
        >
          {spaceInfo[0].name}
        </a>
        <ul className="mt-6">
          <li className="relative px-6 py-3">
            <a
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="index.html"
            >

              <span className="ml-4">Dashboard</span>
            </a>
          </li>
        </ul>
        <ul>

          <li className="relative px-6 py-3">
            

          </li>
          <li className="relative px-6 py-3">
  
              <span className="ml-4">Charts</span>
          
          </li>
          <li className="relative px-6 py-3">
            <a
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="buttons.html"
            >
     
          
              <span className="ml-4">Buttons</span>
            </a>
          </li>
          <Link href={`/${currentspace}`+'/reports'} >
          <li className="relative px-6 py-3">
            <a
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="modals.html"
            >
      
              <span className="ml-4">Modals</span>
            </a>
          </li>
          </Link>
          <li className="relative px-6 py-3">
            <span
              className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
              aria-hidden="true"
            ></span>
            <a
              className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
              href="tables.html"
            >

              <span className="ml-4">Tables</span>
            </a>
          </li>
          <li className="relative px-6 py-3">
           
              <span className="inline-flex items-center">
          
                <span className="ml-4">Pages</span>
              </span>
 
            
            
            <template >
              <ul
        
              >
                <li
                  className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  <a className="w-full" href="pages/login.html">Login</a>
                </li>
                <li
                  className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  <a className="w-full" href="pages/create-account.html">
                    Create account
                  </a>
                </li>
                <li
                  className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  <a className="w-full" href="pages/forgot-password.html">
                    Forgot password
                  </a>
                </li>
                <li
                  className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  <a className="w-full" href="pages/404.html">404</a>
                </li>
                <li
                  className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  <a className="w-full" href="pages/blank.html">Blank</a>
                </li>
              </ul>
            </template>
          </li>
        </ul>

      </div>
    </aside>)
}

export default Sidebar;