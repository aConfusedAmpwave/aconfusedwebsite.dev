import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import getLogo from "@/public/contactInfo/logoGetter"

import contactInfo from "@/public/contactInfo/contactList.json" assert {type: 'json'}
import { babelIncludeRegexes } from "next/dist/build/webpack-config";

function ContactTile ({service, username, logo, link}: {service: string, username: string, logo: string, link: string}) {
    let Logo = getLogo(logo)

    return <div className = "bg-tshirt hover:bg-peach p-4 m-2.5 border-solid border-2 rounded-xl border-tshirt">
        <Link href = {link}>
            <div className = "flex flex-cols-2">
                <h1 className = "text-3xl pr-2">{Logo}</h1>
                <div>
                    <h1 className ="text-xl font-bold">{service}</h1>
                    <h2>{username}</h2>
                </div>
            </div>
        </Link>
    </div>
}

//List of contact information including social media (excluding tumblr and reddit) and including email. logos for each type of contact on the left side
export default function Contact () {
    let tiles: JSX.Element[] = [];

    for(let i = 0; i < contactInfo.Contact.length; i++) {
        tiles[i] = ContactTile(contactInfo.Contact[i]);
    }

    return <section className = "text-pearl">
            <h2 className = "text-3xl font-bold py-4 content-center text-center">Ways to Contact Me</h2>
            <div className = "grid grid-cols-1 text-left pl-80 pr-80 mr-5 pb-4">
                {tiles}
            </div>
    </section>
}