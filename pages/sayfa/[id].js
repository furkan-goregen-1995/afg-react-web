import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import { motion } from "framer-motion";
import Modal from '../../components/Modal';
import { Grid } from '@mui/material';


export default function SayfaDetay({id}) {

  const [sayfa,setSayfa]=useState({page:[],gallery:[]});
  const [isVisible,setIsVisible] = useState(false);
  const [selectedImage,setSelectedImage] = useState(null);

  const handleClick = () =>{
    setIsVisible(!isVisible);
  }
  
  
  useEffect(()=>{
    
    fetch('https://admin.afg-react-web.com.tr/main/get-page/'+id, {
      method: 'GET',
      credentials: 'include', // Çerezlerin gönderilmesini sağlar
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res=>res.json()).then(data=>setSayfa({page:data.page,gallery:data.gallery})).catch(err=>console.log(err))
  },[id])

  return (
    <div className={styles.container} style={{marginTop:50}}>
      <div><img style={{height:150,width:"100%",objectFit:"contain"}} src={`http://localhost:8000/pages/`+sayfa.page.image_path}/></div>
      <h1 className={styles.title}>{sayfa.page.title}</h1>
      <p>{sayfa.page.description}</p>
      <Grid container spacing={2}>
      {sayfa.gallery && sayfa.gallery.map((item) => (
          <Grid item xs={2} key={item.id} >
          <motion.div style={{marginTop:10}} className="img-wrap" layout whileHover={{opacity:1}} onClick={()=>setSelectedImage(`http://localhost:8000/photos/`+item.image_path)}>
            <motion.img style={{width:"100%",height:250,objectFit:"cover"}} initial={{opacity:0}} animate={{opacity:1}} src={`http://localhost:8000/photos/`+item.image_path} alt="yuklendi"/>
          </motion.div>
          </Grid>
       
      ))}
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/> }
      </Grid>
        

    </div>)
} 

export const getServerSideProps = (context) =>{
    const id = context.query.id;
    return {
      props:{
        id:id,
      }
    }
}



