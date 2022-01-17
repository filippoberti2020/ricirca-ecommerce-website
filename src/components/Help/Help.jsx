import React from 'react'
import { Container, Grid, Divider, Typography, Button,FormControlLabel,Checkbox,black} from '@material-ui/core'
import useStyles from './helpStyles'
import FormInput from './CustomTextField'
import FormInputFull from './CustomTextField2'
import FormInputFullArea from './CustomTextField3'
import FormInputPhone from './CustomTextField4'

import {useForm, FormProvider} from 'react-hook-form'

const Help =()=>{
  const methods=useForm()
  const classes = useStyles();
  function sendEmail(e){
    
  }


    return(
        <Container >
          <div className={classes.container}>
            <div className={classes.toolbar}/>
            
            <div className={classes.inline}>
                <div>
                    <Typography className={classes.title} variant="h5">Help</Typography>
                </div>
            </div>
        
        <Divider className={classes.dividerSuperiore}/>  
        
        <div className={classes.textparagraph}>
        <FormProvider {...methods}  >
                <form onSubmit={sendEmail} method="post">
                    <Grid container spacing={3} className={classes.marginTop}>
                        <FormInput name='firstName' label='First Name' />
                        <FormInput name='lastName' label='Last Name' />
                        <FormInputFull name='email' label='Email' />
                        <FormInputPhone name='phonenumber' label='Phone Number' />
                        <FormInput name='ordernumber' label='Order Number/Order reference' />   
                        <FormInputFullArea  name='description' label='Problem description' />
                        <Checkbox required   name='dataconsent' 
                        style ={{
                      color: "#000000",
                    }}
                      />
                        <Typography className={classes.privacydisclaimer} variant="caption">Checking this box indicates you understand and accept that the information you submit will be stored and viewed according to our <a className={classes.privacydisclaimerlink} href="/privacy-policy">Privacy Policy.</a>
                        <br />The information will only be used for customer service purposes.
                        </Typography>
                        <Button fullWidth className={classes.checkoutButton} disableElevation size="medium" type="submit" variant="contained">Send</Button>
                    </Grid>
                </form>
            </FormProvider>
        </div>
        </div>
      </Container>
    )
    
}
export default Help