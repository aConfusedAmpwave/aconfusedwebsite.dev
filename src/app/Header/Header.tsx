//This header will be default shown on the top of every page in the site, same with the footer at the bottom

import { useState } from "react"

//Function to create links to the other pages on the site
function PageLink({name, path}: {name: string, path: string}) {
    return <h2><link href = {path}>{name}</link></h2>
}

export default function Header () {

    const pageLinks = <>
        <PageLink name = {"Home"} path = {"/Home"}/>
        <PageLink name = {"Projects"} path = {"/Projects"}/>
        <PageLink name = {"About"} path = {"/About"}/>
        <PageLink name = {"Contact"} path = {"/Contact"}/>
        </>
    
    //Display the logo of the site in the left corner, followed by each page link (Home, Projects, About, Contact)
    return <>
        <header>
            <link>
                <img
                    src = "/public/Media Library/tempLogo.png"
                    alt = "Temporary Logo until logo completed"
                    width = {32}
                    height = {32}
                />
            </link>

            <div>
                <nav>
                    {pageLinks}
                </nav>
            </div>
        </header>
    </>
}