import React from 'react'
import {TextField, Grid} from '@material-ui/core'
import {useFormContext, Controller} from 'react-hook-form'
import useStyles from './customTextFieldStyles.js'

const FormInput =({ name, label})=>{
    const {control} = useFormContext()
    const classes = useStyles();

    
    



    return(
        <Grid item xs={12} sm={12}>
            <Controller 
               render={({ field }) => <TextField  InputProps={{
        className: classes.input,
        disableUnderline: true,
      }} 
      
      labelprops={{
        className: classes.label
      }}
    type="email"
      fullWidth variant="filled" className={classes.textfield} {...field} label={label} required />}
				control={control}
				fullWidth
        defaultValue=""
				name={name}
        label={label}
        required
            />
        </Grid>
    )
    
}
export default FormInput