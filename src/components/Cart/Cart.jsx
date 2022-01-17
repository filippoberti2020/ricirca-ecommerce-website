import React from 'react'
import {Grid, Container, Divider, Typography, Button} from '@material-ui/core'
import useStyles from './cartStyles'
import CartItem from './CartItem/CartItem'
import {Link} from 'react-router-dom'

const Cart =({cart, handleUpdateCartQty, handleRemoveFromCart})=>{
    const classes = useStyles()
    const isEmpty= !cart.line_items?.length
    const EmpityCart=()=>(
        <>
   
        <div className={classes.inline}>
            <div>
                <Typography className={classes.title} variant="h5">Your Cart is empty</Typography>
            </div>
        </div>
        
        <Divider className={classes.divider}/>  
        <div className={classes.backtoshopping}>
            <Typography className={classes.emptycartmessage} variant="h6">You don't have any items in your cart.</Typography>
            <div className={classes.buttontobottom}>   
                <Button component={Link} to={`/`} className={classes.continueButton} disableElevation size="medium" type="button" variant="contained"><span className={classes.underline}>Start shopping</span></Button>
            </div>
        </div>
        </>
    )
    const FilledCart=()=>(
        <>

        <div className={classes.inline}>
            <div>
                <Typography className={classes.title} variant="h5">Your Cart</Typography>
                <Typography className={classes.titleitems} variant="caption">{cart.line_items?.length} Items</Typography>
            </div>
            <div>
                <Typography className={classes.titlesubtotal}  variant="h4">Subtotal</Typography>
                <Typography className={classes.titlesubtotalsymbol}  variant="caption">{cart.subtotal.formatted_with_symbol.charAt(0)}</Typography>
                <Typography className={classes.titlesubtotalvalue}  variant="h5">{cart.subtotal.formatted}</Typography>
            </div>
        </div>
        
        <Divider className={classes.dividerSuperiore}/>  
            <Grid container spacing={3}>
                {cart.line_items.map((item)=>(
                    <Grid item xs={12} sm={12} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cartDetails}>          
                <div className={classes.buttoninline}>
                    <Button component={Link} to={`/`}  className={classes.continueButton} disableElevation size="medium" type="button" variant="contained"><span className={classes.underline}>Continue shopping</span></Button>
                    <Button component={Link} to={`/checkout`}  className={classes.checkoutButton} disableElevation size="medium" type="button" variant="contained">Proceed to checkout</Button>
                </div>
            </div>
        </>
    )


    return(
        <Container>
            <div className={classes.toolbar}/>
            
             { isEmpty ? <EmpityCart /> : <FilledCart />}
        </Container>
    )
    
}
export default Cart