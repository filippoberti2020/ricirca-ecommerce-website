import React from 'react'
import { Container, Divider, Typography} from '@material-ui/core'
import useStyles from './contactStyles'

import { RiMailLine} from "react-icons/ri";

const Contact =()=>{
  
    const classes = useStyles();

    return(
        <Container>
            <div className={classes.toolbar}/>
            
            <div className={classes.inline}>
                <div>
                    <Typography className={classes.title} variant="h5">Contact</Typography> 
                </div> 
            </div>
  
        <Divider className={classes.dividerSuperiore}/>  
        <div className={classes.textparagraph}>
        <Typography  variant="h5" className={classes.titlename} color="inherit">
                        ricirca
                    </Typography>
            <div  className={classes.inlineicontext}>
                <RiMailLine color='#949392'  className={classes.socialicon}/>
                <Typography className={classes.titleicon} variant="caption">Email: <a className={classes.mailto} href="mailto:ricircadesignsupport@gmail.com">ricircadesignsupport@gmail.com</a></Typography>
            </div>
            <br/><br/>
            <Typography className={classes.title} variant="caption">For any proposal or request for collaboration and more, write to us and we will be happy to consider and discuss it.
            </Typography>
        </div>
       
        </Container>
    )
    
}
export default Contact