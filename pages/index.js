

import { useEffect, useState } from 'react';
import Carousel from '../components/Carousel'
import styles from '../styles/Home.module.css'


export default function Home() {

  const [bilgiler,setBilgiler]=useState({slaytlar:[],iletisim:[],urunler:[],sayfalar:[]});
  
  useEffect(()=>{
    fetch('http://admin.afg-react-web.com.tr/main/pages', {
      method: 'GET',
      credentials: 'include', // Çerezlerin gönderilmesini sağlar
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res=>res.json()).then(data=>setBilgiler({slaytlar:[data.sliders],iletisim:[data.contacts],urunler:[data.products],sayfalar:[data.pages]})).catch(err=>console.log(err))
  },[])

  return (
    <div className={styles.container} style={{}}>
     
<Carousel data={bilgiler.slaytlar[0]?bilgiler.slaytlar[0]:[]} per={1} slug="slides"/>
     <div className={styles.container} style={{marginTop:50}}>
     <h1 className={styles.title}>{bilgiler.sayfalar[0]?bilgiler.sayfalar[0].title:""}</h1>
     <p>{bilgiler.sayfalar[0]?bilgiler.sayfalar[0].description:""}</p>
     </div>
     <div className={styles.container} style={{marginTop:50}}>
     <h1 className={styles.title}>Ürünler</h1>
     <Carousel data={bilgiler.urunler[0]?bilgiler.urunler[0]:[]} per={1} slug="products"/>
     
    </div>
     
    </div>
  )
}
