import React from 'react'
import { Container, Divider, Typography} from '@material-ui/core'
import useStyles from './privacyPolicyStyles'


const PrivacyPolicy =()=>{
  
    const classes = useStyles();

    return(
        <Container>
            <div className={classes.toolbar}/>
            
            <div className={classes.inline}>
            <div>
                <Typography className={classes.title} variant="h5">Privacy Policy</Typography>
            
            </div>
        </div>
        
        <Divider className={classes.dividerSuperiore}/>  

   

      </Container>
    )
    
}
export default PrivacyPolicy