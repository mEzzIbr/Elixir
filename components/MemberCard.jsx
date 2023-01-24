/* eslint-disable no-unused-vars */
import React from 'react';
import MemberRow from './MemberRow';

export default function MemberCard (props){

    return(
        <div>
<h1 className='text-4xl mb-12'> منتسبي مساحتك </h1>
<table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-slate-500 border-t border-b border-slate-200">
                                        <tr>
                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                                <div className="flex items-center">
                                                    <label className="inline-flex">
                                                        <span className="sr-only">Select all</span>
                                                        اسم العضو
                                                    </label>
                                                </div>
                                            </th>
                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Counterparty</div>
                                            </th>
                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Payment Date</div>
                                            </th>
                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Status</div>
                                            </th>
                                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                <div className="font-semibold text-right">Amount</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-slate-200 border-b border-slate-200">
                                    {props.members ? props.members.map(member => <MemberRow key={member.id} img={member.pic} name={member.name}/>) : 's' }
                                     
                                      
                                    </tbody>
                                </table>
                                </div>

    )

}