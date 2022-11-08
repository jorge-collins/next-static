import Head from 'next/head'
import { Navbar } from './ui'

export const Layout = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || 'App Base' }</title>
            <meta name='author' content='Jorge Collins' />
            <meta name='description' content='Skeleton for every App' />
        </Head>

        {/* Navbar */}
        <Navbar />

        <main style={{
            padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}
