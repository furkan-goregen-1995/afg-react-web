
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';

export default function Iletisim() {

const [iletisim,setIletisim]=useState([]);

useEffect(()=>{
  fetch('http://admin.afg-react-web.com.tr/main/contacts', {
    method: 'GET',
    credentials: 'include', // Çerezlerin gönderilmesini sağlar
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res=>res.json()).then(data=>setIletisim(data.contacts)).catch(err=>console.log(err))
},[])


  return (
    <div className={styles.container}>
    
        <h1 className={styles.title} style={{marginTop:50}}>
            İletişim
        </h1>
        <Grid container sx={{my:3}}  spacing={2} columns={{ xs: 12, md: 12 }} >
        {iletisim.map(b=>(
          <Grid  item key={b.id} xs={6}>
              <Grid container >
              <Grid item xs={6} >
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                    <LocalPhoneIcon/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Telefon" secondary={b.phone_numbers} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <EmailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Email" secondary={b.emails} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <MapIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Adress" secondary={b.address} />
                </ListItem>
              </List>
                
              </Grid>
              <Grid item xs={6}>
              <iframe
              width="100%"
              height="100%"
              style={{border:0}}
              allowfullscreen
              src={b.google_maps}>
            </iframe>
             
              </Grid>
              </Grid>
         </Grid>
        ))}
        </Grid>
      
     

      
    </div>
  )
}

/*<Accordion key={b.id} >
<AccordionSummary
  expandIcon={<ArrowDownwardIcon />}
  aria-controls="panel1-content"
  id="panel1-header"
>
  <Typography component="span">{b.title}</Typography>
</AccordionSummary>

<AccordionDetails>
  <Typography>
    Telefon:{b.phone_numbers}<hr/>Adres:{b.address}<hr/>Email:{b.email}
  </Typography>
</AccordionDetails>
</Accordion>*/