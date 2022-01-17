import React from 'react'
import {Card,CardMedia,CardContent,Typography} from '@material-ui/core'
import useStyles from './productStyles'
import {Link} from 'react-router-dom'
const Product =({product})=>{
    const classes=useStyles()
  
    return(
        <Card className={classes.root} elevation={0}>
        <Link to={`product-view/${product.id}`} className={classes.link} >
            <CardMedia className={classes.media} image={product.image.url} title={product.name} />
            <CardContent className={classes.dios} ml={0} pl={0}>
                <div className={classes.cardContentInLine}>
                    <Typography  className={classes.name} variant="caption"  >
                        {product.name}
                    </Typography>
                    <Typography className={classes.description}  variant="caption" >
                    {product.variant_groups[0].options[0].name}
                    </Typography>
                </div>
               
                <div className={classes.cardContent}>
                    <Typography className={classes.price}  variant="caption" >
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
             
              
            </CardContent>
            </Link>
        </Card>
    )
}
export default Product