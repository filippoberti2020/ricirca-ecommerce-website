import React from 'react'
import {Grid,Typography} from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './productsStyles'
import { HashLink } from 'react-router-hash-link';

const Products =({products})=>{

  
      
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const classes = useStyles();
    return(
    <main className={classes.content} >
    
    <div className={classes.productContainer}  />
    <div className={classes.welcomehomesection}>
    <div className={classes.verticalsectiontitle} >
   
        <Typography  className={classes.verticalsectiontitletextshop} variant="h3"  >
                Shop
        </Typography> 
        <div className={classes.verticalline}>
        </div>
        <HashLink smooth  scroll={el => scrollWithOffset(el)} to="#writing"  className={classes.nodecoration}>
            <Typography className={classes.verticalsectiontitletextactive} variant="caption"  >
                Writing
            </Typography>
        </HashLink>
        <HashLink smooth  scroll={el => scrollWithOffset(el)} to="#deskaccessories" className={classes.nodecoration}>
            <Typography  className={classes.verticalsectiontitletext} variant="caption"  >
                    Desk accessories
            </Typography>
        </HashLink>
        <HashLink smooth  scroll={el => scrollWithOffset(el)} to="#forthehome" className={classes.nodecoration}>
            <Typography  className={classes.verticalsectiontitletext} variant="caption"  >
                    For the home
            </Typography>  
        </HashLink>
        <HashLink smooth  scroll={el => scrollWithOffset(el)} to="#allproducts" className={classes.nodecoration}>
            <Typography  className={classes.verticalsectiontitletext} variant="caption"  >
                    All products
            </Typography>   
        </HashLink>
        
                      
    </div>
  
        <img className={classes.welcomehomesectionimage} src="/images/home/home-site-image.png" alt="" />                
  
    </div>

    <div className={classes.highlightproducts}>
    
    <img className={classes.highlightimage} src="/images/home/home-site-image.png" alt="" />   
        <img className={classes.highlightimage} src="/images/home/home-site-image.png" alt="" />                
  
    </div>

    <div id="writing"> 
        <div className={classes.titileline} >
            <Typography  className={classes.allproducttitle} variant="h6"  >
                Writing
            </Typography>
            <Typography  className={classes.shoptitle} variant="caption"  >
                SHOP
            </Typography>
        </div>
            <Grid className={classes.grid} container justifyContent="center" spacing={8}>
                {products.map((product) =>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
    </div>
    <div id="deskaccessories"> 
        <div className={classes.titileline} >
            <Typography  className={classes.allproducttitle} variant="h6"  >
                Desk Accessories
            </Typography>
            <Typography  className={classes.shoptitle} variant="caption"  >
                SHOP
            </Typography>
        </div>
            <Grid className={classes.grid} container justifyContent="center" spacing={8}>
                {products.map((product) =>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
    </div>

    <div id="forthehome"> 
        <div className={classes.titileline} >
            <Typography  className={classes.allproducttitle} variant="h6"  >
                For the home
            </Typography>
            <Typography  className={classes.shoptitle} variant="caption"  >
                SHOP
            </Typography>
        </div>
            <Grid className={classes.grid} container justifyContent="center" spacing={8}>
                {products.map((product) =>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
    </div>

    <div id="allproducts"> 
        <div className={classes.titileline}>
            <Typography  className={classes.allproducttitle} variant="h6"  >
                All products
            </Typography>
            <Typography  className={classes.shoptitle} variant="caption"  >
                SHOP
            </Typography>
        </div>
            <Grid className={classes.grid} container justifyContent="center" spacing={8}>
                {products.map((product) =>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
    </div>
    
    </main>
    )
    
}
export default Products