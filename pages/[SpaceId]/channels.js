/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../../components/Layout";
import getAllMembers from "../api/getAllMembers";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SpecificMembers from "../api/getAllSpaceMembers";

function ChannelCard({name = "Messenger", active = false, logo = "/static/robot.svg", svg}) {

    const [AllPostsData, SetAllPostsData] = useState('')
    const router = useRouter()
    let SpaceId = router.query.SpaceId
    
    useEffect(() => {
        if (!AllPostsData) { SetAllPostsData(SpecificMembers(SpaceId))}
        if (AllPostsData) {
            console.log(AllPostsData)
            console.log(SpaceId)

        }
    })
    // eslint-disable-next-line no-unused-vars
    const Allposts = getAllMembers().then(res => {if(!AllPostsData) {SetAllPostsData(res)}})
    console.log(AllPostsData)

    return (
        <div className="flex flex-col items-center bg-white px-5 py-8 mr-8 mb-8 w-48 shadow-sm hover:shadow-md rounded">

            {svg && svg}
            {!svg && <img className="object-cover h-24 w-24" alt="Channel logo" src={logo}/>}

            <p className="font-medium tracking-normal mt-8 ">
                {name}
            </p>
            <div className="mt-6">
                <input type="checkbox" checked={active}/>
            </div>
            <p className="mt-1">Bot Responses</p>
        </div>
    )
}

