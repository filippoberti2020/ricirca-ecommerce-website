import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

   marginTop:{
        marginTop:80,
        marginBottom:90,
   },
   borders:{
   width: '99%',
    
   },
   inputlabeltext:{
      color: 'black',
      fontFamily: 'Noto Sans Display', 
      fontWeight: 500,
      
      "&.Mui-focused": {
         color: 'black',
      }
      
   },
   input: {
     textDecoration:'none',
     color: 'black',
      },
      
      label: {
          color: "black"
          },
   menuitemtext:{
      color: 'black',
      fontFamily: 'Noto Sans Display', 
      fontWeight: 500,
   },
   selecttext:{
      fontFamily: 'Noto Sans Display', 
      fontWeight: 500,
      color: 'black',
   },
   continueButton:{
      display: 'inline',
      marginTop: '5%',
      marginLeft:-20,
      marginTop: 80,
      fontFamily: 'Noto Sans Display', 
      fontWeight: 700,
      color: 'black',
      backgroundColor: 'transparent',
      repeat: 'no-repeat',
      border: 'none',
      cursor: 'pointer',
      letterSpacing: -0.2,
      overflow: 'hidden',
      outline: 'none',
      textTransform: 'none',
      minWidth: '150px',
      "&:hover": {
         color: "#00000090",
         backgroundColor: 'transparent',
       },
      [theme.breakpoints.down('xs')]:{
        marginBottom: '5px',
      },
      [theme.breakpoints.up('xs')]:{
        marginRight: '20px',
      },
     },
     continueButton2:{
      display: 'inline',
      marginTop: '5%',
      marginLeft:-20,
      marginTop: 80,
      fontFamily: 'Noto Sans Display', 
      fontWeight: 700,
      color: 'black',
      backgroundColor: 'transparent',
      repeat: 'no-repeat',
      border: 'none',
      cursor: 'pointer',
      letterSpacing: -0.2,
      overflow: 'hidden',
      outline: 'none',
      textTransform: 'none',
      minWidth: '50px',
      "&:hover": {
         color: "#00000090",
         backgroundColor: 'transparent',
       },
      [theme.breakpoints.down('xs')]:{
        marginBottom: '5px',
      },
      [theme.breakpoints.up('xs')]:{
        marginRight: '20px',
      },
     },
     checkoutButton: {
      display: 'inline',
      marginTop: '5%',
      marginTop: 80,
      fontFamily: 'Noto Sans Display', 
      fontWeight: 400,
      color: 'white',
      backgroundColor: 'black',
      paddingLeft: 20,
      paddingRight: 20,
      textTransform: 'none',
      borderRadius: 2,
      "&:hover": {
         backgroundColor: "#00000090",
        
       },
    },
    underline:{
      borderBottom: '2px solid black',
     },
     inlinebuttons:{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 60,
     },
     paymentmethodtext:{
      color: 'black',
      fontFamily: 'Noto Sans Display', 
      fontWeight: 500,
     },
     dividertotal:{
         marginTop: 40,
         marginBottom: 40,
     },
     cardelement:{
      color: 'black',
      fontFamily: 'Noto Sans Display', 
      fontWeight: 500,
     },
}));