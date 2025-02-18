import { motion } from "framer-motion";

export default function Modal({selectedImage,setSelectedImage}) {
  
    const handleClick=(e)=>{
        if(e.target.classList.contains("backdrop")){
            setSelectedImage(null);
        }
    }
  
    return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="backdrop" onClick={handleClick}>
      <motion.img src={selectedImage} initial={{y:"-100vh"}} animate={{y:0}} />
    </motion.div>
  )
}
