import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function ContactTile ({typeName, imagePath, imageAlt, platformUsername, mediaLink}: {typeName: string, imagePath: string, imageAlt: string, platformUsername: string, mediaLink: string}) {
    return <div>
        <Link href = {mediaLink}>
        <Image
        src = {imagePath}
        alt = {imageAlt}
        width = {32}
        height = {32}
        />
        <h2>{typeName}</h2>
        <h3>{platformUsername}</h3>
        </Link>
    </div>
}

//List of contact information including social media (excluding tumblr and reddit) and including email. logos for each type of contact on the left side
export default function Contact () {
    const contactTiles = <>
        <ContactTile typeName = {"Twitter"} imagePath = {"/public/Media Library/"} imageAlt = {"Minimalistic Twitter Logo"} platformUsername = {"@aConfusedAmp"} mediaLink = {"https://twitter.com/aConfusedAmp"}/>
        <ContactTile typeName = {"Instagram"} imagePath = {"/public/Media Library/"} imageAlt = {"Minimalistic Instagram Logo"} platformUsername = {"@aConfusedAmpwave"} mediaLink = {"https://www.instagram.com/aconfusedampwave/"}/>
        <ContactTile typeName = {"Discord"} imagePath = {"/public/Media Library/"} imageAlt = {"Minimalistic Discord Logo"} platformUsername = {"aConfusedAmpwave"} mediaLink = {"https://discord.com/users/738305604665213048"}/>
        <ContactTile typeName = {"Facebook"} imagePath = {"/public/Media Library/"} imageAlt = {"Minimalistic Facebook Logo"} platformUsername = {"Aleia Gerhardt"} mediaLink = {"https://www.facebook.com/aConfusedAmpwave"}/>
        <ContactTile typeName = {"Bluesky"} imagePath = {"/public/Media Library/"} imageAlt = {"Minimalistic Bluesky Logo"} platformUsername = {"aConfusedAmp"} mediaLink = {"https://bsky.app/profile/aconfusedampwave.bsky.social"}/>
        <ContactTile typeName = {"Github"} imagePath = {"/public/Media Library/"} imageAlt = {"Minimalistic Github Logo"} platformUsername = {"aConfusedAmpwave"} mediaLink = {"https://github.com/aConfusedAmpwave"}/>
        <ContactTile typeName = {"Email"} imagePath = {"/public/Media Library/"} imageAlt = {"Minimalistic G-Mail Logo"} platformUsername = {"aleiatgerhardt@gmail.com"} mediaLink = {"mailto:aleiatgerhardt@gmail.com"}/>
    </>

    return <>
        <h2>Ways to Contact Me</h2>
        <div>
            <nav>
                {contactTiles}
            </nav>
        </div>
    </>
}