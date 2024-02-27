import Link from "next/link";
import { AppWindow, Camera, Contact, Github, Home, Mail, Music, Rss, Twitter } from 'lucide-react';
function Footer() {

    //TODO: Add animation, horizontal dividers, tooltips, and hover effects
    // TODO  bg credits: Photo by eberhard grossgasteiger: https://www.pexels.com/photo/white-and-red-house-surrounded-by-trees-at-night-1612351/
    //TODO: Screensaver animation between backgrounds
    //TODO: Detect right click and hide/show, drag and drop elements to save items on dock just like mac    
    return (
        <div className="mb-12">
            <div className='px-3 py-2 gap-4 rounded-2xl border-red-600 flex backdrop-blur-3xl shadow-lg ring-1 ring-black/5 bg-white/0.9'>
        <Link href="/about" className=" px-2 py-2 rounded-full border-black border bg-black text-red-950 "><Home /></Link>
        <Link href="/blog" className=" px-2 py-2 rounded-full border-black border bg-black text-red-950"><Rss /></Link>
        <Link href="/contact" className=" px-2 py-2 rounded-full border-black border bg-black text-red-950"><Contact /></Link>
        <Link href="/projects" className=" px-2 py-2 rounded-full border-black border bg-black  text-red-950"><AppWindow /></Link>
        <Link href="/contact" className=" px-2 py-2 rounded-full border-black border bg-black text-red-950"><Twitter /></Link>
        <Link href="/contact" className=" px-2 py-2 rounded-full border-black border bg-black text-red-950"><Github /></Link>
        <Link href="/contact" className=" px-2 py-2 rounded-full border-black border bg-black text-red-950"><Mail /></Link>
        <Link href="/contact" className=" px-2 py-2 rounded-full border-black border bg-black text-red-950"><Music /></Link>
        <Link href="/contact" className=" px-2 py-2 rounded-full border-black border bg-black text-red-950"><Camera /></Link>

            </div>
        </div>
    )
}

export default Footer