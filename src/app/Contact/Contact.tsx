import { useState } from "react";

function ContactTile ({typeName, imagePath, imageAlt, platformUsername}: {typeName: string, imagePath: string, imageAlt: string, platformUsername: string}) {
    return <div>
        <img
        src = {imagePath}
        alt = {imageAlt}
        width = {32}
        height = {32}
        />
        <h2>{typeName}</h2>
        <h3>{platformUsername}</h3>
    </div>
}

//List of contact information including social media (excluding tumblr and reddit) and including email. logos for each type of contact on the left side
export default function Contact () {
    const contactTiles = <>
        <ContactTile typeName = {"Twitter"} imagePath = {"/public/Media Library/"} imageAlt = {"Minimalistic Twitter Logo"} platformUsername = {"aConfusedAmp"}/>
        <ContactTile typeName = {"Instagram"} imagePath = {"/public/Media Library/"} imageAlt = {"Minimalistic Instagram Logo"} platformUsername = {"aConfusedAmp"}/>
        <ContactTile typeName = {"Discord"} imagePath = {"/public/Media Library/"} imageAlt = {"Minimalistic Discord Logo"} platformUsername = {"aConfusedAmp"}/>
        <ContactTile typeName = {"Facebook"} imagePath = {"/public/Media Library/"} imageAlt = {"Minimalistic Facebook Logo"} platformUsername = {"Aleia Gerhardt"}/>
        <ContactTile typeName = {"Bluesky"} imagePath = {"/public/Media Library/"} imageAlt = {"Minimalistic Bluesky Logo"} platformUsername = {"aConfusedAmp"}/>
        <ContactTile typeName = {"Github"} imagePath = {"/public/Media Library/"} imageAlt = {"Minimalistic Github Logo"} platformUsername = {"aConfusedAmpwave"}/>
        <ContactTile typeName = {"Email"} imagePath = {"/public/Media Library/"} imageAlt = {"Minimalistic G-Mail Logo"} platformUsername = {"aleiatgerhardt@gmail.com"}/>
    </>

    return <>
    </>
}