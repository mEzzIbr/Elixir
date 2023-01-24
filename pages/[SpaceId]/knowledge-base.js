/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import SpecificMembers from "../api/getAllSpaceMembers";
import MemberCard from "../../components/MemberCard";
import MemberRow from "../../components/MemberRow";

const Home = () => {
    const [membersInfo, SetMembersInfo] = useState(null)
    const router = useRouter()
    let SpaceId = router.query.SpaceId
    if (SpaceId) {
    if (!membersInfo) {
        console.log(SpaceId)
    SpecificMembers(SpaceId).then(data => {SetMembersInfo(data)})
   
    }
    }
    return (
        <Layout> 
            <div>
                <MemberCard members={membersInfo}/>
            {/* {membersInfo ? membersInfo.map(member => <MemberRow key={member.id} img={member.pic} />) : 'م'} */}
            </div>
        </Layout>

    );
};

export default Home;
