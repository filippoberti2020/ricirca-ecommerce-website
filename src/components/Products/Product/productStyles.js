import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(()=>({
    root: {
        maxWidth: '100%',
        borderRadius:0,
       
      },
      media: {
        height: 0,
       
        paddingTop: '56.25%', // 16:9
        
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
        
      },
      cardContent: {
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'space-between',
       
      }, cardContentInLine: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 30,
      },
      name: {
        fontFamily: 'Noto Sans Display', 
        fontWeight: 600,
        color: 'black',
        marginTop:10,
  
        display: 'inline-block'
      },
      description: {

        fontFamily: 'Noto Sans Display', 
        fontWeight: 400,
        color: '#949392',
       display: 'inline-block',
       paddingTop: 12,
      },
      price: {
        fontFamily: 'Noto Sans Display', 
        fontWeight: 600,
        color: '#403f3e',
       
      },
      dios: {
        margin: 0,
        padding: 0,
        color: 'black',
      },
      link: {
        textDecoration: 'none',
      },
}))