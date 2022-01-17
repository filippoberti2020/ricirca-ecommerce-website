import React,{useState, useEffect} from 'react'
import {Container, Divider, Step, StepLabel, Stepper,Typography,CircularProgress,Button} from '@material-ui/core'
import useStyles from './checkoutStyles'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import {commerce} from '../../../lib/commerce'
import {Link} from 'react-router-dom'


const steps=['Shipping address','Payment details']


const Checkout =( { cart, order,onCaptureCheckout,error })=>{
    const classes = useStyles();
    const [activeStep,setActiveStep]=useState(0)
    const [checkoutToken,setCheckoutToken]=useState(null)
    const [shippingData,setShippingData]=useState({})

    useEffect(()=>{
        const generateToken=async ()=>{
            try{ 
                const token= await commerce.checkout.generateToken(cart.id,{ type: 'cart'})
              
                setCheckoutToken(token)
            }catch(error){
                console.log(error)
            }
        }
        generateToken()
    }, [cart])

    const nextStep=()=>setActiveStep((prevActiveStep)=>prevActiveStep+1)
    const backStep=()=>setActiveStep((prevActiveStep)=>prevActiveStep-1)

    const next=(data)=>{
        setShippingData(data)
        nextStep()
    }

    let Confirmation=()=> order.customer ?(
        <>
        <div>
            <Typography  className={classes.thankmessagetext} variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}</Typography>
            <Divider  className={classes.divider} />
            <Typography className={classes.orderreftext} variant="subtitle2">Order ref: {order.customer_reference}</Typography>
            <Typography className={classes.infomessagetext} variant="caption">We've sent you a confermation email with all of the order details. We'll notify you when your order has shipped.</Typography>    
        </div>
        <div className={classes.marginbottombutton}>
            <Button component={Link} to="/" type="button" variant="contained" className={classes.backhomebutton} disableElevation="true" ><span className={classes.underline}>Back to Home</span></Button>
        </div>
        </>
    ):(
        <div  className={classes.spinner}>
            <CircularProgress/>
        </div>
    )

    if(error){
        <>
        <div>
              <Typography className={classes.errormessagetext} variant="h5">Error: {error}</Typography>
              <div className={classes.marginbottombuttonerror}>
                <Button component={Link} to="/" type="button" variant="contained" className={classes.backhomebuttonerror} disableElevation="true" ><span className={classes.underline}>Back to Home</span></Button>
              </div>
        </div>
        </>
    }

    const Form=()=>activeStep===0
        ? <AddressForm checkoutToken={checkoutToken} next={next}/>
        : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout} />


            return(
        <>
        <Container>
            <div className={classes.toolbar}  />
            <div className={classes.inline}>
                <div>
                    <Typography className={classes.title} variant="h5">Checkout</Typography>
                </div>
            </div>
          
            <Divider className={classes.dividerSuperiore}/>    
                <Stepper activeStep={activeStep} >
                    {steps.map((step) =>(
                        <Step key={step}>
                            <StepLabel className={classes.steplabeltext}>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep===steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Container>
        </>
    )
    
}
export default Checkout