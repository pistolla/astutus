import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    ExpansionPanel, 
    ExpansionPanelDetails, 
    ExpansionPanelSummary, 
    Typography, 
    Grid, 
    List,
    ListItem,
    ListItemIcon,
    ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EcoIcon from '@material-ui/icons/Eco';
import WarningIcon from '@material-ui/icons/Warning';
import CategoryIcon from '@material-ui/icons/Category';
import ScoreIcon from '@material-ui/icons/Score';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    panel: {
        width: '100%',
        display: 'flex',
        flexWrap: 'nowrap'

    },
    panelItem: {
        width: '100%',
        flexGrow: 1
    }
}));

function MediaLink({ link, expanded, onExpanded, ...props }) {
    const classes = useStyles();
    const [content] = useState("panel" + `${link.id}` + "bh-content")
    const [header] = useState("panel" + `${link.id}` + "bh-header")
    const handleChange = panel => (event, isExpanded) => {
        onExpanded(isExpanded ? panel : false);
    }

    return (
        <ExpansionPanel expanded={expanded === link.id} onChange={handleChange(link.id)} data-test="LinkComponent">
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={content}
                id={header}
                onChange={handleChange(link.id)}>
                <Typography className={classes.heading}>{link.title}</Typography>
                <Typography className={classes.secondaryHeading}>{link.canonical_url}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container className={classes.panel} spacing={2}>
                    <Grid item xs={12} md={6} className={classes.panelItem}>
                        <List dense="dense">
                            <ListItem>
                                <ListItemIcon>
                                    <EcoIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={link.seed_amount !== undefined ? link.seed_amount : 0}
                                    secondary='Seed Amount'
                                    color="primary"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <WarningIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={link.seed_amount !== undefined && link.seed_amount > 0 ? 'Good' : 'Alert'}
                                    secondary='Credibility status'
                                    color="primary"
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.panelItem}>
                        <List dense="dense">
                            <ListItem>
                                <ListItemIcon>
                                    <ScoreIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={link.score}
                                    secondary="Credibity Score"
                                    color="primary"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CategoryIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={link.site_type}
                                    secondary="Site Category"
                                    color="primary"
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

export default MediaLink;