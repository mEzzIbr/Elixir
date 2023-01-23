/* eslint-disable no-unused-vars */
import React from 'react';

export default function MemberRow (props){

    return(

<tr>
                                           
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/2">
                                                <div className="flex items-center">
                                                    <div className="w-9 h-9 shrink-0 mr-2 sm:mr-3">
                                                        <img className="w-9 h-9 rounded-full" src={props.img} width="36" height="36" alt="Transaction 01"/>
                                                    </div>
                                                    <div className="font-medium text-slate-800 mr-6">{props.name} </div>
                                                </div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-left">22/01/2022</div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="text-left">
                                                    <div className="text-xs inline-flex font-medium bg-slate-100 text-slate-500 rounded-full text-center px-2.5 py-1">Pending</div>
                                                </div>
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                                <div className="text-right text-slate-700 font-medium">-$1,299.22</div>
                                            </td>
                                        </tr>
    )

}