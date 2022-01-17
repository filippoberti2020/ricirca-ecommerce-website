import React from 'react'
import { Container, Divider, Typography} from '@material-ui/core'
import useStyles from './faqStyles'

const Faq =()=>{
  
    const classes = useStyles();

    return(
        <Container >
          <div className={classes.container}>
            <div className={classes.toolbar}/>
            
            <div className={classes.inline}>
                <div>
                    <Typography className={classes.title} variant="h5">Frequently Asked Question</Typography>
                </div>
            </div>
        
        <Divider className={classes.dividerSuperiore}/>  
        
        <div className={classes.textparagraph}>
        <Typography className={classes.title} gutterBottom  variant="body2">SHIPPING</Typography>
        <br/>
        <Typography paragraph className={classes.title} variant="caption">At the moment we ship only in Italy. 
            We are working on adding worldwide shipping as well. <br/>
            We use TNT and Poste Italiane tracked shipments. <br/>
            Shipping Cost is calculated based on the total weight of the item you are purchasing and the area you are delivering to.
        </Typography>
        <br/>
        <br/>
        <br/>
        <Typography className={classes.titlebold} gutterBottom  variant="body2">PAYMENT</Typography>
        <br/>
        <Typography paragraph className={classes.title} variant="caption">We currently offer the following payment method in American DOLLAR and Europe EURO for your convenience: <br/>
            -Credit Card <br/>
            We are working to add paypal as well.     
        </Typography>
        <br/>
        <br/>
        <br/>
        <Typography className={classes.titlebold} gutterBottom  variant="body2">INTERNATIONAL RETURNS & EXCHANGE POLICY</Typography>
        <br/>
        <Typography paragraph className={classes.title} variant="caption">We DO NOT accept returns and exchanges for International order. <br/>     
        </Typography>
        <br/>
        <br/>
        <br/>
        <Typography className={classes.titlebold} gutterBottom  variant="body2">CUSTOMS, DUTIES & TAXES</Typography>
        <br/>
        <Typography paragraph className={classes.title} variant="caption">All duties and charges must be paid by the recipient of the parcel, nendohouse is not responsible for any customs fees. <br/>     
        </Typography>
        <br/>
        <br/>
        <br/>
        <Typography className={classes.titlebold} gutterBottom  variant="body2">INQUIRIES</Typography>
        <br/>
        <Typography paragraph className={classes.title} variant="caption">For any questions or problems please do not hesitate to contact us <a href="/help" className={classes.link}><span>here</span></a>. <br/>  
            We will respond in turn to each support request.<br/>   
            Thank you for your understanding. <br/>     
        </Typography>
        </div>
        </div>
      </Container>
    )
    
}
export default Faq