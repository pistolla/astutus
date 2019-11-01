import React, { useState, Fragment } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: "column"
    },
    drawer: {
        ['@media (min-width:600px)']: {
            width: drawerWidth,
            flexShrink: 0,
        },
        zIndex: 1000
    },
    menuButton: {
        marginRight: '8px',
        ['@media (min-width:600px)']: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: '7.5rem',
    },
    toolbar: {
        height: '70px'
    },
    text: {
        ...theme.typography.body1,
        fontSize: '0.875rem',
      },
      list: {
        marginTop: 0,
      },
}))

function About(props) {
    const theme = useTheme();
    const classes = useStyles();
    const [index, setIndex] = useState(2);
    
    
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleClick = (event) => {
        setIndex(event);
    }
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem button key="Getting Started" onClick={handleClick.bind(this, 0)}>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Getting Started" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key="Contact" onClick={handleClick.bind(this, 1)}>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Contact" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key="Legal" onClick={handleClick.bind(this, 2)}>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Legal" />
                </ListItem>
            </List>
        </div>
    );
    const showGettingStarted = () => {
        if(index === 1){
            return (<Manual {...props} />);
            
        }
        return (<div data-test="Agreement"></div>);
    }
    const showContact = () => {
        if(index === 2){
            return (<Contactform {...props} />);
            
        }
        return (<div data-test="Agreement"></div>);
    }
    const showAgreement = () => {
        if(index === 3){
            return (<Agreement {...props} />);
            
        }
        return (<div data-test="Agreement"></div>);
    }

    return (
        <div className={classes.root} data-test="AboutComponent">
            <nav className={classes.drawer} aria-label="Getting started">
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor="left"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                {showGettingStarted}
                {showContact}
                {showAgreement}
            </main>
        </div>
    )
}

function Contactform(props) {
    const classes = useStyles();

    return (
        <div>
            Contact Form
        </div>
    );
}

function Agreement(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Typography variant="h3" gutterBottom>
          Terms of Use
        </Typography>
        <Typography variant="h5">1. Terms</Typography>
        <Typography paragraph>
          By accessing the website at <a href='#'>Kwanta</a>,
          you are agreeing to be bound by these terms of service, all applicable
          laws and regulations, and agree that you are responsible for compliance
          with any applicable local laws. If you do not agree with any of these
          terms, you are prohibited from using or accessing this site. The
          materials contained in this website are protected by applicable
          copyright and trademark law.
        </Typography>
        <Typography variant="h5">2. Use License</Typography>
        <ol className={classes.list} type="a">
          <li className={classes.text}>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Company&#39;s website for
            personal, non-commercial transitory viewing only. This is the grant of
            a license, not a transfer of title, and under this license you may
            not:
            <ol type="i">
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose, or for any public
                display (commercial or non-commercial);
              </li>
              <li>
                attempt to decompile or reverse engineer any software contained on
                Company&#39;s website;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transfer the materials to another person or "mirror" the materials
                on any other server.
              </li>
            </ol>
          </li>
          <li className={classes.text}>
            This license shall automatically terminate if you violate any of these
            restrictions and may be terminated by Company at any time. Upon
            terminating your viewing of these materials or upon the termination of
            this license, you must destroy any downloaded materials in your
            possession whether in electronic or printed format.
          </li>
        </ol>
        <Typography variant="h5">3. Disclaimer</Typography>
        <ol className={classes.list} type="a">
          <li className={classes.text}>
            The materials on Company&#39;s website are provided on an &#39;as
            is&#39; basis. Company makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of intellectual
            property or other violation of rights.
          </li>
          <li className={classes.text}>
            Further, Company does not warrant or make any representations
            concerning the accuracy, likely results, or reliability of the use of
            the materials on its website or otherwise relating to such materials
            or on any sites linked to this site.
          </li>
        </ol>
        <Typography variant="h5">4. Limitations</Typography>
        <Typography paragraph>
          In no event shall Company or its suppliers be liable for any damages
          (including, without limitation, damages for loss of data or profit, or
          due to business interruption) arising out of the use or inability to use
          the materials on Company&#39;s website, even if Company or a Company
          authorized representative has been notified orally or in writing of the
          possibility of such damage. Because some jurisdictions do not allow
          limitations on implied warranties, or limitations of liability for
          consequential or incidental damages, these limitations may not apply to
          you.
        </Typography>
        <Typography variant="h5">5. Accuracy of materials</Typography>
        <Typography paragraph>
          The materials appearing on Company&#39;s website could include
          technical, typographical, or photographic errors. Company does not
          warrant that any of the materials on its website are accurate, complete
          or current. Company may make changes to the materials contained on its
          website at any time without notice. However Company does not make any
          commitment to update the materials.
        </Typography>
        <Typography variant="h5">6. Links</Typography>
        <Typography paragraph>
          Company has not reviewed all of the sites linked to its website and is
          not responsible for the contents of any such linked site. The inclusion
          of any link does not imply endorsement by Company of the site. Use of
          any such linked website is at the user&#39;s own risk.
        </Typography>
        <Typography variant="h5">7. Modifications</Typography>
        <Typography paragraph>
          Company may revise these terms of service for its website at any time
          without notice. By using this website you are agreeing to be bound by
          the then current version of these terms of service.
        </Typography>
        <Typography variant="h5">8. Governing Law</Typography>
        <Typography paragraph>
          These terms and conditions are governed by and construed in accordance
          with the laws of CA and you irrevocably submit to the exclusive
          jurisdiction of the courts in that State or location.
        </Typography>
      </div>
    );
}

function Manual(props) {
    const classes = useStyles();

    return (
        <div>
            Manual
        </div>
    );
}

export default About;