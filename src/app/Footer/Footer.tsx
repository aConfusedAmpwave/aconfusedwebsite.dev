import { useState } from "react";
import Link from "next/link";

function PageLink({name, path}: {name: string, path: string}) {
    return <h2><Link href = {path}>{name}</Link></h2>
}

function SubLink({name, path}: {name: string, path: string}) {
    return <h2><Link href = {path}>{name}</Link></h2>
}

//Tabs for Home, About, Projects, and Contact with sublinks to categories in them. Friends list on the side with the 88x31 for each of them.
export default function Footer () {
    const footerLinks = <>
        <PageLink name = {"Home"} path = {"/"}/>
        
        <PageLink name = {"Projects"} path = {"/Projects"}/>
            <SubLink name = {"Project 1"} path = {""}/>
            <SubLink name = {"Project 2"} path = {""}/>
            <SubLink name = {"Project 3"} path = {""}/>

        <PageLink name = {"About"} path = {"/About"}/>
            <SubLink name = {"Bio"} path = {""}/>
            <SubLink name = {"Resume"} path = {""}/>

        <PageLink name = {"Contact"} path = {"/Contact"}/>
            <SubLink name = {"Twitter"} path = {""}/>
            <SubLink name = {"Instagram"} path = {""}/>
            <SubLink name = {"Github"} path = {""}/>
    </>
    return <>
        <footer>
            <div>
                <nav>
                    {footerLinks}
                </nav>
            </div>
        </footer>
    </>
}