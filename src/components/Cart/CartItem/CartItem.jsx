import React from 'react'
import { IconButton, Divider, Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core'
import useStyles from './cartItemStyles'
import { HiX} from "react-icons/hi"

const CartItem =({item, onUpdateCartQty, onRemoveFromCart})=>{
    const classes = useStyles();
    return(
        <Card className={classes.root} elevation={0}>
        <div className={classes.cardContent}>
            <CardMedia image={item.image.url}  title={item.name} className={classes.media} />
           
            <CardContent className={classes.cardContent2}>
                <div className={classes.divContent2}>
                    <div>
                        <Typography className={classes.name} variant="h5">{item.name}</Typography>
                    </div>
                    <div className={classes.flex} >
                       
                        <CardActions className={classes.cardActions}>
                            <Typography className={classes.quantity} variant="caption">Quantity</Typography>
                            <Button type="button" size="small"  className={classes.buttons} onClick={()=> onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                            <Typography variant="caption" className={classes.quantitytext}>{item.quantity}</Typography>
                            <Button type="button" size="small"  className={classes.buttons} onClick={()=> onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                        </CardActions>
                       
                    </div>
                    <div>
                        <Typography className={classes.titlesubtotalsymbol}  variant="caption">{item.line_total.formatted_with_symbol.charAt(0)}</Typography>
                        <Typography className={classes.titlesubtotalvalue}  variant="h5">{item.line_total.formatted}</Typography> 
                        </div>
                </div>
               
                <div  className={classes.width}>
                    <CardActions  className={classes.cardActions2}>  
                        <Typography className={classes.description} variant="caption">Description</Typography>
                        <IconButton aria-label="Remove item" color="inherit" className={classes.removeitembutton} onClick={()=> onRemoveFromCart(item.id)}>
                           <HiX />
                        </IconButton>          
                    </CardActions> 
                    <Divider className={classes.divider}/>  
                </div>
                
           </CardContent>
           <Divider className={classes.divider2}/>  
          
           
        </div>
       
        </Card>
    )
    
}
export default CartItem