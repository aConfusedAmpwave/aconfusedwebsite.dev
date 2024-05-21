import { Metadata } from 'next'
import About from './About'

export const metadata: Metadata = {
    title: 'About',
}  

export default function Page() {
    return <About/>
}