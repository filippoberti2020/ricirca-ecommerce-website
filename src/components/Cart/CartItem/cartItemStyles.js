import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
 
  root: {
    maxWidth: '100%',
    borderRadius:0,
    marginTop: -15,
  },
  media: {
    height: '15%',
    width: '15%',
    paddingTop: '15%', // 16:9
    [theme.breakpoints.down('xs')]:{
      height: '100%',
    width: '100%',
    paddingTop: '66%', 
 
    },
  },
  inline: {
  display: 'inline',
    
  },
  cardContent: {
    
    display: 'flex',
    [theme.breakpoints.down('xs')]:{
      display: 'block',
    },
  },
  cardContent2: {
    width: '80%',
    marginTop: 0,
    [theme.breakpoints.down('xs')]:{
      display: 'block',
      marginTop: 15,
      width: '80%',
    },
  },
  divContent2: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]:{
      display: 'block',
      marginLeft: -15,
      justifyContent: 'start',
      width: '125%',
    },
  },
  name: {
    fontFamily: 'Noto Sans Display', 
    fontWeight: 500,
    color: 'black',
    display: 'inline',
    marginLeft: 35,
    
    [theme.breakpoints.down('md')]:{
      marginLeft: 35,
      display: 'flex',
    },
    [theme.breakpoints.down('xs')]:{
      display: 'flex',
      marginLeft: 0,
    },
  },
    titlesubtotalvalue:{
    marginTop: '5%',
    fontFamily: 'Noto Sans Display', 
    fontWeight: 500,
    color: 'black',
    display: 'inline-block',
    [theme.breakpoints.down('xs')]:{
      display: 'block',
      
    },
    [theme.breakpoints.down('md')]:{
      justifyContent: 'start',
      display: 'inline-block',
      marginTop: 2,
    },
   },
   titlesubtotalsymbol:{
    display: 'inline-block',
    paddingTop: 8,
    verticalAlign:'top',
    fontSize: 9,
    fontFamily: 'Noto Sans Display', 
    fontWeight: 900,
    [theme.breakpoints.down('xs')]:{
      display: 'block',
    },
    [theme.breakpoints.down('md')]:{
      justifyContent: 'start',
      display: 'inline-block',
    },
   }, 
   quantity:{
   
    fontFamily: 'Noto Sans Display', 
    fontWeight: 400,
    color: '#949392',
    display: 'inline-block',
    [theme.breakpoints.down('xs')]:{
      display: 'inline-block',
      
    },
   },
   flex:{
    [theme.breakpoints.down('xs')]:{
      display: 'flex',
    },
   },
   buttons:{

    display: 'inline',
    [theme.breakpoints.down('xs')]:{
      display: 'inline',
      maxWidth: 35, 
      minWidth: 35,
    },
    [theme.breakpoints.down('md')]:{
      maxWidth: 15, 
       minWidth: 15,
    },
   },
   cardActions:{
    display: 'inline',
    
    [theme.breakpoints.down('xs')]:{
      display: 'flex',
      justifyContent: 'start',
      marginLeft:-7,
    },
   },
   
   quantitytext:{
  
    fontFamily: 'Noto Sans Display', 
    fontWeight: 700,
    color: 'black',
    display: 'inline-block',
    [theme.breakpoints.down('xs')]:{
      display: 'inline-block',
    },
   },
   cardActions2:{
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 50,
    [theme.breakpoints.down('xs')]:{
      display: 'flex',
      marginTop: 0,
      marginRight: 0,
    },
   },
   width:{
  
    width: '100%',
    [theme.breakpoints.down('xs')]:{
      display: 'flex',
      justifyContent: 'space-between',
      width: '125%',
      marginLeft: -15,
    },
   },
   removebutton:{
  
    marginTop: 38,
    display: 'inline',
    justifyContent: 'end',
    
   
   },
   prova:{
    display: 'flex',
    justifyContent: 'end',
   },
   description:{
    marginTop: 38,
    marginLeft: 29,
    fontFamily: 'Noto Sans Display', 
    fontWeight: 500,
    color: 'black',
    display: 'inline',

    [theme.breakpoints.down('xs')]:{
      display: 'inline-block',
      marginTop: 38,
      marginLeft: -5,
    },
   },
   divider:{
    marginTop: 40,
    marginLeft: 40,
    [theme.breakpoints.down('xs')]:{
      display: 'none',
    },
   },
   divider2:{
   
    display: 'none',
    [theme.breakpoints.down('xs')]:{
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 0,
      display: 'flex',
    },
   },
   removeitembutton:{
    marginTop: 25,
    marginBottom: -20,
    [theme.breakpoints.down('xs')]:{
      display: 'inline-block',
      marginTop: 5,
      marginRight: -18,
    },
   },
}));