//This header will be default shown on the top of every page in the site, same with the footer at the bottom

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

//Function to create links to the other pages on the site
function PageLink({name, path}: {name: string, path: string}) {
    return <h2 key={path} className="text-xl hover:text-peach"><Link href = {path}>{name}</Link></h2>
}

export default function Header () {

    const pageLinks = <>
        <PageLink name = {"Home"} path = {"/"}/>
        <PageLink name = {"Projects"} path = {"/Projects"}/>
        <PageLink name = {"About"} path = {"/About"}/>
        <PageLink name = {"Contact"} path = {"/Contact"}/>
        </>
    
    //Display the logo of the site in the left corner, followed by each page link (Home, Projects, About, Contact)
    return <>
        <header className = "bg-tshirt text-pearl flex flex-row space-x-4 space-y-3 pt-2 pb-2" >
            <Link href="/">
                <Image
                    src = "/Media Library/tempLogo.png"
                    alt = "Temporary Logo until logo completed"
                    width = {50}
                    height = {50}
                />
            </Link>

            <nav className = "flex flex-row space-x-4 ">
                {pageLinks}
            </nav>
        </header>
    </>
}