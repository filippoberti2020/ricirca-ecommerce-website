import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
  productContainer: theme.mixins.toolbar,
  content:{
    flexGrow: 1,
    backgroundColor: 'white',
    
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down("sm")]:{
        display: 'flex',
        justifyContent: 'center',
     
        alignItems: 'center',
        
        flexDirection: 'column',
    },
  },
  content2:{
    [theme.breakpoints.down("sm")]:{
        marginLeft:0,
        order: 2,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
   marginLeft:-175,
  },
  contenticon:{
    [theme.breakpoints.down("sm")]:{
        order: 1,
        
    },
  
  },
  contentcopyright:{
    [theme.breakpoints.down("sm")]:{
        marginTop: 10,
        order: 3,
    },
  
  },
  shoptitle:{
    marginTop: 9,
    marginLeft: 20,
    fontFamily: 'Noto Sans Display', 
    fontWeight: 600,
    color: '#8a8a8a',
    display: 'inline-block',
    alignItems: 'center',
    textDecoration: 'none',
    [theme.breakpoints.down("sm")]:{
        display: 'block',
        marginLeft: 0,
        textAlign: 'center', 
       
    },
  },
  copyrighttitle:{
    marginTop: 9,
   
    fontFamily: 'Noto Sans Display', 
    fontWeight: 400,
    color: '#8a8a8a',
    display: 'inline-block',
    [theme.breakpoints.down("sm")]:{
        display: 'block',
        marginLeft: 0,
        textAlign: 'center', 
        display: 'flex',
        order: 2,
    },
  },
  socialicon:{
    marginTop: 9,
    display: 'inline-block',
    [theme.breakpoints.down("sm")]:{
        display: 'flex',
        order: 1,
    },
    
  },
  
}));