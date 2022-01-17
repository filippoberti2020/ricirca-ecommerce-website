import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  toolbar: theme.mixins.toolbar,
  inline:{
   justifyContent: 'space-between',
   display: 'flex',
   },
  title:{
   marginTop: '5%',
   fontFamily: 'Noto Sans Display', 
    fontWeight: 700,
    color: 'black',
    display: 'inline',
  },
  titleitems:{
    fontSize: 12,
    marginLeft: 35,
    marginTop: '5%',
    fontFamily: 'Noto Sans Display', 
    fontWeight: 500,
    color: 'black',
    display: 'inline',
    [theme.breakpoints.down('xs')]:{
      display: 'flex',
      marginLeft: 0,
    },
   },
   titlesubtotal:{
    
    marginRight: 35,
    fontSize: 12,
    textAlign: 'right',
    marginTop: '5%',
    fontFamily: 'Noto Sans Display', 
    fontWeight: 500,
    color: 'black',
    display: 'inline',
    [theme.breakpoints.down('xs')]:{
      display: 'flex',
      marginRight:0,
      marginTop:70,
      textAlign: 'right',
      alignItems: 'right',
    },
   },
   titlesubtotalvalue:{
    textAlign: 'right',
    marginTop: '5%',
    fontFamily: 'Noto Sans Display', 
    fontWeight: 700,
    color: 'black',
    display: 'inline',
   },
   titlesubtotalsymbol:{
    display: 'inline-block',
    paddingTop: 6,
      verticalAlign:'top',
      fontSize: 9,
      fontFamily: 'Noto Sans Display', 
      fontWeight: 900,
   },
   dividerSuperiore:{
    marginTop: 30,
    marginBottom: 80,
  },
   divider:{
     marginTop: 50,
     marginBottom: 40,
   },
   underline:{
    borderBottom: '2px solid black',
   },
   continueButton:{
    display: 'inline',
    marginTop: '5%',
    marginLeft:-15,
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
   link:{
    textDecoration: 'none',
   },
   cardDetails:{
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
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
  buttoninline:{
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  backtoshopping:{
    height: '100vh',  
  },
  emptycartmessage:{
  fontFamily: 'Noto Sans Display', 
  fontWeight: 400,
  color: '#949392',
  },
  buttontobottom:{
    marginLeft:-12, 
    marginBottom:20, 
    position: 'absolute',
    bottom: 0,
  },
  link: {
    textDecoration: 'none',
  },
}));