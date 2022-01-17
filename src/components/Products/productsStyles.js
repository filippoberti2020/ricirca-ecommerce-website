import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
  productContainer: theme.mixins.toolbar,
  content:{
    flexGrow: 1,
    backgroundColor: 'white',
    padding: theme.spacing(3),
  },
  root:{
    flexGrow: 1, 
  },
  titileline:{
    display: 'flex',
    justifyContent: 'start',
    marginTop: 90,
  },
  allproducttitle:{
    fontFamily: 'Noto Sans Display', 
        fontWeight: 600,
        color: 'black',
        display: 'inline-block'
  },
  shoptitle:{
    marginTop: 9,
    marginLeft: 20,
    fontFamily: 'Noto Sans Display', 
    fontWeight: 600,
    color: '#8a8a8a',
    display: 'inline-block'
  },
  grid:{
    marginTop: 19,
   
  },





  slider:{
    
    width: '100%',
    height:  '100%',
    
    overflow: 'hidden',
    
  },
  slides:{
    width: '500%',
    height:  '100%',
    display: 'flex',
   
  },
  slidesinput:{
    display: 'none',
   
  },
  slidefirst:{
   width: '100%',
   height:  '100%',
   
  },
  navigationmanual:{
    marginTop: 10,
   
    position: 'absolute',
    display:'flex',
    justifyContent: 'center',
    width: '100%',
   },
   manualbtn:{
    border: '2px solid #000000',
   
    padding: 2,
    borderRadius:10,
    cursor:'pointer',
    transition: '1s',

    
    "&:hover": {
      background: "#000000"
    },
    "&:not(:last-child)": {
      marginRight:15,
    }
   },
  
   navigationauto:{
    marginTop: 890,
    position: 'absolute',
    display:'flex',
    justifyContent: 'center',
    width: '100%',
   },
   autobtn1:{
    border: '2px solid #000000',
   
    padding: 2,
    borderRadius:10,
    cursor:'pointer',
    transition: '1s',

    
    "&:hover": {
      background: "#000000"
    },
    "&:not(:last-child)": {
      marginRight:15,
    }
   },
   verticalsectiontitle:{
    flexWrap:'wrap',
    flexDirection: 'column',
    display: 'flex',
    marginLeft: 60,
    marginTop: 60,
    [theme.breakpoints.down('sm')]: {
      display:'none',
    },
   },
   verticalsectiontitletextshop:{
    fontFamily: 'Noto Sans Display', 
    fontWeight: 600,
    color: 'black',
   },
   verticalsectiontitletext:{
    fontFamily: 'Noto Sans Display', 
    fontWeight: 600,
    color: '#8a8a8a',
    letterSpacing: -0.2,
    paddingTop:30,

    "&:hover": {
      color: "black",
      fontWeight: 800,
      transition: '0.2s',
    },
   },
   verticalsectiontitletextactive:{
    fontFamily: 'Noto Sans Display', 
    fontWeight: 800,
    letterSpacing: -0.2,
    color: 'black',
   },
   verticalline:{
    borderLeft: '2px solid #8a8a8a',
    marginTop: 40,
    marginBottom: 40,
    height: 50,
   },
   welcomehomesection:{
    flexWrap:'wrap',
    flexDirection: 'row',
    display: 'flex',
   },
   welcomehomesectionimage:{
    width: '80%',
    height: '100%',
    marginBottom: 150,
    [theme.breakpoints.down('md')]: {
      width: '70%',
      height: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
   },
   nodecoration:{
    textDecoration: 'none',
    paddingTop:30,
   },
   highlightproducts:{
    flexWrap:'wrap',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
   },
   highlightimage:{
    width: '48%',
    height: '100%',
   
   },
}));