import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper, Grid, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {

    },
    btnContainer: {
        display: 'flex',
        marginTop: '10px',
        alignItems: 'right'
    }
}))

function FilterMediaLinks({ onFilterScore, ...props }) {
    const classes = useStyles();
    const [score, setScore] = useState(1);
    const handleChange = (value) => {
        setScore(value);
    }
    return (
        <Grid container direction="row-reverse" className={classes.btnContainer} data-test="FilterMediaLinksComponent">
            <Select
                placeholder="'Filter by score"
                value={score}
                onChange={handleChange}
                inputProps={{ name: 'Filter by score', id: 'score-selected-filter' }}
                displayEmpty={false}>
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Increasing</MenuItem>
                <MenuItem value={2}>Decreasing</MenuItem>
            </Select>
        </Grid>
    );
}
export default FilterMediaLinks;