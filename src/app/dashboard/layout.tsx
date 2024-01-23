import type { Metadata } from 'next'
import { ReactNode } from 'react'
import '@/app/globals.css'
import Image from 'next/image'


export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function DashBoardLayout({ children, }: { children: ReactNode }) {
  return (
        <div className="h-screen flex flex-col text-zinc-50"> 
          <div className="flex flex-1 h-screen">
            <aside className="w-64 bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-900 p-6">
              <nav className="flex flex-col space-y-2 gap-2 sticky top-0 p-2">

                <div className="flex items-center gap-2">
                  <Image src="/assets/layout-dashboard.svg" width={20} height={20} alt="d" className="flex-shrink-0"/>          
                  <a href="/dashboard" >Dashboard</a>
                </div>

                <div className="flex items-center gap-2">
                  <Image src="/assets/cog.svg" width={20} height={20} alt="d" className="flex-shrink-0"/>          
                  <a href="/dashboard" >Equipamentos</a>
                </div>

                <div className="flex items-center gap-2">
                  <Image src="/assets/align-left.svg" width={20} height={20} alt="d" className="flex-shrink-0"/>          
                  <a href="/dashboard" >Ordens de serviço</a>                          
                </div>

              </nav>
            </aside>
            <main className="flex-1 p-6 bg-zinc-700">{children}</main>
          </div>
          <footer className="p-5 bg-zinc-600">footer</footer>
        </div>       
  )
}
