import React,{useState,useEffect} from 'react'
import {InputLabel, Select, MenuItem,Container, Grid, FormControl, Button} from '@material-ui/core'
import {useForm, FormProvider} from 'react-hook-form'
import FormInput from './CustomTextField'
import useStyles from './addressFormStyles'
import {commerce} from '../../lib/commerce'
import {Link} from 'react-router-dom'

const AddressForm =({ checkoutToken, next})=>{

    const [shippingCountries, setShippingCountries]=useState([])
    const [shippingCountry, setShippingCounty]=useState('')
    const [shippingSubdivisions, setShippingSubdivisions]=useState([])
    const [shippingSubdivision, setShippingSubdivision]=useState('')
    const [shippingOptions, setShippingOptions]=useState([])
    const [shippingOption, setShippingOption]=useState('')

    const methods=useForm()

    const countries=  Object.entries(shippingCountries).map(([code,name]) => ({id: code, label: name}))
    const subdivisions=  Object.entries(shippingSubdivisions).map(([code,name]) => ({id: code, label: name}))
    const options= shippingOptions.map((sO) => ({id: sO.id, label:  `${sO.description} - (${sO.price.formatted_with_symbol})` }))
   
  

    const fetchShippingCountries= async (checkoutTokenId)=>{
        const {countries}=await commerce.services.localeListShippingCountries(checkoutTokenId)

        setShippingCountries(countries)
 
    }
    
    const fetchSubdivisions= async (countryCode)=>{
        const {subdivisions}= await commerce.services.localeListSubdivisions(countryCode)

        setShippingSubdivisions(subdivisions)
      

    }

    const fetchShippingOptions= async (checkoutTokenId, country, region = null)=>{
        const options= await commerce.checkout.getShippingOptions(checkoutTokenId,{country,region})

        setShippingOptions(options)
     
    }

    useEffect(()=>{
        fetchShippingCountries(checkoutToken.id)
    }, [])

    useEffect(()=>{
        if(shippingCountry) fetchSubdivisions(shippingCountry)
    }, [shippingCountry])

    useEffect(()=>{
        if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)
    }, [shippingSubdivision])

  
    const classes = useStyles();

    return(
        <>
            <Container className={classes.borders}>
            <FormProvider {...methods} >
                <form onSubmit={methods.handleSubmit((data)=> next({... data, shippingCountry, shippingSubdivision, shippingOption}) )}>
                    <Grid container spacing={3} className={classes.marginTop}>
                        <FormInput name='firstName' label='First Name' />
                        <FormInput name='lastName' label='Last Name' />
                        <FormInput name='email' label='Email' />
                        <FormInput name='address1' label='Street Address' />
                        <FormInput name='city' label='City' />
                        <FormInput name='zip' label='ZIP / Postal Code' />
                     <Grid item xs={12} sm={6}>
                     <FormControl variant="filled" fullWidth className={classes.input}  >
                         <InputLabel  className={classes.inputlabeltext}>Shipping Country</InputLabel>
                         <Select disableUnderline   className={classes.selecttext} value={shippingCountry} fullWidth onChange={(e) => setShippingCounty(e.target.value)}>
                            {countries.map((country)=>
                            (
                                <MenuItem className={classes.menuitemtext} key={country.id} value={country.id}>
                                    {country.label}
                                </MenuItem>
                            ))}
                            
                         </Select>
                         </FormControl>
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <FormControl variant="filled" fullWidth className={classes.input}  >
                         <InputLabel  className={classes.inputlabeltext}>Shipping Province</InputLabel>
                         <Select disableUnderline   className={classes.selecttext} value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                            {subdivisions.map((subdivision)=>
                            (
                                <MenuItem className={classes.menuitemtext} key={subdivision.id} value={subdivision.id}>
                                    {subdivision.label}
                                </MenuItem>
                            ))}
                            
                         </Select>
                         </FormControl>
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <FormControl variant="filled" fullWidth className={classes.input}  >
                         <InputLabel  className={classes.inputlabeltext}>Shipping Options</InputLabel>
                         <Select disableUnderline   className={classes.selecttext} value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                            {options.map((option)=>
                            (
                                <MenuItem className={classes.menuitemtext} key={option.id} value={option.id}>
                                    {option.label}
                                </MenuItem>
                            ))}
                            
                         </Select>
                         </FormControl>
                     </Grid>
                    </Grid>
                    <div  className={classes.inlinebuttons} >
                        <Button component={Link} to={`/cart`}  className={classes.continueButton} disableElevation size="medium" type="button" variant="contained"><span className={classes.underline}>Go back to cart</span></Button>
                        <Button  className={classes.checkoutButton} disableElevation size="medium" type="submit" variant="contained">Proceed to checkout</Button>
                    </div>
                </form>
            </FormProvider>
</Container>
        </>
    )
    
}
export default AddressForm