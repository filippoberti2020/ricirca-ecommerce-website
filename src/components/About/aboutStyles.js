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
  container:{
   
  },
  inlineicontext:{
    display: 'inline',
  },
  titleicon:{
    paddingLeft: 10,
    marginBottom: 12,
    fontFamily: 'Noto Sans Display', 
    fontWeight: 700,
    color: 'black',
  },
  titlename:{
    fontFamily: 'Readex Pro', 
    fontWeight: 600,
  }

  
}));