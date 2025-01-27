import * as React from 'react';
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { Grid, Paper, styled } from '@mui/material';


export default function Detay({id}) {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  const [urun,setUrun]=useState([]);
  
  useEffect(()=>{
    fetch('https://admin.afg-react-web.com.tr/main/get-product/'+id, {
      method: 'GET',
      credentials: 'include', // Çerezlerin gönderilmesini sağlar
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res=>res.json()).then(data=>setUrun(data)).catch(err=>console.log(err))
  },[id])
  
console.log(urun);
  return (
    <div className={styles.container} style={{marginTop:50}}>
      <Grid container>
        <Grid item xs={6}>
        <Item><img style={{width:"100%", height:400,objectFit:"contain"}} src={`https://admin.afg-react-web.com.tr/products/`+urun.image_path}/></Item>
        </Grid>
        <Grid item xs={6}>
          <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader >
                
              </ListSubheader>
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <QrCode2Icon />
              </ListItemIcon>
              <ListItemText primary="Ürün Kodu" secondary={urun.product_code} />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <PrecisionManufacturingIcon />
              </ListItemIcon>
              <ListItemText primary="Ürün Adı" secondary={urun.title} />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <SettingsApplicationsIcon />
              </ListItemIcon>
              <ListItemText primary="Ürün Özellikleri" secondary={urun.description} />
            
            </ListItemButton>
            
          </List>
        </Grid>
      </Grid>
    </div>
  )
}

export const getServerSideProps = (context) =>{
    const id = context.query.id;
    return {
      props:{
        id:id,
      }
    }
}
