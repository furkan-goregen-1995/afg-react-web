import Navbar from "./Navbar";
import Head from 'next/head'


export default function Layout({children}) {
  return (
    <div>
        <Head>
          <title>AFG React Laravel Web App</title>
        
        </Head>
        <Navbar/>
        {children}
    </div>
  )
}
