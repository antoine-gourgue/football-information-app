import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Navbar from "@/app/compenents/Navbar";
import Sidebar from "@/app/compenents/Sidebar";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Football information',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <main className='px-2 md:px-16 md:py-2 text-textPrimary'>
            <Navbar />
            <section className='flex space-x-4'>
                <Sidebar />
                {children}
            </section>
        </main>

        </body>
        </html>
    )
}
