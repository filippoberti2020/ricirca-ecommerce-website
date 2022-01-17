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
   dividerSuperiore:{
    marginTop: 30,
    marginBottom: 0,
  },
  steplabeltext:{
    fontFamily: 'Noto Sans Display', 
  },
  backhomebutton:{
    display: 'inline',
    marginTop: '5%',
    marginLeft:-15,
    marginTop: 90,
    marginBottom: 40,
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
      backgroundColor: 'transparent',
      color: '#00000090',
    },
    [theme.breakpoints.down('xs')]:{
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]:{
      marginRight: '20px',
    },
  },
  backhomebuttonerror:{
    display: 'inline',
    marginTop: '5%',
    marginLeft:-15,
    marginTop: 150,
    marginBottom: 40,
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
      backgroundColor: 'transparent',
      color: '#00000090',
    },
    [theme.breakpoints.down('xs')]:{
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]:{
      marginRight: '20px',
    },
  },
  divider:{
    marginTop: 30,
    marginBottom: 10,
  },
  thankmessagetext:{
    fontFamily: 'Noto Sans Display', 
    fontWeight: 700,
    color: 'black',
  },
  orderreftext:{
    fontFamily: 'Noto Sans Display', 
    fontWeight: 500,
    color: 'black',
  },
  infomessagetext:{
    fontFamily: 'Noto Sans Display', 
    fontWeight: 500,
    color: 'black',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  underline:{
    borderBottom: '2px solid black',
   },
   marginbottombutton:{
    marginTop: '90%',
    marginBottom: 40,
   },
   errormessagetext:{
    fontFamily: 'Noto Sans Display', 
    fontWeight: 700,
    color: 'black',
   },
   marginbottombuttonerror:{
    marginTop: '90%',
    marginBottom: 40,
   },
}));