const Channels = () => {
    return (
        <Layout>
            <div>
                <h2 className="text-2xl text-orange-600 font-semibold leading-loose tracking-wider mb-5">
                    Manage Engagement Channels
                </h2>

                <div className="flex items-center justify-start flex-wrap">

                    <ChannelCard name="Messenger" active={true} logo="/static/facebook-squared.svg"
                                 svg={<svg className="fill-current text-blue-800 w-24 h-24"
                                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 1000">
                                     <path
                                         d="M752 80c29.333 0 54.667 10.333 76 31s32 45.667 32 75v646c0 29.333-10.667 54.667-32 76s-46.667 32-76 32H590V630h114V496H590v-70c0-20 9.333-30 28-30h86V244h-96c-49.333 0-90.667 18-124 54s-50 80-50 132v66H330v134h104v310H108c-29.333 0-54.667-10.667-76-32S0 861.333 0 832V186c0-29.333 10.667-54.333 32-75s46.667-31 76-31h644"/>
                                 </svg>}/>

                    <ChannelCard name="WhatsApp" active={true} logo="/static/whatsapp-logo.svg" svg={<svg
                        className="fill-current text-green-500 w-24 h-24" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30.667 30.667">
                        <path
                            d="M30.667 14.939c0 8.25-6.74 14.938-15.056 14.938a15.1 15.1 0 01-7.276-1.857L0 30.667l2.717-8.017a14.787 14.787 0 01-2.159-7.712C.559 6.688 7.297 0 15.613 0c8.315.002 15.054 6.689 15.054 14.939zM15.61 2.382c-6.979 0-12.656 5.634-12.656 12.56 0 2.748.896 5.292 2.411 7.362l-1.58 4.663 4.862-1.545c2 1.312 4.393 2.076 6.963 2.076 6.979 0 12.658-5.633 12.658-12.559C28.27 8.016 22.59 2.382 15.61 2.382zm7.604 15.998c-.094-.151-.34-.243-.708-.427-.367-.184-2.184-1.069-2.521-1.189-.34-.123-.586-.185-.832.182-.243.367-.951 1.191-1.168 1.437-.215.245-.43.276-.799.095-.369-.186-1.559-.57-2.969-1.817-1.097-.972-1.838-2.169-2.052-2.536-.217-.366-.022-.564.161-.746.165-.165.369-.428.554-.643.185-.213.246-.364.369-.609.121-.245.06-.458-.031-.643-.092-.184-.829-1.984-1.138-2.717-.307-.732-.614-.611-.83-.611-.215 0-.461-.03-.707-.03s-.646.089-.983.456-1.291 1.252-1.291 3.054c0 1.804 1.321 3.543 1.506 3.787.186.243 2.554 4.062 6.305 5.528 3.753 1.465 3.753.976 4.429.914.678-.062 2.184-.885 2.49-1.739.308-.858.308-1.593.215-1.746z"/>
                    </svg>}/>

                    <ChannelCard name="Twitter" active={true} logo="/static/twitter.svg"
                                 svg={<svg className="fill-current text-blue-600 w-24 h-24"
                                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 1000">
                                     <path
                                         d="M920 214c-24 36-55.333 68.667-94 98v24c0 86.667-20 170-60 250S664 733.667 580 789s-180.667 83-290 83c-106.667 0-203.333-28-290-84 9.333 1.333 24.667 2 46 2 88 0 166-26.667 234-80-41.333-1.333-78-14-110-38s-54-55.333-66-94c6.667 2.667 18 4 34 4 17.333 0 34-2 50-6-44-9.333-80-31.333-108-66s-42-74.667-42-120v-2c24 13.333 52 21.333 84 24-56-38.667-84-91.333-84-158 0-32 8.667-63.333 26-94 102.667 125.333 232.667 190.667 390 196-4-12-6-26-6-42 0-52 18.333-96.333 55-133s81.667-55 135-55c54.667 0 100 19.333 136 58 40-8 80-22.667 120-44-13.333 44-40.667 78.667-82 104 37.333-5.333 73.333-15.333 108-30"/>
                                 </svg>}/>

                    <ChannelCard name="E-mail" active={true} logo="/static/envelope.svg"
                                 svg={<svg className="fill-current text-red-500 w-24 h-24"
                                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                     <path
                                         d="M18 2a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/>
                                 </svg>}/>

                    <ChannelCard name="Web" active={true} logo="/static/globe.svg"
                                 svg={<svg className="fill-current text-orange-500 w-24 h-24"
                                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 1000">
                                     <path
                                         d="M480 20c133.333 0 246.667 47 340 141s140 207 140 339c0 133.333-46.667 246.667-140 340S613.333 980 480 980c-132 0-245-46.667-339-140S0 633.333 0 500c0-132 47-245 141-339S348 20 480 20m410 480c0-88-26-167.667-78-239S692.667 140 610 112c-12 16-17.333 26.667-16 32 2.667 25.333 8.667 42.333 18 51 9.333 8.667 19.333 11 30 7l32-12 20-2c14.667 16 14.667 31.667 0 47-14.667 15.333-29.667 34-45 56-15.333 22-15.667 47.667-1 77 22.667 42.667 54.667 64 96 64 18.667 1.333 33 13.333 43 36s15.667 44.667 17 66c6.667 53.333 2 100-14 140-14.667 29.333-10 54.667 14 76 57.333-74.667 86-158 86-250M424 96c-74.667 9.333-141 37.333-199 84S124.667 284.667 98 354c4 0 11.333.667 22 2s20 2.333 28 3c8 .667 16.667 2 26 4 9.333 2 17.333 4.667 24 8 6.667 3.333 10.667 7.667 12 13 2.667 8-2 23-14 45s-18 42.333-18 61c0 20 12.667 38.667 38 56s38 32.667 38 46c0 18.667 2.667 41.333 8 68s8 41.333 8 44c0 8 12 26 36 54s41.333 42 52 42c6.667 0 10.333-7.333 11-22 .667-14.667 0-32.667-2-54s-3-34.667-3-40c0-21.333 4.667-46 14-74 8-28 27.667-51.333 59-70s49.667-34 55-46c10.667-22.667 13.667-43 9-61s-10.333-32.333-17-43c-6.667-10.667-18-20-34-28s-29.667-13.667-41-17c-11.333-3.333-23.667-6.333-37-9-13.333-2.667-20.667-4-22-4-10.667-4-24.667-6.333-42-7-17.333-.667-29.333.333-36 3-6.667 2.667-15.667-1-27-11s-17-19.667-17-29c0-6.667 5-15.667 15-27s21.667-23.667 35-37c13.333-13.333 22.667-23.333 28-30 5.333-9.333 11-16.333 17-21 6-4.667 13.333-10 22-16s17.667-13 27-21c2.667-2.667 11-8.333 25-17s23-16.333 27-23m-72 794c44 13.333 86.667 20 128 20 85.333 0 160.667-22.667 226-68-17.333-29.333-56.667-40.667-118-34-16 1.333-37.667 7-65 17s-43 15.667-47 17c-49.333 10.667-74.667 16-76 16-8 1.333-16.667 6-26 14-9.333 8-16.667 14-22 18"/>
                                 </svg>}/>

                </div>
            </div>
        </Layout>

    );
};

export default Channels;
