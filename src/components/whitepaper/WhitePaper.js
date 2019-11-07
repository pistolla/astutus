import { Box, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react';

const useStyles = makeStyles(theme => ({
    document: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(4, 5),
    }
}));

function WhitePaper(props) {
    const classes = useStyles();
    return (
        <Fragment>
            <Paper className={classes.document}>
                <Typography variant="h4" align="center" color="textSecondary" gutterBottom>
                    White Paper
                </Typography>
                <Typography component="div" color="textSecondary">
                <Box fontStyle="oblique" m={1}>
                    Last updated on: 7th November 2019
                </Box>
                </Typography>
                <Typography variant="h5" color="textSecondary">Abstract</Typography>
                <Typography paragraph color="textSecondary">
                    This document will outline the fundamental aspect of our model and why we chose our algorithms over
                    others. The objective of this paper is to explain what is working and what needs to be constantly monitored
                    and improved upon. It is less technical and can be read by anyone interested in automation of trading system.
                    In fact its our goal to make technical analysis of buying and selling of commodities a bliss. We seek to relieve
                    traders the emotional toll that crowds any risk-taking trader. Our solution comprises of proven machine learning
                    algorithms and then combines with trader intution and data driven strategies. This is a lofty goal in that finacial
                    models dont follow a prescribed pattern. Deep learning models have provided a reliable potential when taught with
                    past and simulated time series data. The state of machine learning in today service delivery has improved tremendously.
                    Before i dive deeper into learning, i would like to acknowledge the highly talented team that is working hard to improve
                    service delivery via Astutus model.

                </Typography>
                <Typography variant="h4" color="textSecondary">Technical Analysis</Typography>
                <Typography paragraph color="textSecondary">
                <Box fontStyle="italic" m={1}>
                    its being updated...
                </Box>
                </Typography>
            </Paper>
        </Fragment>
    )
}

export default WhitePaper;