import { makeStyles, fade } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    flex:1,
    
   textAlign:'center',
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    textAlign:'center',
   
    textDecoration: 'none',
    fontFamily: 'Readex Pro', 
    fontWeight: 600,
  },
  menu: {
    color: 'black',
    borderRadius: '30px',
    marginTop: 38,
  },
  menuitem: {
    color: 'black',
    backgroundColor:'white',
    paddingTop: 0,
    fontFamily: 'Noto Sans Display', 
    fontWeight: 500,
    "&:hover": {
      color:"000000",
      fontWeight: 600,
    },
    
  },
  menuitem2: {
    color: 'black',
    backgroundColor:'white',
    paddingTop: 0,
    marginLeft:5,
    fontFamily: 'Noto Sans Display', 
    fontWeight: 500,
    "&:hover": {
      color:"000000",
      fontWeight: 600,
    },
    
  },
  link: {
    textDecoration: 'none',
  },
  tuz: {
    color: 'white',
    backgroundColor: 'black',
    
  },
  tuzzz: {
    width: 17,
    width: 20,
    padding: 4,
    
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  nodecoration:{
    textDecoration: 'none',
  
   },
}));