import React from 'react'
import { Typography, List, ListItem, ListItemText,Divider } from '@material-ui/core'
import useStyles from './reviewStyles'

const Review =({checkoutToken})=>{
    const classes = useStyles()

    return(
       <>
           
           <List disablePadding style={{ marginTop: 80 }}> 
                {checkoutToken.live.line_items.map((product)=>(
                   <div>
                    <ListItem style={{ padding: '10px 0' }}   key={product.name}>
                        <ListItemText classes={{primary:classes.listitemtext,secondary :classes.listitemtextsecond}} primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                        <Typography className={classes.price}  variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                     
                    </ListItem>
                    <Divider />
                    </div>
                 
                ))}
                <ListItem style={{ padding: '10px 0', display:'inline-block' }}>
                    <ListItemText  classes={{primary:classes.listitemtext}}  primary="Total" />
                    <Typography  className={classes.subtotalvaluetextvariant} variant="subtitle1" >
                        {checkoutToken.live.subtotal.formatted_with_symbol}
                    </Typography>
                </ListItem>
            </List>
          
       </>
    )
    
}
export default Review