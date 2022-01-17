import React,{useState, useEffect} from 'react'
import {commerce} from '../../lib/commerce'
import {AppBar, Grid, Button, Toolbar, Badge,Typography, IconButton,MenuItem, Menu} from '@material-ui/core'
import useStyles from './productViewStyles'
import { Image } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const ProductView =({ addProduct })=>{
    

    const classes = useStyles();
    const[product,setProduct]=useState({})
    const fetchProduct=async (id)=>{
        const response = await commerce.products.retrieve(id)
        const {name,price,image,description,categories}=response
        setProduct({
            id,
            name,
            description,
            src: image.url,
            price: price.formatted_with_symbol,
            categorie: categories[0].slug
        })
        
    }

    useEffect(()=>{
        const id=window.location.pathname.split("/")
        fetchProduct(id[2])
    }, [])
    
    return(
        
        <main className={classes.content} >
        <div className={classes.productContainer}  />
        <div className={classes.itemcontainer}>
      
                <Image  className={classes.imageleft} htmlWidth="55%"  htmlHeight="55%"  src={product.src} alt={product.name}/>
           
            <div className={classes.itemproductcontainer}>
                <div> 
                <Typography variant="h4" className={classes.name}>{product.name}</Typography>
                </div> 
                <div className={classes.pricemargin}> 
                <Typography className={classes.price}  variant="caption" >
                        {product.price}
                </Typography>
                </div>
                <div className={classes.descriptionmargin}> 
                    <Typography className={classes.description} dangerouslySetInnerHTML={{__html:product.description}} variant="caption"  />
                </div> 
                <Button disableElevation size="medium"  className={classes.custombutton} onClick={()=> {addProduct(product.id, 1)}}>
                    Add to cart
                </Button>
                <Button component={Link} to={`/`}  className={classes.continueButton} disableElevation size="medium" type="button" variant="contained"><span className={classes.underline}>Continue shopping</span></Button>
            </div> 
        </div>   
        </main>  
    )
}
export default ProductView