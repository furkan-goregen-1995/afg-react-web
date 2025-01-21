import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


export default function Urunler() {

const [urunler,setUrunler]=useState([]);

useEffect(()=>{
  fetch('http://admin.afg-react-web.com.tr/main/products', {
    method: 'GET',
    credentials: 'include', // Çerezlerin gönderilmesini sağlar
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res=>res.json()).then(data=>setUrunler(data.products)).catch(err=>console.log(err))
},[])


  return (
    <div className={styles.container}>
     
        <h1 className={styles.title} style={{marginTop:50}}>
            Ürünler
        </h1>
        <Grid container spacing={1}>
        {urunler.map(b=>(
          <Grid  item  key={b.id} my={6} xs={6}>
          <Card  sx={{ maxWidth: 345 }}>
            <CardMedia style={{objectFit:'contain'}}
              component="img"
              alt="green iguana"
              height="250"
              image={`http://localhost:8000/products/`+b.image_path}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {b.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {b.description}
              </Typography>
            </CardContent>
            <CardActions>
              
              <Button href={`/urunler/`+b.id} size="small">Detay</Button>
            </CardActions>
          </Card> 
          </Grid>
        ))}
        </Grid>




      
    </div>
  )
}

