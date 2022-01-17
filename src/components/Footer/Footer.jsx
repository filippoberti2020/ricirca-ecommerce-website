import React from 'react'
import {Container, Typography} from '@material-ui/core'
import { RiInstagramFill } from "react-icons/ri";
import useStyles from './footerStyles'
import {Link} from 'react-router-dom'

const Navbar =()=>{
    const classes = useStyles();
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return(
        <Container>
            <div  className={classes.content}>
                <div className={classes.contentcopyright}>
                    <Typography  className={classes.copyrighttitle} variant="caption"  >
                        &copy; {new Date().getFullYear()} Ricirca. All Rights Reserved.
                    </Typography>          
                </div>
                <div  className={classes.content2}>
                    <Typography onClick={scrollToTop} component={Link} to={`/faq`} className={classes.shoptitle} variant="caption"  >
                        FAQ
                    </Typography>
                    <Typography onClick={scrollToTop} component={Link} to={`/privacy-policy`} className={classes.shoptitle} variant="caption"  >
                        PRIVACY POLICY
                    </Typography>
                    <Typography onClick={scrollToTop} component={Link} to={`/term`} className={classes.shoptitle} variant="caption"  >
                        TERMS & CONDITIONS
                    </Typography>
                    <Typography onClick={scrollToTop} component={Link} to={`/help`} className={classes.shoptitle} variant="caption"  >
                        HELP
                    </Typography>
                    <Typography onClick={scrollToTop} component={Link} to={`/contact`} className={classes.shoptitle} variant="caption"  >
                        CONTACT
                    </Typography>
                    <Typography onClick={scrollToTop} component={Link} to={`/about`} className={classes.shoptitle} variant="caption"  >
                        ABOUT US
                    </Typography>
                </div>
                <div className={classes.contenticon}>
                    <RiInstagramFill color='#5ac5f6'  className={classes.socialicon} />
                </div>
                </div>
        </Container>
    )
    
}
export default Navbar