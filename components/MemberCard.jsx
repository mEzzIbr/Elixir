/* eslint-disable no-unused-vars */
import React from 'react';
import MemberRow from './MemberRow';

export default function MemberCard (props){

    return(



<table className="w-10/12 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky">
            <tr>
           
                <th  className="px-0 py-3 mr-8">
                    الاسم
                </th>
                <th  className="px-6 py-3">
                    المسمى الوظيفي
                </th>
                <th  className="px-6 py-3">
                    الحالة
                </th>
             
            </tr>
        </thead>
        <tbody>
                                             {props.members ? props.members.map(member => <MemberRow key={member.id} img={member.pic} name={member.name}/>) : 's' }

        </tbody>
    </table>



    )

}