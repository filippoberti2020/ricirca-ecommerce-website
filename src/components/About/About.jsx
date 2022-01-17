import React from 'react'
import { Container, Divider, Typography} from '@material-ui/core'
import useStyles from './aboutStyles'
import { RiAncientPavilionLine,RiUser2Line,RiMapPinTimeLine } from "react-icons/ri";

const About =()=>{
  
    const classes = useStyles();

    return(
        <Container >
          <div className={classes.container}>
            <div className={classes.toolbar}/>
            
            <div className={classes.inline}>
                <div>
                    <Typography className={classes.title} variant="h5">About</Typography>
                </div>
            </div>
        
        <Divider className={classes.dividerSuperiore}/>  
        
        <div className={classes.textparagraph}>
        <Typography  variant="h5" className={classes.titlename} color="inherit">
                        ricirca
                    </Typography>
            <div className={classes.inlineicontext}>
                <RiAncientPavilionLine color='#949392'  className={classes.socialicon} />
                <Typography className={classes.titleicon} variant="caption">Based in: Italy</Typography><br/>
            </div>
            <div className={classes.inlineicontext}>
                <RiUser2Line color='#949392'  className={classes.socialicon}/>
                <Typography className={classes.titleicon} variant="caption">Founder: Filippo Berti</Typography><br/>
            </div>
            <div className={classes.inlineicontext}>
                <RiMapPinTimeLine color='#949392'  className={classes.socialicon}/>
                <Typography className={classes.titleicon} variant="caption">Founded in: 2021</Typography><br/>
            </div>
            <br/><br/>
            <Typography className={classes.title} variant="caption">Ricirca is a Italian design firm founded in 2021 by Filippo Berti, that works on design projects internationally. The first office is situated in in the province of Venice. Ricirca is known for its simple and minimalist design with subtle influences from Japanese, and Scandinavian aesthetics. 
                The focus is to bring happiness and serenity to people through essential and minimal objects design, eliminating all the superfluous.
                Given the historical era and aware of the problems of modern societies, the goal is to study the products starting and keeping in mind sustainability and making it an integral part of the whole.
                Filippo Berti is not a designer but he loves to learn new things  and discover the world of design and architecture. 
                He loves trying and experimenting with new things, creating functional objects. 
            </Typography>
        </div>
        </div>
      </Container>
    )
    
}
export default About