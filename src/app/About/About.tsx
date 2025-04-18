import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AboutMe from "@/public/aboutInfo/AboutMe.mdx"
import getLogo from "@/public/contactInfo/logoGetter"

function ResumeTile ({fileName, fileLink, fileLogo}: {fileName: string, fileLink: string, fileLogo: string}) {
    let Logo = getLogo(fileLogo)

    return <div className = "bg-tshirt hover:bg-peach p-4 m-2.5 border-solid border-2 rounded-xl border-tshirt">
        <Link href = {fileLink}>
            <div className = "flex flex-cols-2">
                <h1 className = "text-3xl pr-2">{Logo}</h1>
                <div>
                    <h1 className ="text-xl font-bold">{fileName}</h1>
                </div>
            </div>
        </Link>
    </div>
}


//Short bio about myself, link to my resume at the bottom.
export default function About () {
    const resumeButton = <>
        <ResumeTile fileName = "Resume" fileLink = "aleiaResume.pdf" fileLogo = "Resume"/>
    </>

    return <section className = "text-pearl">
            <h2 className = "text-3xl font-bold py-4 content-center text-center">About Me</h2>
            <div className = "grid grid-cols-1 pl-80 pr-80 mr-5 pb-4">
                <div className = "bg-tshirt p-4 m-2.5 border-solid border-2 rounded-xl border-tshirt text-3xl">
                    <div className = "float-left">
                        <Image
                            src = "/Media Library/aleiaHeadshotUpdated-792x792.jpg"
                            alt = "Headshot of Aleia Gerhardt"
                            width = {500}
                            height = {500}
                        />
                    </div>
                    <AboutMe className = "float-right"/>
                </div>
                <div className = "text-left">
                    {resumeButton}
                </div>
            </div>
    </section>
}