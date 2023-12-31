import React, { ReactNode } from 'react'
import { Metadata } from 'next'

import Header from '@/components/header'
import Footer from '@/components/footer'

interface Props {
  children: ReactNode,
}

export const metadata: Metadata = {
  title: 'English App',
  description: 'Generated by create next app',
}

const RootLayout = ({children}: Props) =>  {
  return (
    <html lang="ko">
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout