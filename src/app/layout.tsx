import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className='flex h-16 bg-yellow-300 px-4'>
          <form action="/items" className='m-auto gap-3 flex max-w-screen-xl flex-1'>
            <Link href="/">HEHEXD</Link>
            <input type='text' name='search' className='h-8 flex-1 '></input>
            <button type='submit' className='h-8 bg-gray-300 px-4 py-1 text-slate-700'>BUSCAR</button>
          </form>
        </header>
        <main className='max-w-screen-lg m-auto p-4'>{children}</main>
      </body>
    </html>

  )
}
