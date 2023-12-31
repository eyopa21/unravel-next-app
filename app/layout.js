"use client";

import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Sidebar from '@/components/Sidebar'
import Provider from "@/components/DarkMode/Provider";
import { usePathname, useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
 
   

 
  const currentRoute = usePathname()

  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Provider>
        {currentRoute!=='/auth/login' &&  <Nav />}
       
       
      
         {currentRoute!=='/auth/login' &&    <Sidebar />}
        
          {children}
          </Provider>
      </body>
    </html>
  )
}
