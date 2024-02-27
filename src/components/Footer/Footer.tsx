import Link from "next/link";
import { AppWindow, Contact, Github, Home, Mail, Rss, Twitter } from 'lucide-react';
function Footer() {
    return (
        <div className="mb-12">
            <div className='px-24 py-2 gap-4 rounded-full border-red-600 flex backdrop-blur-3xl shadow-lg ring-1 ring-black/5 bg-white/10'>
        <Link href="/about" className=" px-2 py-2 rounded-full border-black border bg-black text-red-950 "><Home /></Link>
        <Link href="/blog" className=" px-2 py-2 rounded-full border-black border bg-black text-red-950"><Rss /></Link>
        <Link href="/contact" className=" px-2 py-2 rounded-full border-black border bg-black text-red-950"><Contact /></Link>
        <Link href="/projects" className=" px-2 py-2 rounded-full border-black border bg-black  text-red-950"><AppWindow /></Link>
        <Link href="/contact" className=" px-2 py-2 rounded-full border-black border bg-black text-red-950"><Twitter /></Link>
        <Link href="/contact" className=" px-2 py-2 rounded-full border-black border bg-black text-red-950"><Github /></Link>
        <Link href="/contact" className=" px-2 py-2 rounded-full border-black border bg-black text-red-950"><Mail /></Link>

            </div>
        </div>
    )
}

export default Footer