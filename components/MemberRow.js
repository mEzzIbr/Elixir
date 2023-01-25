/* eslint-disable no-unused-vars */
import React from 'react';

export default function MemberRow (props){

    return(

        <tr>
        <td>
       
        </td>
        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
            <img className="w-10 h-10 rounded-full" src={props.img} alt="Jese image"/>
            <div className="">
                <div className="text-base font-semibold">{props.name}</div>
                <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
            </div>  
        </th>
        <td className="px-6 py-4">
            مطور
        </td>
        <td className="px-6 py-4">
            <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> فعّال
            </div>
        </td>
        <td className="px-6 py-4">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">تعديل</a>
        </td>
    </tr>
    )

}