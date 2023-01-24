/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../../components/Layout";
import getSpaceInfo from "../api/getSpaceInfo";
import { useState } from "react";
import { useRouter } from "next/router";

const Home = () => {
    const router = useRouter()
    let currentspace = router.query.SpaceId
    const [spaceInfo, SetSpaceInfo] = useState([''])
  
    if (currentspace) {
        console.log(currentspace)
        getSpaceInfo(currentspace).then(data => {
            if (data.length == 0) {
            router.push('/404')
          } 
          if(data.length) { 
            SetSpaceInfo(data)
            router.push(`/${currentspace}/knowledge-base`)
            }}
        )
        // if (spaceInfo.length == 0) {
        //     router.push('/404')
        // }
        // if (spaceInfo.length >= 1) {
        //     // router.push(`/${currentspace}`)
        // }
        }
    return (
        <Layout>
            <h2>
                {spaceInfo[0].name}
            </h2>
        </Layout>

    );
}
;

export default Home;
