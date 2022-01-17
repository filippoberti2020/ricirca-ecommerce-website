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
    marginBottom: 80,
  },
  textparagraph:{
    height: '100%',
    width: '100%',
   minHeight: '100%',
   marginBottom: 400,
  },
  titleicon:{
    paddingLeft: 10,
    fontFamily: 'Noto Sans Display', 
    fontWeight: 700,
    color: 'black',
  },
  inlineicontext:{
    display: 'inline',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  titlename:{
    fontFamily: 'Readex Pro', 
    fontWeight: 600,
  },
  socialicon:{
    alignItems: 'center',
    
  },
  mailto:{
    color:'#949392',
  },
  checkoutButton: {
    display: 'inline',
    marginTop: '5%',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
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
  privacydisclaimer:{
    marginTop:13,
    fontFamily: 'Noto Sans Display', 
    fontWeight: 700,
    color: 'black',
  },
  privacydisclaimerlink:{
    fontFamily: 'Noto Sans Display', 
    fontWeight: 700,
    color:'#949392',
  },
}));