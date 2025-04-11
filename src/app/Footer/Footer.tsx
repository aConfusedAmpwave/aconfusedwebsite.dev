import { useState } from "react";
import Link from "next/link";

import friendList from "@/public/friendInfo/friendList.json" assert {type: 'json'}
import { babelIncludeRegexes } from "next/dist/build/webpack-config";

function PageLink({name, path}: {name: string, path: string}) {
    return <h2 key={path} className="hover:text-peach" style={{display: "block"}}><Link href = {path}>{name}</Link></h2>
}

function SubLink({name, path}: {name: string, path: string}) {
    return <h2 key={path} className="text-sm hover:text-peach pl-2"><Link href = {path}>{name}</Link></h2>
}

function FriendTag({badge, link}: {badge: string, link: string}) {
    return <a className = "p-1" href = {link}><img src = {badge} height = {31} width = {88}/></a>
}

//Tabs for Home, About, Projects, and Contact with sublinks to categories in them. Friends list on the side with the 88x31 for each of them.
export default function Footer () {
    let tags: JSX.Element[] = [];

    for (let i = 0; i < friendList.Friends.length; i++) {
        tags[i] = FriendTag(friendList.Friends[i]);
    }

    const projectLinks = <>
        <SubLink name = {"Project 1"} path = {""}/>
        <SubLink name = {"Project 2"} path = {""}/>
        <SubLink name = {"Project 3"} path = {""}/>
    </>

    const aboutLinks = <>
        <SubLink name = {"Bio"} path = {""}/>
        <SubLink name = {"Resume"} path = {""}/>
    </>

    const contactLinks = <>
        <SubLink name = {"Bluesky"} path = {""}/>
        <SubLink name = {"Instagram"} path = {""}/>
        <SubLink name = {"Github"} path = {""}/>
    </>

    return <>

        <footer className = "bg-tshirt text-pearl pt-2">
            <div className = "flex flex-row justify-end">
                <div className = "flex flex-col content-end text-right pl-20 mr-5">
                    <PageLink name = {"Home"} path = {"/"}/>
                </div>
                <div className = "flex flex-col grow content-end text-right pl-20 mr-5">
                    <PageLink name = {"Projects"} path = {"/Projects"}/>
                    <div>
                        {projectLinks}
                    </div>
                </div>
                <div className = "flex flex-col grow content-end text-right pl-20 mr-5">
                    <PageLink name = {"About"} path = {"/About"}/>
                    <div>
                        {aboutLinks}
                    </div>
                </div>
                <div className = "flex flex-col grow content-end text-right pl-20 mr-5">
                    <PageLink name = {"Contact"} path = {"/Contact"}/>
                    <div>
                        {contactLinks}
                    </div>
                </div>
                <div className = "flex flex-col content-end text-center pl-20 mr-5">
                    <h2>Friends</h2>
                    <div className ="grid grid-cols-2">
                        {tags}
                    </div>
                </div>
            </div>

            <div className = "text-center flex flex-col pb-2">
                <h2 className = "text-sm hover:text-peach hover:underline"><Link href = "https://github.com/aConfusedAmpwave/aconfusedwebsite.dev">aConfusedAmpwave/aconfusedwebsite.dev</Link></h2>
            </div>
        </footer>
    </>
}