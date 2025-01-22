import Navbar from "./Navbar";
import Head from 'next/head'


export default function Layout({children}) {
  return (
    <div>
        <Head>
          <title>AFG React Laravel Web App</title>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
        </Head>
        <Navbar/>
        {children}
    </div>
  )
}
