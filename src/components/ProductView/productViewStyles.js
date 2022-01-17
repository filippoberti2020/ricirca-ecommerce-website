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
  name: {
    fontFamily: 'Noto Sans Display', 
    fontWeight: 600,
    marginTop: 45,
    color: 'black',
  },
  itemcontainer: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'start',
    [theme.breakpoints.down("sm")]:{
      display: 'flex',
      justifyContent: 'center',
   
      alignItems: 'center',
      
      flexDirection: 'column',
  },
  },
  imageleft: {
  
    [theme.breakpoints.down("sm")]:{
      width: '88%',
      height: 'auto',
  },
  },
  price: {
    fontFamily: 'Noto Sans Display', 
    fontWeight: 500,
    color: 'black',
    fontSize: 18,
  },
  description: {
    marginTop: 20,
    fontFamily: 'Noto Sans Display', 
    fontWeight: 500,
    color: '#404040',
    fontSize: 13,
  },
  custombutton: {
    display: 'block',
    marginTop: 80,
    fontFamily: 'Noto Sans Display', 
    fontWeight: 400,
    color: 'white',
    backgroundColor: 'black',
    paddingLeft: 45,
    paddingRight: 45,
    textTransform: 'none',
    borderRadius: 2,
    "&:hover": {
      background: "#00000090"
    },
  },
  itemproductcontainer: {
   marginLeft: 100,
   [theme.breakpoints.down("sm")]:{
    width: '87%',
    marginLeft: 0,
    },
  },
  pricemargin:{
    marginTop: 40,
    [theme.breakpoints.down("sm")]:{
      marginTop: 10,
      },
  },
  descriptionmargin:{
    marginTop: 40,
    [theme.breakpoints.down("sm")]:{
      marginTop: 10,
      },
  },
  underline:{
    borderBottom: '2px solid black',
   
   },
   continueButton:{
    display: 'block',
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
    marginLeft: -15,
    marginTop: 20,
    marginBottom: 40,
    "&:hover": {
      color: "#00000090",
      backgroundColor: 'transparent',
    },
   },
}));