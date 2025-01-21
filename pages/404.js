import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.back();
        },1000)
    },[])
    return (
    <div>
        <h1>Ooooops...</h1>
        <h2>Hata | Sayfa Bulunamadı.</h2>
        <Link href='/'>Anasayfa</Link>
      
    </div>
  )
}
