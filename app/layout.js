import { Inter } from 'next/font/google'
import './globals.css'
import Layout from './components/Layout'

export const metadata = {
  title: 'Plan Route',
  description: 'Created by Nartec Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
      <Layout>
      {children}
      </Layout>
      </body>
    </html>
  )
}
